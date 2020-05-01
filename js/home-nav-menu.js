/** ==============================================
 *  IMPORTS AND INSERTS HTML link (nav-menu.html)
 *  ==============================================
 * */

/** ______________________________________________________________________________________
 *  get current page HTML link (nav-menu.html), then insert it before current page <main>
 *  */
var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector(".nav-container");
document.body.insertBefore(
  el.cloneNode(true),
  document.getElementsByTagName("main")[0]
);

/** ==============================
 *  INIT PAGE VARIABLES / CLASSES
 *  ==============================
 * */
const pageContent = document.body.getElementsByTagName("main")[0];
const homePageContent = document.querySelector(".content");
const navToggle = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-menu");
const openCloseAll = document.querySelector(".nav-open-close-all");
const main = document.getElementsByTagName("main")[0];
const dropdown = document.querySelectorAll(".dropdown");
pageContent.classList.add("transition-transform");
SimpleScrollbar.initEl(navMenu);

/** =======================
 *  OPEN / CLOSE NAV-MENU
 *  =======================
 * */
navToggle.addEventListener("click", _ => {
  // toggle navbar when user clicks navToggle button
  pageContent.classList.toggle("body-open");
  homePageContent.classList.toggle("nav-open");
  navToggle.classList.toggle("nav-open");
  navMenu.classList.toggle("nav-open");
});
main.addEventListener("click", _ => {
  // close navbar if user clicks main content of page
  if (navMenu.classList.contains("nav-open")) {
    pageContent.classList.remove("body-open");
    homePageContent.classList.toggle("nav-open");
    navToggle.classList.remove("nav-open");
    navMenu.classList.remove("nav-open");
  }
});
document.onkeydown = function(e) {
  // close nav menu when user presses escape
  if(e.keyCode == 27 && navMenu.classList.contains("nav-open")) {
    pageContent.classList.remove("body-open");
    homePageContent.classList.toggle("nav-open");
    navToggle.classList.remove("nav-open");
    navMenu.classList.remove("nav-open");
  }
};

/** =================================================
 *  DROPDOWN MOUSOVER / CLICK EVENT LISTENER CONTROL
 *  =================================================
 * */
for (var i = 0; i < dropdown.length; i++) {
  // always load page with click listeners
  dropdown[i].addEventListener("click", toggle);
}

/** _______________________________________________
 *  initialize window size variables on page load
 */
var addedHover = false;
const widthThreshold = "(max-width: 1030px)";
var windowSmall = window.matchMedia(widthThreshold);
toggleMouseoverListener(); // check window size once on page load

// listen for any window resizing and add/remove mouseover listeners accordingly
window.addEventListener("resize", toggleMouseoverListener);
openCloseAll.classList.toggle("closed");
openCloseAll.addEventListener("click", openClose);

/** ______________________________________________________________________________
 *  toggleMouseoverListener dynamically adds/removes mouseover event listeners to
 *  nav-menu dropdown elements depending on window size (const widthThreshold)
 *  */
function toggleMouseoverListener() {
  /** _________________________________________________________________
   *  when window is resized from <widthThreshold to >widthThreshold
   *  or if window loads at >widthThreshold
   *  */
  if (!windowSmall.matches && !addedHover) {
    for (var i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("mouseover", open);
      dropdown[i].addEventListener("mouseout", close);
    }
    addedHover = true;
    closeAll();
  } else if (windowSmall.matches && addedHover) {
    /** ____________________________________________________________________________
     *  when window is resized to <widthThreshold and mouseover listeners have already
     *  been added
     *  */
    for (var i = 0; i < dropdown.length; i++) {
      dropdown[i].removeEventListener("mouseover", open);
      dropdown[i].removeEventListener("mouseout", close);
    }
    addedHover = false;
  }
}

/** ____________________________________________________________
 *  functions to be called by mouseover / click event listeners
 */
function open() {
  this.classList.add("open");
  this.lastElementChild.classList.add("open");
}
function toggle() {
  this.classList.toggle("open");
  this.lastElementChild.classList.toggle("open");
}
function close() {
  this.classList.remove("open");
  this.lastElementChild.classList.remove("open");
}
function openClose() {
  if (this.classList.contains("closed")) {
    openAll();
  } else {
    closeAll();
  }
  this.classList.toggle("closed");
}
function openAll() {
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].classList.add("open");
    dropdown[i].lastElementChild.classList.add("open");
  }
}
function closeAll() {
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].classList.remove("open");
    dropdown[i].lastElementChild.classList.remove("open");
  }
}
