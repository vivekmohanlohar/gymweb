// ON SCROLL NAVIGATION STYLING SCRIPT STARTS HERE
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Loading animation for the page
var loaderImg = document.querySelector(".img");
var loader = document.querySelector(".loader");

window.addEventListener('load', hides);

function hides() {
  loader.classList.add("hide");
  loaderImg.classList.add("ImgNone");
}

// NAVIGATION MENU TOGGLE BUTTON SCRIPT STARTS HERE
const Menu = document.querySelector(".nav__navigation");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("menu-active");
  Menu.classList.toggle("active");
});

const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down, hide the navigation
    nav.classList.add('hidden');
    nav.classList.remove('visible');

    // Close the menu if open
    if (Menu.classList.contains("active")) {
      menuBtn.classList.remove("menu-active");
      Menu.classList.remove("active");
    }
  } else {
    // Scrolling up, show the navigation and close the menu
    nav.classList.add('visible');
    nav.classList.remove('hidden');

    if (Menu.classList.contains("active")) {
      menuBtn.classList.remove("menu-active");
      Menu.classList.remove("active");
    }
  }
  lastScrollTop = currentScrollTop;
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isMenuOpen = Menu.classList.contains('active');
  const isClickInsideMenu = Menu.contains(event.target);
  const isClickInsideButton = menuBtn.contains(event.target);

  if (isMenuOpen && !isClickInsideMenu && !isClickInsideButton) {
    menuBtn.classList.remove("menu-active");
    Menu.classList.remove("active");
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  // Variables to handle swipe
  let touchStartX = 0;
  let touchEndX = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    }

    // Move the slides
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dot active class
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  // Set up dot menu event listeners
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      currentSlide = parseInt(dot.getAttribute('data-slide')) - 1;
      showSlide(currentSlide);
    });
  });

  // Automatic slide change (optional)
  setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000); // Change every 3 seconds

  // Initialize the first slide
  showSlide(currentSlide);

  // Swipe functionality
  const sliderContainer = document.querySelector('.slider');

  // Detect touch start
  sliderContainer.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
  });

  // Detect touch end
  sliderContainer.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  // Handle swipe left or right
  function handleSwipe() {
    if (touchEndX < touchStartX) {
      // Swipe left
      currentSlide++;
      showSlide(currentSlide);
    } else if (touchEndX > touchStartX) {
      // Swipe right
      currentSlide--;
      showSlide(currentSlide);
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const gallerySlides = document.querySelectorAll('.gallery-slide');
  const galleryTrack = document.querySelector('.gallery-slides');
  const galleryPrev = document.querySelector('.gallery-prev');
  const galleryNext = document.querySelector('.gallery-next');
  let galleryCurrentIndex = 0;
  const galleryTotalSlides = gallerySlides.length;

  // Swipe Handling
  let swipeStartX = 0;
  let swipeEndX = 0;

  function updateGalleryPosition() {
    galleryTrack.style.transform = `translateX(-${galleryCurrentIndex * 100}%)`;
  }

  function showNextSlide() {
    galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryTotalSlides;
    updateGalleryPosition();
  }

  function showPrevSlide() {
    galleryCurrentIndex = (galleryCurrentIndex - 1 + galleryTotalSlides) % galleryTotalSlides;
    updateGalleryPosition();
  }

  // Event Listeners for Buttons
  galleryNext.addEventListener('click', showNextSlide);
  galleryPrev.addEventListener('click', showPrevSlide);

  // Automatic Slide
  setInterval(showNextSlide, 5000); // Change every 3 seconds

  // Swipe Detection
  galleryTrack.addEventListener('touchstart', function(e) {
    swipeStartX = e.touches[0].clientX;
  });

  galleryTrack.addEventListener('touchend', function(e) {
    swipeEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    if (swipeEndX < swipeStartX) {
      showNextSlide();
    } else if (swipeEndX > swipeStartX) {
      showPrevSlide();
    }
  }

  // Initialize the first slide
  updateGalleryPosition();
});


// drop down facilities
document.querySelectorAll('.facility-header').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.closest('.facility-toggle');
    parent.classList.toggle('open');
  });
});