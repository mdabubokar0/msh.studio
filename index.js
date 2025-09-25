//preloader
let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

//navbar
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

//swiper
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

function sub() {
  alert("Thanks for submitting, we will contact you soon");
}
