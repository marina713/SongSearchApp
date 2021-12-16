import * as React from 'react';
import { Song as SongType } from '~/state/songs/types';
import { msToHMS, formatDate } from '~/utils/time'
import { ShareButton } from '../Share';

import {
    Container,
    TrackName,
    Title,
    AlbumCover,
    FlexRow,
    ExtraInfoContainer,
    ExtraInfoText,
    FlexRowContainer
} from './styles';

export type Props = {
    song: SongType;
};

export const Song = React.memo(({ song }: Props) => {
    const formattedReleaseDate = song.releaseDate && `Released ${formatDate(song.releaseDate)}`;
    const formattedLength = song.trackTimeMillis && `Length ${msToHMS(song.trackTimeMillis)}`;
    const price = song.currency === 'USD' ? `$${song.trackPrice}` : `${song.trackPrice}${song.currency}`;
    const genre = song.primaryGenreName || '';

    const extraInfo = [genre, formattedLength, formattedReleaseDate, price];

    return (
        <Container>
            <TrackName>{song.trackName}</TrackName>
            <Title>{song.artistName}</Title>
            <AlbumCover source={{ uri: song.artworkUrl100 }} />
            <FlexRowContainer>
                <ShareButton song={song} />
                <FlexRow>
                    {extraInfo.map(item => (item ?
                        <ExtraInfoContainer key={item}>
                            <ExtraInfoText>{item}</ExtraInfoText>
                        </ExtraInfoContainer> : null))}
                </FlexRow>
            </FlexRowContainer>
        </Container>
    )
});
