import {
  getSongs,
  getSongsLength,
  getSortBy,
  getPlayingTrackId,
  getSortedSongs,
  getSongByTrackId,
  getCurrentSong,
  getNextTrackId,
  getPrevTrackId,
} from '../selectors';
import {mockState, MOCK_SONGS} from '../mocks';

describe('Songs Selectors', () => {
  it('should return correct value of getSongs', () => {
    const selectedSongs = getSongs.resultFunc(mockState);
    expect(selectedSongs).toEqual(mockState.songs);
  });
  it('should return correct value of getSongsLength', () => {
    const selectedSongs = getSongsLength.resultFunc(mockState.songs);
    expect(selectedSongs).toEqual(mockState.songs.length);
  });
  it('should return correct value of getSortBy', () => {
    const selectedSongs = getSortBy.resultFunc(mockState);
    expect(selectedSongs).toEqual(mockState.sortBy);
  });
  it('should return correct value of getPlayingTrackId', () => {
    const selectedSongs = getPlayingTrackId.resultFunc(mockState);
    expect(selectedSongs).toEqual(mockState.playingTrackId);
  });
  it('should return correct value of getSortedSongs', () => {
    const selectedSongs = getSortedSongs.resultFunc(
      mockState.songs,
      mockState.sortBy.type,
      mockState.sortBy.order,
    );
    expect(selectedSongs).toEqual(
      MOCK_SONGS.sort((a, b) =>
        a.trackTimeMillis > b.trackTimeMillis ? 1 : -1,
      ),
    );
  });
  it('should return correct value of getSongByTrackId', () => {
    const selectedSongs = getSongByTrackId.resultFunc(
      MOCK_SONGS,
      MOCK_SONGS[2].trackId,
    );
    expect(selectedSongs).toEqual(mockState.songs[2]);
  });
  it('should return correct value of getCurrentSong', () => {
    const selectedSongs = getCurrentSong.resultFunc(
      MOCK_SONGS[2].trackId,
      MOCK_SONGS,
    );
    expect(selectedSongs).toEqual({index: 2, song: mockState.songs[2]});
  });
  it('should return correct value of getNextTrackId', () => {
    const selectedSongs = getNextTrackId.resultFunc(
      {index: 2, song: mockState.songs[2]},
      MOCK_SONGS,
      MOCK_SONGS.length,
    );
    expect(selectedSongs).toEqual(mockState.songs[3].trackId);
  });
  it('should return correct value of getNextTrackId when the current song is the last one', () => {
    const selectedSongs = getNextTrackId.resultFunc(
      {index: 3, song: mockState.songs[3]},
      MOCK_SONGS,
      MOCK_SONGS.length,
    );
    expect(selectedSongs).toEqual(mockState.songs[0].trackId);
  });
  it('should return correct value of getPrevTrackId', () => {
    const selectedSongs = getPrevTrackId.resultFunc(
      {index: 2, song: mockState.songs[2]},
      MOCK_SONGS,
      MOCK_SONGS.length,
    );
    expect(selectedSongs).toEqual(mockState.songs[1].trackId);
  });
  it('should return correct value of getPrevTrackId when is the current song is the first one', () => {
    const selectedSongs = getPrevTrackId.resultFunc(
      {index: 0, song: mockState.songs[0]},
      MOCK_SONGS,
      MOCK_SONGS.length,
    );
    expect(selectedSongs).toEqual(
      mockState.songs[MOCK_SONGS.length - 1].trackId,
    );
  });
});
