import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Song } from '~/components/Song';
import { CenterView } from '~/components/container/center-view';

storiesOf('Song', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with song', () => (
    <Song
      song={{
        artistId: 156488786,
        trackId: 1444896574,
        artistName: text('Artist Name', 'Sam Smith'),
        trackName: text('Track Name', 'Nirvana'),
        trackPrice: number('Price', 0.62),
        releaseDate: '2013-01-01T12:00:00Z',
        trackTimeMillis: 197551,
        currency: 'USD',
        primaryGenreName: 'Pop',
        artworkUrl100:
          'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/e4/f9/59/e4f959ff-e758-ff29-4b26-39ae222489c8/source/100x100bb.jpg',
      }}
    />
  ));
