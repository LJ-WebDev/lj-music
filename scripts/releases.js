import { releases } from '../data/releasesData.js';

let releasesHTML = '';

releases.forEach((release) => {
  let tracksHTML = '';

  release.tracks.forEach((track) => {
    tracksHTML += `
    <tr>
      <td>${release.tracks.indexOf(track) + 1}</td>
      <td><a href="${track.link}" title="Open Track on YouTube">${
      track.title
    }</a></td>
      <td>${track.duration}</td>
    </tr>
    `;
  });

  releasesHTML += `
    <section class="${release.className}">
      <div class="column-1">
        <a href="${release.className}.html"><img src="${release.img}" /></a>
      </div>
      <div class="column-2">
        <h2 class="release-title"><a href="${
          release.ytLinkAlbum
        }" target="_blank" title="Open Album on YouTube">${
    release.title
  }</a></h2>
        <p class="release-date-and-type">
          ${release.releaseType} - ${release.releaseDate} •
          ${release.tracks.length}
          ${release.tracks.length === 1 ? 'Track' : 'Tracks'},
          ${release.duration}
        </p>
        <p class="description">${release.description}</p>
        <table class="tracks js-tracks">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th><img src="images/icons/clock-icon.png" alt="Duration"></th>
            </tr>
          </thead>
          <tbody>
            ${tracksHTML}
          </tbody>
        </table>
      </div>
      <div class="column-3">
        <a
          href="${release.ytLinkAlbum}"
          target="_blank"
          title="Open Album on YouTube"
          ><img src="images/icons/youtube-black-icon-512.png"
        ></a>
      </div>
    </section>
  `;
});

document.querySelector('.js-discography').innerHTML = releasesHTML;
