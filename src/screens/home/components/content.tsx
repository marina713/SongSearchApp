import * as React from 'react';

import { FlatList, Subtitle, NotFoundContainer, Lottie } from '../styles';
import { SongPreview } from '~/components/SongPreview';
import { SortResults } from '~/components/SortResults';
import { Song } from '~/state/songs/types';

type HomeContentProps = {
  songs: Song[];
  onSongPress: (trackId: number) => void;
  isTyping: boolean;
  text: string;
};

export const HomeContentComponent = React.memo(
  ({ songs, onSongPress, isTyping, text }: HomeContentProps) =>
    songs.length > 0 ? (
      <>
        <SortResults />
        <FlatList
          data={songs}
          renderItem={({ item }: { item: any }) => (
            <SongPreview
              song={item}
              onSongPress={() => onSongPress(item.trackId)}
            />
          )}
          keyExtractor={(item: any, index) => `${item.trackId}-${index}`}
        />
      </>
    ) : isTyping || !text ? null : (
      <NotFoundContainer>
        <Lottie source={require('~/assets/lotties/not-found.json')} autoPlay />
        <Subtitle> No music found, try again!</Subtitle>
      </NotFoundContainer>
    ),
);
