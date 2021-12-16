import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Container,
  TextInput,
  FlatList,
  Title,
  Subtitle,
  NotFoundContainer,
  Lottie,
} from './styles';
import {
  getSongs as getSongsAction,
  setPlayingTrackId,
} from '~/state/songs/actions';
import { getSortedSongs } from '~/state/songs/selectors';
import { SongPreview } from '~/components/SongPreview';
import { SortResults } from '~/components/SortResults';
import { Song } from '~/state/songs/types';

type HomeHeaderProps = {
  onSubmitEditing: (text: string) => void;
  onChange: (text: string) => void;
};
type HomeContentProps = {
  songs: Song[];
  onSongPress: (trackId: number) => void;
  isTyping: boolean;
  text: string;
};

export const HomeHeaderComponent = React.memo(
  ({ onSubmitEditing, onChange }: HomeHeaderProps) => {
    return (
      <Container>
        <Title>Music search</Title>
        <TextInput
          onSubmitEditing={e => onSubmitEditing(e.nativeEvent.text)}
          selectTextOnFocus
          onChange={e => onChange(e.nativeEvent.text)}
          clearButtonMode="while-editing"
          returnKeyType="search"
        />
      </Container>
    );
  },
);

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

export const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  const [text, setText] = React.useState('');
  const songs: Song[] = useSelector(getSortedSongs);

  const onSongPress = React.useCallback(
    trackId => {
      navigation.navigate('Player');
      dispatch(setPlayingTrackId(trackId));
    },
    [navigation, dispatch],
  );
  const onSuccess = () => setIsLoading(false);
  const onError = () => setIsLoading(false);
  const onSubmitEditing = (text: string) => {
    setIsLoading(true);
    dispatch(getSongsAction({ onSuccess, onError, term: text }));
    setIsTyping(false);
  };
  const onChange = (text: string) => {
    setText(text);
    setIsTyping(true);
  };

  return (
    <SafeAreaView>
      <HomeHeaderComponent
        onSubmitEditing={onSubmitEditing}
        onChange={onChange}
      />
      {isLoading ? (
        <Lottie
          source={require('~/assets/lotties/music-loader.json')}
          autoPlay
          loop
        />
      ) : (
        <HomeContentComponent
          songs={songs}
          onSongPress={onSongPress}
          isTyping={isTyping}
          text={text}
        />
      )}
    </SafeAreaView>
  );
};
