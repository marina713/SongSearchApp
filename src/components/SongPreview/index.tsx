import * as React from 'react';
import { Song } from '~/state/songs/types';
import { msToHMS, formatDate } from '~/utils/time'

import { Container, TrackName, Title, AlbumCover, FlexCol, FlexRow, ExtraInfoContainer, ExtraInfoText, SubTitle } from './styles';

export type Props = {
    song: Song;
    onSongPress?: () => void;
};

export const SongPreview = React.memo(({ song, onSongPress }: Props) => {
    const price = song.currency === 'USD' ? `$${song.trackPrice}` : `${song.trackPrice}${song.currency}`;
    const formattedReleaseDate = song.releaseDate && formatDate(song.releaseDate);
    const releaseDate = formattedReleaseDate ? `Released on ${formattedReleaseDate} · ` : '';
    const formattedLength = song.trackTimeMillis && msToHMS(song.trackTimeMillis);
    const length = formattedLength ? `Length ${formattedLength}` : '';

    return (
        <Container onPress={onSongPress}>
            <AlbumCover source={{ uri: song.artworkUrl100 }} />
            <FlexCol>
                <TrackName>{song.trackName}</TrackName>
                <Title>{`${song.artistName} · ${song.primaryGenreName}`}</Title>
                <SubTitle>{`${releaseDate}${length}`}</SubTitle>
                <FlexRow>
                    <ExtraInfoContainer>
                        <ExtraInfoText>{price}</ExtraInfoText>
                    </ExtraInfoContainer>
                </FlexRow>
            </FlexCol>
        </Container>
    )
});
