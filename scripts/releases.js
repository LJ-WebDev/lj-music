import { releases } from '../data/releasesData.js';

let releasesHTML = '';

releases.forEach((release) => {
  let tracksHTML = '';
  release.tracks.forEach((track) => {
    tracksHTML += `
    <li>
      <a href="${track.ytLinkTrack}" target="_blank" title="Open Track on YouTube">${track.title}</a>
    </li>
  `;
  });
  releasesHTML += `
    <section class="${release.className}">
      <a href="/releases/${release.title}.html" class="js-release-link">
          <div class="column-1">
            <a href="/releases/${release.className}.html"><img src="${release.img}" /></a>
          </div>
          <div class="column-2">
            <h2 class="release-title"><a href="${release.ytLinkAlbum}" target="_blank">${release.title}</a></h2>
            <p class="release-date-and-type">${release.releaseType} - ${release.releaseDate}</p>
            <p class="description">${release.description}</p>
            <ul class="tracks">
              ${tracksHTML}
            </ul>
          </div>
          <div class="column-3">
            <a
              href="${release.ytLinkAlbum}"
              target="_blank"
              title="Open Album on YouTube"
              ><img src="images/icons/youtube-black-icon-512.png"
            ></a>
          </div>
        </a>
      </section>
  `;
});

document.querySelector('.js-discography').innerHTML = releasesHTML;
