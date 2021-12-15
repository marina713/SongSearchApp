import * as React from 'react';
import { Song as SongType } from '~/state/songs/types';

import { Container, TrackName, Title, AlbumCover } from './styles';

export type Props = {
    song: SongType;
};

export const Song = React.memo(({ song }: Props) => (
    <Container>
        <TrackName>{song.trackName}</TrackName>
        <Title>{song.artistName}</Title>
        <AlbumCover source={{ uri: song.artworkUrl100 }} />
    </Container>
));
