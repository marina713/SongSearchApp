import React from 'react';
import { Share, TouchableOpacity } from 'react-native';
import { Song } from '~/state/songs/types';
import { Container, Image } from './styles';

type Props = { song: Song };

export const ShareButton = React.memo(({ song }: Props) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this song: ${song.trackName} by ${song.artistName}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {}
  };
  return (
    <Container>
      <TouchableOpacity onPress={onShare}>
        <Image source={require('~/assets/images/share.png')} />
      </TouchableOpacity>
    </Container>
  );
});
