import {getSongs} from '../selectors';

const mockSongs = [
  {
    wrapperType: 'track',
    kind: 'song',
    artistId: 112018,
    collectionId: 1413920644,
    trackId: 1413921155,
    artistName: 'Nirvana',
    collectionName: 'Nirvana',
    trackName: 'Smells Like Teen Spirit',
    collectionCensoredName: 'Nirvana',
    trackCensoredName: 'Smells Like Teen Spirit',
    artistViewUrl: 'https://music.apple.com/us/artist/nirvana/112018?uo=4',
    collectionViewUrl:
      'https://music.apple.com/us/album/smells-like-teen-spirit/1413920644?i=1413921155&uo=4',
    trackViewUrl:
      'https://music.apple.com/us/album/smells-like-teen-spirit/1413920644?i=1413921155&uo=4',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/44/8d/b2/448db2c4-5185-9eb5-66c2-d1e7182687ad/mzaf_14615718485326206820.plus.aac.p.m4a',
    artworkUrl30:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/8d/58/a9/8d58a928-0663-71f7-4e5c-d2bd54a124fb/source/30x30bb.jpg',
    artworkUrl60:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/8d/58/a9/8d58a928-0663-71f7-4e5c-d2bd54a124fb/source/60x60bb.jpg',
    artworkUrl100:
      'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/8d/58/a9/8d58a928-0663-71f7-4e5c-d2bd54a124fb/source/100x100bb.jpg',
    collectionPrice: 9.99,
    trackPrice: 1.29,
    releaseDate: '1991-09-10T12:00:00Z',
    collectionExplicitness: 'notExplicit',
    trackExplicitness: 'notExplicit',
    discCount: 1,
    discNumber: 1,
    trackCount: 14,
    trackNumber: 5,
    trackTimeMillis: 301453,
    country: 'USA',
    currency: 'USD',
    primaryGenreName: 'Alternative',
    isStreamable: true,
  },
];

const mockState = {
  songs: mockSongs,
};

describe('Songs Selectors', () => {
  it('should return correct value of getSongs', () => {
    const selectedSongs = getSongs.resultFunc(mockState.songs);
    expect(selectedSongs).toEqual(mockState.songs);
  });
});
