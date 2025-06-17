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
    releaseType: 'Single',
    releaseDate: '11/11/2024',
    duration: '1:53',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_lJoYLppXCf3bofUNnfppLwqr-XXiLBu_o',
    soundcloudEmbedLink:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1957778099&color=%23bdb731&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    tracks: [
      {
        ISRC: 'GXESV2497855',
        title: 'Glass Breaker',
        duration: '1:53',
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
    releaseType: 'Single',
    releaseDate: '06/12/2024',
    duration: '5:44',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_kHuEiQfHnOimK2DCbyDTokU10OEwWZWDI',
    soundcloudEmbedLink:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1918935055&color=%23647484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    tracks: [
      {
        ISRC: 'GXBDT2482989',
        title: 'Rising from Below',
        duration: '2:04',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=n5NxkZwntAs&list=OLAK5uy_kHuEiQfHnOimK2DCbyDTokU10OEwWZWDI&index=1',
      },
      {
        ISRC: 'GXBDT2415106',
        title: 'Rising from Below [Extended Version]',
        duration: '3:40',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=SYGxhbzGrZg&list=OLAK5uy_lJoYLppXCf3bofUNnfppLwqr-XXiLBu_o&index=2',
      },
    ],
  },
  {
    UPC: '5063642160872',
    className: 'jingle-bells',
    img: 'images/cover-art/jingle-bells-cover-art.jpg',
    title: 'Jingle Bells',
    releaseType: 'Single',
    releaseDate: '11/12/2024',
    duration: '3:51',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_m-K_psLxZapJBOSUnqvy6_p1cCpiE30Vw',
    tracks: [
      {
        ISRC: 'GXBDT2482990',
        title: 'Jingle Bells',
        duration: '3:51',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=2ST9E4PRkck&list=OLAK5uy_m-K_psLxZapJBOSUnqvy6_p1cCpiE30Vw&index=1',
      },
    ],
  },
  {
    UPC: '5063642526630',
    className: 'the-path',
    img: 'images/cover-art/the-path-cover-art.jpg',
    title: 'The Path',
    releaseType: 'Single',
    releaseDate: '03/01/2025',
    duration: '2:46',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_mPChdu2_yHdDRn4b4iTxErUWTKTJILB-k',
    tracks: [
      {
        ISRC: 'GXFHP2427953',
        title: 'The Path',
        duration: '2:46',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=54PXaISqGAk&list=OLAK5uy_mPChdu2_yHdDRn4b4iTxErUWTKTJILB-k&index=1',
      },
    ],
  },
  {
    UPC: '5063687939600',
    className: 'motivator-tension',
    img: 'images/cover-art/motivator-tension-cover-art.jpg',
    title: 'Motivator Tension',
    releaseType: 'Single',
    releaseDate: '28/02/2025',
    duration: '7:12',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_kL8PoQNl93j87L-5fERBHxP0FsA0LXz_8',
    tracks: [
      {
        ISRC: 'GX8KD2529949',
        title: 'Motivator Tension',
        duration: '7:12',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=ydy-VPzW_KA&list=OLAK5uy_kL8PoQNl93j87L-5fERBHxP0FsA0LXz_8&index=1',
      },
    ],
  },
  {
    UPC: '5063687530357',
    className: 'care-free',
    img: 'images/cover-art/care-free-cover-art.jpg',
    title: 'Care Free',
    releaseType: 'Single',
    releaseDate: '21/03/2025',
    duration: '4:06',
    description: '',
    ytLinkAlbum:
      'https://www.youtube.com/playlist?list=OLAK5uy_kgrvo9gEY3FDXhQgIZWJZk-NcFhJ6zvl8',
    tracks: [
      {
        ISRC: 'GX8KD2506201',
        title: 'Care Free',
        duration: '4:06',
        ytLinkTrack:
          'https://www.youtube.com/watch?v=s1wYn5AAYYw&list=OLAK5uy_kgrvo9gEY3FDXhQgIZWJZk-NcFhJ6zvl8&index=1',
      },
    ],
  },
];
