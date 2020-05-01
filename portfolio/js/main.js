
// call navbarScroll when user scrolls
window.onscroll = function() {
  navbarScroll();
};

// get navbar container
const navbar = document.querySelector(".nav-container");

// get an original Y offset value for page
var originScrollPos = window.pageYOffset;

// This function adds/removes a hidden class depending on page Y offset value
function navbarScroll() {
  let currentScrollPos = window.pageYOffset;

  if (originScrollPos < currentScrollPos) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  originScrollPos = currentScrollPos;
}

// This function is called on resize of body tag to recalculate height vars if user resizes window
function recalcHeights() {
  heroHeight = document.querySelector(".hero").clientHeight;
  navbarHeght = navbar.clientHeight;
}
