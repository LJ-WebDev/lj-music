window.onload = function () {
  const header = document.querySelector('header');

  header.style.width = '100%';
  header.style.height = '80px';
  header.style.margin = '15px auto';
  header.style.opacity = '1';

  setTimeout(function () {
    const headerChildren = document.querySelector('.header-main-logo');

    headerChildren.style.opacity = '1';
  }, 800);

  setTimeout(function () {
    const headerChildren = document.querySelector('.header-main-nav');

    headerChildren.style.opacity = '1';
  }, 1200);

  setTimeout(function () {
    const headerChildren = document.querySelector(
      '.header-main-external-links'
    );

    headerChildren.style.opacity = '1';
  }, 1600);
};
/*
const externalLinks = [
    document.querySelector('.js-external-links-list-item-1'),
    document.querySelector('.js-external-links-list-item-2'),
    document.querySelector('.js-external-links-list-item-3'),
    document.querySelector('.js-external-links-list-item-4'),
    document.querySelector('.js-external-links-list-item-5'),
    document.querySelector('.js-external-links-list-item-6')
];
*/

let clickChecker = [false, false, false, false, false, false];

function hMELMouseEnter(num) {
  const hMELListItem = document.querySelector(
    `#js-header-main-external-links-list-item-${num}`
  );
  hMELListItem.style.borderRadius = '100%';
  hMELListItem.style.marginBottom = '15px';
  hMELListItem.style.cursor = 'pointer';
  if (num === 1) {
    hMELListItem.style.boxShadow =
      '0 0 0.5em var(--color-apple), 0 0 1em var(--color-apple)';
  } else if (num === 2) {
    hMELListItem.style.boxShadow =
      '0 0 0.5em var(--color-spotify), 0 0 1em var(--color-spotify)';
  } else if (num === 3) {
    hMELListItem.style.boxShadow =
      '0 0 0.5em var(--color-tidal), 0 0 1em var(--color-tidal)';
  } else if (num === 4) {
    hMELListItem.style.boxShadow =
      '0 0 0.5em var(--color-amazon), 0 0 1em var(--color-amazon)';
  } else if (num === 5) {
    hMELListItem.style.boxShadow =
      '0 0 0.5em var(--color-youtube), 0 0 1em var(--color-youtube)';
  } else if (num === 6) {
    hMELListItem.style.boxShadow =
      '0 0 0.5em var(--color-soundcloud), 0 0 1em var(--color-soundcloud)';
  }
  // Adding the click event listener when mouse enters for the first time.
  if (!clickChecker[num - 1]) {
    hMELListItem.addEventListener('click', function onClickEffect() {
      clickChecker[num - 1] = true; // Mark it as clicked
    });
  }
}

function hMELMouseLeave(num) {
  const hMELListItem = document.querySelector(
    `#js-header-main-external-links-list-item-${num}`
  );
  hMELListItem.style.borderRadius = '25%';
  hMELListItem.style.marginBottom = '0px';
  if (!clickChecker[num - 1]) {
    hMELListItem.style.boxShadow = 'none';
  }
}

/* 
const context = document.createElement("canvas").getContext("2d");
context.drawImage(imageObject, 0, 0, 1, 1);
const i = context.getImageData(0, 0, 1, 1).data;
const HEX = "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1);
*/
/*
const header = document.querySelector('header');

window.onload = function headerExpand() {
    header.style.width = 'calc(100% - 80px)';
};

window.onload = function headerReveal() {
    header.style.opacity = '1';
};

headerExpand();
headerReveal();
*/

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight) {
    footerLoad();
  }
});

function footerLoad() {
  const footer = document.querySelector('footer');
}
