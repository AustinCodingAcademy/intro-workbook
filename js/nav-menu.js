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
const navToggle = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-menu");
const main = document.getElementsByTagName("main")[0];
const dropdown = document.querySelectorAll(".dropdown");
const openCloseAll = document.querySelector(".nav-open-close-all");

/** _____________________________________________________________________________
 *  ensures path always follows the format of: week/project-name/index.html
 */

// removes "/web-workbook" from path if it is in URL
const pathName = window.location.pathname.replace("/web-workbook", "");

// adds "index.html" to path if it in not in URL
const currrentPath =
  pathName.indexOf("index.html") > 0
    ? "../.." + pathName
    : "../.." + pathName + "index.html";
const currentHref = document.querySelector("a[href='" + currrentPath + "']");

currentHref.classList.add("current-page");
const currentPage = document.querySelector(".current-page");

pageContent.classList.add("body-open");
pageContent.classList.add("transition-transform");
SimpleScrollbar.initEl(navMenu);

/** =======================
 *  OPEN / CLOSE NAV-MENU
 *  =======================
 * */
navToggle.addEventListener("click", _ => {
  // toggle nav menu when user clicks hamburger or X
  pageContent.classList.toggle("body-open");
  navToggle.classList.toggle("nav-open");
  navMenu.classList.toggle("nav-open");
});
main.addEventListener("click", _ => {
  // close nav menu when user clicks anywhere within the <main> of document
  if (navMenu.classList.contains("nav-open")) {
    pageContent.classList.remove("body-open");
    navToggle.classList.remove("nav-open");
    navMenu.classList.remove("nav-open");
  }
});
document.onkeydown = function(e) {
  // close nav menu when user presses escape
  if(e.keyCode == 27 && navMenu.classList.contains("nav-open")) {
    pageContent.classList.remove("body-open");
    navToggle.classList.remove("nav-open");
    navMenu.classList.remove("nav-open");
  }
};

/** ======================================
 *  DROPDOWN CLICK EVENT LISTENER CONTROL
 *  ======================================
 * */

openCloseAll.addEventListener("click", openClose);

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", toggle);

  // make sure the current page's dropdown is open on page load
  if (dropdown[i].contains(currentPage)) {
    dropdown[i].classList.add("current-dropdown");
    dropdown[i].classList.add("open");
    dropdown[i].querySelector(".dropdown-content").classList.add("open");
  }
}

/** ____________________________________________________________
 *  functions to be called by click event listeners
 */
function toggle() {
  this.classList.toggle("open");
  this.lastElementChild.classList.toggle("open");
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
