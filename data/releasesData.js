export function getReleaseByClassName(UPC) {
  return releases.find((release) => release.UPC === UPC);
}
export function getTrackByISRC(ISRC) {
  return releases.tracks.find((track) => track.ISRC === ISRC);
}

export const releases = [
  {
    UPC: '5063585707349',
    className: 'glass-breaker',
    img: 'images/cover-art/glass-breaker-cover-art.jpg',
    title: 'Glass Breaker',
    releaseDate: '11/11/2024',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_lJoYLppXCf3bofUNnfppLwqr-XXiLBu_o',
    tracks: [
      {
        ISRC: 'GXESV2497855',
        title: 'Glass Breaker',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=SYGxhbzGrZg&list=OLAK5uy_lJoYLppXCf3bofUNnfppLwqr-XXiLBu_o&index=1',
      },
    ],
  },
  {
    UPC: '5063642045544',
    className: 'rising-from-below',
    img: 'images/cover-art/rising-from-below-cover-art.jpg',
    title: 'Rising from Below',
    releaseDate: '06/12/2024',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_kHuEiQfHnOimK2DCbyDTokU10OEwWZWDI',
    tracks: [
      {
        ISRC: 'GXBDT2482989',
        title: 'Rising from Below',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=n5NxkZwntAs&list=OLAK5uy_kHuEiQfHnOimK2DCbyDTokU10OEwWZWDI&index=1',
      },
      {
        ISRC: 'GXBDT2415106',
        title: 'Rising from Below [Extended Version]',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=SYGxhbzGrZg&list=OLAK5uy_lJoYLppXCf3bofUNnfppLwqr-XXiLBu_o&index=2',
      },
    ],
  },
  // {
  //   UPC: '5063642160872',
  //   className: 'jingle-bells',
  //   img: 'images/cover-art/jingle-bells-cover-art.jpg',
  //   title: 'Jingle Bells',
  //   releaseDate: '11/12/2024',
  //   description: '',
  // },
  // {
  //   UPC: '5063642526630',
  //   className: 'the-path',
  //   img: 'images/cover-art/the-path.jpg',
  //   title: 'The Path',
  //   releaseDate: '03/01/2024',
  //   description: '',
  // },
  // {
  //   UPC: '5063687939600',
  //   className: 'motivator-tension',
  //   img: 'images/cover-art/motivator-tension-cover-art.jpg',
  //   title: 'Motivator Tension',
  //   releaseDate: '28/02/2024',
  //   description: '',
  // },
  // {
  //   UPC: '5063687530357',
  //   className: 'care-free',
  //   img: 'images/cover-art/care-free-cover-art.jpg',
  //   title: 'Care Free',
  //   releaseDate: '21/03/2024',
  //   description: '',
  // },
];
