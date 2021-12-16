import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TrackPlayer, { Event, useTrackPlayerEvents, State, RepeatMode } from 'react-native-track-player';
import { getCurrentSong, getNextTrackId, getTrackPlayerSongs, getPrevTrackId } from '~/state/songs/selectors'
import { Song as SongType } from '~/state/songs/types';
import { Container, PlayButton, RowContainer, PlayIcon, PlayerContainer } from './styles';
import { Song } from '~/components/Song'
import { setPlayingTrackId } from '~/state/songs/actions';
import { ShareButton } from '~/components/Share'

type Props = {
    song: SongType;
    isPlaying: boolean;
};

// Subscribing to the following events inside PlayerComponent
const events = [
    Event.PlaybackState,
    Event.PlaybackError
];

export const PlayerComponent = React.memo(({ song, isPlaying }: Props) => {
    const dispatch = useDispatch();
    const nextTrackId = useSelector(getNextTrackId)
    const prevTrackId = useSelector(getPrevTrackId)

    const playPauseSource = isPlaying ?
        require('~/assets/images/pause.png') : require('~/assets/images/play.png');

    const onPressPlayPause = () => isPlaying ? TrackPlayer.pause() : TrackPlayer.play();
    const onPressBack = () => {
        dispatch(setPlayingTrackId(prevTrackId))
        TrackPlayer.skipToPrevious();
    };
    const onPressNext = () => {
        dispatch(setPlayingTrackId(nextTrackId))
        TrackPlayer.skipToNext()
    };

    return (
        <Container>
            <ShareButton song={song} />
            <PlayerContainer>
                <Song song={song} />
                <RowContainer>
                    <PlayButton onPress={onPressBack}>
                        <PlayIcon smaller source={require('~/assets/images/back.png')} />
                    </PlayButton>
                    <PlayButton onPress={onPressPlayPause}>
                        <PlayIcon source={playPauseSource} />
                    </PlayButton>
                    <PlayButton onPress={onPressNext}>
                        <PlayIcon smaller source={require('~/assets/images/next.png')} />
                    </PlayButton>
                </RowContainer>
            </PlayerContainer>
        </Container>
    )
});

export const Player = () => {
    const { index: currentIndex, song: currentSong } = useSelector(getCurrentSong);
    const songs = useSelector(getTrackPlayerSongs)

    const [playerState, setPlayerState] = useState(null)

    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();
        // Add songs to player
        await TrackPlayer.add(songs);
        // Set current song in queue to current index
        await TrackPlayer.skip(currentIndex);
        // Enable Queue repeat mode
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    };

    useEffect(() => { start(); return () => TrackPlayer.destroy(); }, [])

    useTrackPlayerEvents(events, (event) => {
        if (event.type === Event.PlaybackError) {
            console.warn('An error occured while playing the current track.');
        }
        if (event.type === Event.PlaybackState) {
            setPlayerState(event.state);
        }
    });

    const isPlaying = playerState === State.Playing;

    if (!currentSong) return null;
    return <PlayerComponent song={currentSong} isPlaying={isPlaying} />;
};
