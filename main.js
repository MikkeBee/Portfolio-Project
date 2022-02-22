const navi = document.querySelector(".naviBar");
const button = document.querySelector("#arrowUp");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");
const body = document.querySelector("body");

//On scroll activate scrollFunction
window.onscroll = function () {
  scrollFunction();
};

//When activated, function changes background colour and changes back-to-top button style
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navi.classList.add("bg");
    button.style.display = "block";
  } else {
    button.style.display = "none";
    navi.classList.remove("bg");
  }
};

// when back-to-top button is pressed (using eventListener) this function will activate and scroll back to the top
const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//Upon hamburger menu click this function is activated
const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    navi.classList.remove("responsive");
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    navi.classList.add("responsive");
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

const removeMenu = (e) => {
  if (!body.contains(e.target)) {
    navi.classList.remove("responsive");
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  }
};

body.addEventListener("click", removeMenu);
button.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
