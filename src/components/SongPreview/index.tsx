import * as React from 'react';
import { Song } from '~/state/songs/types';

import { Container, TrackName, Title, AlbumCover, FlexCol } from './styles';

export type Props = {
    song: Song;
    onSongPress?: () => void;
};

export const SongPreview = React.memo(({ song, onSongPress }: Props) => (
    <Container onPress={onSongPress}>
        <AlbumCover source={{ uri: song.artworkUrl100 }} />
        <FlexCol onPress={onSongPress}>
            <TrackName>{song.trackName}</TrackName>
            <Title>{song.artistName}</Title>
        </FlexCol>
    </Container>
));
