let headerHTML = '';

headerHTML += `
  <div class="header-main-logo">
    <a href="index.html">
      <img
        src="images/logos/lj_music-logo-large-transparent_bg-2.png"
        alt="LJ Music logo"
      />
    </a>
  </div>

  <nav class="header-main-nav">
    <ul>
      <li><a href="index.html">HOME</a></li>
      <li><a href="about.html">ABOUT</a></li>
      <li><a href="releases.html">RELEASES</a></li>
      <li><a href="contact.html">CONTACT</a></li>
    </ul>
  </nav>

  <div class="header-main-external-links">
    <ul>
      <li>
        <a
          onmouseenter="hMELMouseEnter(1);"
          onmouseleave="hMELMouseLeave(1);"
          target="_blank"
          href="https://music.apple.com/au/artist/lj-music/1779913125"
        >
          <img
            id="js-header-main-external-links-list-item-1"
            src="images/icons/apple-music-icon-96.png"
            alt=""
          />
        </a>
      </li>
      <li id="js-external-links-list-item-2">
        <a
          onmouseenter="hMELMouseEnter(2);"
          onmouseleave="hMELMouseLeave(2);"
          target="_blank"
          href="https://open.spotify.com/artist/3N4XRfTpU82HD2mxy9sFbi"
        >
          <img
            id="js-header-main-external-links-list-item-2"
            src="images/icons/spotify-square-color-icon-96.png"
            alt=""
          />
        </a>
      </li>
      <li id="js-external-links-list-item-3">
        <a
          onmouseenter="hMELMouseEnter(3);"
          onmouseleave="hMELMouseLeave(3);"
          target="_blank"
          href="https://listen.tidal.com/artist/53337213"
        >
          <img
            id="js-header-main-external-links-list-item-3"
            src="images/icons/tidal-square-black-icon-96.png"
            alt=""
          />
        </a>
      </li>
      <li id="js-external-links-list-item-4">
        <a
          onmouseenter="hMELMouseEnter(4);"
          onmouseleave="hMELMouseLeave(4);"
          target="_blank"
          href="https://music.amazon.com.au/artists/B0DTK3HW2M/lj-music"
        >
          <img
            id="js-header-main-external-links-list-item-4"
            src="images/icons/amazon-music-square-color-icon-96-2.png"
            alt=""
          />
        </a>
      </li>
      <li id="js-external-links-list-item-5">
        <a
          onmouseenter="hMELMouseEnter(5);"
          onmouseleave="hMELMouseLeave(5);"
          target="_blank"
          href="https://www.youtube.com/channel/UCmKZiD8OpGllxswOmoSTTaw"
        >
          <img
            id="js-header-main-external-links-list-item-5"
            src="images/icons/youtube-app-icon-96.png"
            alt=""
          />
        </a>
      </li>
      <li id="js-external-links-list-item-6">
        <a
          onmouseenter="hMELMouseEnter(6);"
          onmouseleave="hMELMouseLeave(6);"
          target="_blank"
          href="https://soundcloud.com/lj-music-968431961"
        >
          <img
            id="js-header-main-external-links-list-item-6"
            src="images/icons/soundcloud-square-color-icon-96.png"
            alt=""
          />
        </a>
      </li>
    </ul>
  </div>
`;

document.querySelector('.js-header').innerHTML = headerHTML;
