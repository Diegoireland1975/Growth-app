// HAMBURGER MENU
const hamburgerBtn = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

let isClose = true;

hamburgerBtn.addEventListener("click", () => {
  // toggle a class to show the mobile menu
  mobileMenu.classList.toggle("open");
  // change icon image on click
  if (isClose) {
    hamburgerBtn.src = "images/close.png";
  } else {
    hamburgerBtn.src = "images/hamburger.png";
  }
  isClose = !isClose;
});
