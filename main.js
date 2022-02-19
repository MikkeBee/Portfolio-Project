const navi = document.querySelector(".naviBar");
const button = document.querySelector("#arrowUp");
// const mobButton = document.querySelector("#mobileButton");
// const nav = document.querySelector("nav");

// let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navi.style.backgroundColor = "#2c2d70";
    button.style.display = "block";
  } else {
    button.style.display = "none";
    navi.style.backgroundColor = "transparent";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// const mobMenu = () => {
//   for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", mobMenu);
//   }
//   if (nav.classList.contains("responsive")) {
//     nav.classList.remove("responsive");
//     document.body.style.overflow = "";
//   } else {
//     nav.classList.add("responsive");
//     document.body.style.overflow = "hidden";
//   }
// };

button.addEventListener("click", getToTop);
// mobButton.addEventListener("click", mobMenu);

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 200 ||
//     document.documentElement.scrollTop > 200
//   ) {
//     header.style.backgroundColor = "#ffbf71";
//   } else {
//     header.style.backgroundColor = "#ff8c00";
//   }
// }

// const scrollFunction = () =>
//   document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
//     ? (header.style.backgroundColor = "white")
//     : (header.style.backgroundColor = "#82a8c7");
