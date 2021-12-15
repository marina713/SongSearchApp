import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';

import { Container, TextInput, FlatList, Title } from './styles';
import { getSongs as getSongsAction } from '~/state/songs/actions';
import { getSortedSongs } from '~/state/songs/selectors';
import { SongPreview } from '~/components/SongPreview'
import { SortResults } from '~/components/SortResults'
import { Song } from '~/state/songs/types';

type Props = {
  onError: () => void;
  onSuccess: () => void;
  onSubmitEditing: (text: string) => void;
  onChangeText: (newValue: string) => void;
};

export const HomeComponent = React.memo(
  ({ onChangeText, onError, onSuccess, onSubmitEditing }: Props) => (
    <Container>
      <Title>Music search</Title>
      <TextInput
        onSubmitEditing={e => onSubmitEditing(e.nativeEvent.text)} returnKeyType="search" />
    </Container>
  )
);

export const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const onSongPress = React.useCallback((trackId) => {
    navigation.navigate('Player', { trackId });
  }, [navigation]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState('');
  const songs: Song[] = useSelector(getSortedSongs);

  const onSuccess = () => setIsLoading(false);
  const onError = () => setIsLoading(false);

  const onSubmitEditing = (text: string) => {
    setIsLoading(true)
    dispatch(getSongsAction({ onSuccess, onError, term: text }))
  };

  const onChangeText = (newValue: string) => setValue(newValue)

  return (
    <>
      <HomeComponent
        onSuccess={onSuccess}
        onError={onError}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing} />
      {isLoading ?
        <LottieView
          source={require('~/assets/lotties/music-loader.json')}
          style={{ width: 250, alignSelf: 'center' }}
          autoPlay
          loop
        /> :
        songs.length > 0 ?
          <>
            <SortResults />
            <FlatList
              data={songs}
              renderItem={({ item }: { item: any }) => <SongPreview song={item} onSongPress={() => onSongPress(item.trackId)} />}
              keyExtractor={(item: any) => item.trackId} />
          </> : null
      }

    </>
  );
};
