let footerHTML = '';

footerHTML += `
      <div class="footer-contact">
        <ul>
          <li>
            <a href="mailto:ljmusic61@gmail.com"
              ><img
                src="images/icons/mail-white-fill.png"
                class="footer-mail-icon"
                alt="Mail:"
                style="height: 1em"
              />
              ljmusic61@gmail.com</a
            >
          </li>
        </ul>
      </div>

      <div></div>

      <div class="footer-streaming-platforms">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://music.apple.com/au/artist/lj-music/1779913125"
              class="footer-apple-music"
              >Apple Music</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://open.spotify.com/artist/3N4XRfTpU82HD2mxy9sFbi"
              class="footer-spotify"
              >Spotify</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://listen.tidal.com/artist/53337213"
              class="footer-tidal"
              >Tidal</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://music.amazon.com.au/artists/B0DTK3HW2M/lj-music"
              class="footer-amazon-music"
              >Amazon Music</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCmKZiD8OpGllxswOmoSTTaw"
              class="footer-youtube"
              >YouTube</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://music.youtube.com/channel/UCmKZiD8OpGllxswOmoSTTaw"
              class="footer-youtube-music"
              >YouTube Music</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://soundcloud.com/lj-music-968431961"
              class="footer-soundcloud"
              >SoundCloud</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.deezer.com/en/artist/289807371"
              class="footer-deezer"
              >Deezer</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.boomplay.com/artists/82567515"
              class="footer-boomplay"
              >Boomplay</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.iheart.com/artist/lj-music-44670225/"
              class="footer-iheart"
              >iHeart Radio</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.jiosaavn.com/artist/lj-music-songs/vBjLTVbasLQ"
              class="footer-jiosaavn"
              >JioSaavn</a
            >
          </li>
        </ul>
      </div>
`;

document.querySelector('.js-footer').innerHTML = footerHTML;
