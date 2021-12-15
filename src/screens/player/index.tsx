import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TrackPlayer from 'react-native-track-player';
import { getSongByTrackId, getSortedSongs } from '~/state/songs/selectors'
import { Song as SongType } from '~/state/songs/types';
import { Container, PlayButton, RowContainer, PlayIcon } from './styles';
import { Song } from '~/components/Song'

type Props = {
    isLoading: boolean;
    song: SongType;
};

export const PlayerComponent = React.memo(({ isLoading, song }: Props) => {
    if (!song.artworkUrl100 || !song.previewUrl) return null;
    const songs = useSelector(getSortedSongs)
    const start = async (song) => {
        // Set up the player
        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        await TrackPlayer.add({
            id: song.trackId,
            url: song.previewUrl,
            title: song.trackName,
            artist: song.artistName,
            artwork: song.artworkUrl100
        });

        await TrackPlayer.add(songs);
    };

    React.useEffect(() => { start(song) }, [song])

    const onPressPlay = () => TrackPlayer.play();
    const onPressPause = () => TrackPlayer.pause();
    const onPressBack = () => TrackPlayer.skipToPrevious();
    const onPressNext = () => TrackPlayer.skipToNext();

    return (
        <Container>
            <Song song={song} />
            <RowContainer>
                <PlayButton onPress={onPressBack}>
                    <PlayIcon smaller source={require('~/assets/images/back.png')} />
                </PlayButton>
                <PlayButton onPress={onPressPlay}>
                    <PlayIcon source={require('~/assets/images/play.png')} />
                </PlayButton>
                <PlayButton onPress={onPressPause}>
                    <PlayIcon source={require('~/assets/images/pause.png')} />
                </PlayButton>
                <PlayButton onPress={onPressNext}>
                    <PlayIcon smaller source={require('~/assets/images/next.png')} />
                </PlayButton>
            </RowContainer>
            {/* {isLoading ? <ActivityIndicator /> : <Quote>{song.trackName}</Quote>} */}
        </Container>
    )
});

export const Player = ({ route }) => {
    const { trackId } = route.params;
    const song = useSelector(state => getSongByTrackId(state, trackId));
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch();

    const onSuccess = () => setIsLoading(false);
    const onError = () => setIsLoading(false);

    React.useEffect(() => {
        setIsLoading(true);
    }, [dispatch]);

    if (!song) return null;
    return <PlayerComponent isLoading={isLoading} song={song} />;
};
