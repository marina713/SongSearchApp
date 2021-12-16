import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Lottie } from './styles';
import {
  getSongs as getSongsAction,
  setPlayingTrackId,
} from '~/state/songs/actions';
import { getSortedSongs } from '~/state/songs/selectors';
import { Song } from '~/state/songs/types';
import { HomeHeaderComponent } from './components/header';
import { HomeContentComponent } from './components/content';

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
