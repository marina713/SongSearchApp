import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';

import { Container, TextInput, FlatList, Title, Subtitle, NotFoundContainer } from './styles';
import { getSongs as getSongsAction, setPlayingTrackId } from '~/state/songs/actions';
import { getSortedSongs } from '~/state/songs/selectors';
import { SongPreview } from '~/components/SongPreview'
import { SortResults } from '~/components/SortResults'
import { Song } from '~/state/songs/types';

type Props = {
  onSubmitEditing: (text: string) => void;
  onChange: () => void;
};

export const HomeComponent = React.memo(
  ({ onSubmitEditing, onChange }: Props) => {

    return (
      <Container>
        <Title>Music search</Title>
        <TextInput
          onSubmitEditing={e => onSubmitEditing(e.nativeEvent.text)}
          selectTextOnFocus
          onChange={onChange}
          clearButtonMode="while-editing"
          returnKeyType="search" />
      </Container>
    )
  });

export const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);

  const onSongPress = React.useCallback((trackId) => {
    navigation.navigate('Player');
    dispatch(setPlayingTrackId(trackId));
  }, [navigation]);

  const songs: Song[] = useSelector(getSortedSongs);

  const onSuccess = () => setIsLoading(false);
  const onError = () => setIsLoading(false);

  const onSubmitEditing = (text: string) => {
    setIsLoading(true);
    dispatch(getSongsAction({ onSuccess, onError, term: text }));
    setIsTyping(false);
  };

  const onChange = () => setIsTyping(true);

  return (
    <>
      <HomeComponent onSubmitEditing={onSubmitEditing} onChange={onChange} />
      {isLoading ?
        <LottieView
          source={require('~/assets/lotties/music-loader.json')}
          style={{ width: 250, alignSelf: 'center' }}
          autoPlay
          loop /> :
        songs.length > 0 ?
          <>
            <SortResults />
            <FlatList
              data={songs}
              renderItem={({ item }: { item: any }) =>
                <SongPreview song={item} onSongPress={() => onSongPress(item.trackId)} />}
              keyExtractor={(item: any, index) => `${item.trackId}-${index}`} />
          </> : isTyping ? null :
            <NotFoundContainer>
              <LottieView
                source={require('~/assets/lotties/not-found.json')}
                style={{ width: 250, alignSelf: 'center' }}
                autoPlay />
              <Subtitle> No music found, try again!</Subtitle>
            </NotFoundContainer>
      }
    </>
  );
};
