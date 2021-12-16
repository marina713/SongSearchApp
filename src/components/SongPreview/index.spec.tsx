import * as React from 'react';
import renderer from 'react-test-renderer';
import { MOCK_SONGS } from '~/state/songs/mocks';

import { SongPreview, Props } from '~/components/SongPreview';

jest.mock('./styles', () => ({
  Container: 'Container',
  TrackName: 'TrackName',
  Title: 'Title',
  AlbumCover: 'AlbumCover',
  ExtraInfoContainer: 'ExtraInfoContainer',
  ExtraInfoText: 'ExtraInfoText',
  FlexRow: 'FlexRow',
  FlexCol: 'FlexCol',
  SubTitle: 'SubTitle'
}));

const initialProps = {
  song: MOCK_SONGS[0],
  onSongPress: () => { }
};

const testComponent = (props?: Props) => {
  return renderer.create(<SongPreview {...initialProps} {...props} />);
};

describe('<SongPreview />', () => {
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
