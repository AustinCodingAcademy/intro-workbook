import jump from "../../jump.js/dist/jump.module.js";

var btnToTop1 = document.getElementById("to-top");
var btnToTop2 = document.getElementById("nav-name");
var btnToWork = document.getElementById("nav-work");
var btnToAbout = document.getElementById("nav-about");
var btnToContact = document.getElementById("nav-contact");

btnToWork.addEventListener("click", () => {
  jump(".work", {
    callback: () => {
      navbar.classList.remove("hidden");
    }
  });
});
btnToAbout.addEventListener("click", () => {
  jump(".about", {
    callback: () => {
      navbar.classList.remove("hidden");
    }
  });
});
btnToContact.addEventListener("click", () => {
  jump(".contact", {
    callback: () => {
      navbar.classList.remove("hidden");
    }
  });
});
btnToTop1.addEventListener("click", () => {
  jump(".hero", {
    duration: 2000
  });
});
btnToTop2.addEventListener("click", () => {
  jump(".hero", {
    duration: 2000
  });
});
