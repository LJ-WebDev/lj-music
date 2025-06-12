// SLIDESHOW START
const slides = [
  document.querySelector('#slide-1'),
  document.querySelector('#slide-2'),
  document.querySelector('#slide-3'),
  document.querySelector('#slide-4'),
  document.querySelector('#slide-5'),
  document.querySelector('#slide-6'),
];

const slideContainer = document.querySelector('.slideshow-container');

let currentSlide = 0;

function updateSlides() {
  // if (slides.some(slide => slide === null)) {
  // console.error('One or more slides are missing!');
  // return;
  // }

  // Remove 'active' from all slides
  // slides[0, 1, 3, 4, 5].classList.remove('active', 'slide-in', 'slide-out');

  slides.forEach((slide) => {
    slide.classList.remove('active', 'slide-in', 'slide-out');
  });

  // Add 'active' to the current slide
  if (currentSlide === 0) {
    slides[5].classList.add('slide-in');
    slides[0].classList.add('active');
    slides[1].classList.add('slide-out');
    slideContainer.style.boxShadow = '0 0 10px #bfbb74';
    slideContainer.style.boxShadow = '0 0 30px #bfbb74';
  } else if (currentSlide === 1) {
    slides[0].classList.add('slide-in');
    slides[1].classList.add('active');
    slides[2].classList.add('slide-out');
    slideContainer.style.boxShadow = '0 0 10px #494e4f';
    slideContainer.style.boxShadow = '0 0 30px #494e4f';
  } else if (currentSlide === 2) {
    slides[1].classList.add('slide-in');
    slides[2].classList.add('active');
    slides[3].classList.add('slide-out');
    slideContainer.style.boxShadow = '0 0 10px #cbd1d2';
    slideContainer.style.boxShadow = '0 0 25px #cbd1d2';
  } else if (currentSlide === 3) {
    slides[2].classList.add('slide-in');
    slides[3].classList.add('active');
    slides[4].classList.add('slide-out');
    slideContainer.style.boxShadow = '0 0 10px #11383b';
    slideContainer.style.boxShadow = '0 0 30px #11383b';
  } else if (currentSlide === 4) {
    slides[3].classList.add('slide-in');
    slides[4].classList.add('active');
    slides[5].classList.add('slide-out');
    slideContainer.style.boxShadow = '0 0 10px #7a7771';
    slideContainer.style.boxShadow = '0 0 30px #7a7771';
  } else if (currentSlide === 5) {
    slides[4].classList.add('slide-in');
    slides[5].classList.add('active');
    slides[0].classList.add('slide-out');
    slideContainer.style.boxShadow = '0 0 10px #250810';
    slideContainer.style.boxShadow = '0 0 30px #250810';
  }
}

function slideshow() {
  currentSlide = (currentSlide + 1) % 6; // Increment currentSlide and loop back to 0 after 5
  updateSlides();
}

// Start the slideshow and change slides every 4 seconds
setInterval(slideshow, 4000);

// Initial slide setup
updateSlides();
//SLIDESHOW END
