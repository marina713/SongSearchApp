import * as React from 'react';
import { Song } from '~/state/songs/types';
import { msToHMS, formatDate } from '~/utils/time'

import { Container, TrackName, Title, AlbumCover, FlexCol, FlexRow, ExtraInfoContainer, ExtraInfoText, SubTitle } from './styles';

export type Props = {
    song: Song;
    onSongPress?: () => void;
};

export const SongPreview = React.memo(({ song, onSongPress }: Props) => {
    const price = song.currency === 'USD' ? `$${song.trackPrice}` : `${song.trackPrice} ${song.currency}`;

    return (
        <Container onPress={onSongPress}>
            <AlbumCover source={{ uri: song.artworkUrl100 }} />
            <FlexCol onPress={onSongPress}>
                <TrackName>{song.trackName}</TrackName>
                <Title>{`${song.artistName} · ${song.primaryGenreName}`}</Title>
                <SubTitle>{`Released on ${formatDate(song.releaseDate)} · Length ${msToHMS(song.trackTimeMillis)}`}</SubTitle>
                <FlexRow>
                    <ExtraInfoContainer>
                        <ExtraInfoText>{price}</ExtraInfoText>
                    </ExtraInfoContainer>
                </FlexRow>
            </FlexCol>
        </Container>
    )
});
