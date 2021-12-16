import * as React from 'react';
import renderer from 'react-test-renderer';
import { MOCK_SONGS } from '~/state/songs/mocks';

import { Song, Props } from '~/components/Song';

jest.mock('./styles', () => ({
  Container: 'Container',
  ButtonText: 'ButtonText',
  TrackName: 'TrackName',
  Title: 'Title',
  AlbumCover: 'AlbumCover',
  ExtraInfoContainer: 'ExtraInfoContainer',
  ExtraInfoText: 'ExtraInfoText',
  FlexRowContainer: 'FlexRowContainer',
}));

const initialProps = {
  song: MOCK_SONGS[0],
};

const testComponent = (props?: Props) => {
  return renderer.create(<Song {...initialProps} {...props} />);
};

describe('<Song />', () => {
  it('renders correctly with default props', () => {
    const tree = testComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom Song', () => {
    const tree = testComponent({
      ...initialProps,
      song: MOCK_SONGS[2],
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
