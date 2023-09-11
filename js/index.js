//preloader

let loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

//navbar

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

//nav

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
})

window.onscroll = () => {
    navbar.classList.remove("active");
}

//animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,
})

sr.reveal(`.top`, {origin: 'top'})
sr.reveal(`.bottom`, {origin: 'bottom'})
sr.reveal(`.left`, {origin: 'left'})
sr.reveal(`.right`, {origin: 'right'})

sr.reveal(`.bottom11`, {delay: 350, origin: 'bottom'})
sr.reveal(`.bottom19`, {delay: 400, origin: 'bottom'})
sr.reveal(`.bottom2`, {delay: 450, origin: 'bottom'})
sr.reveal(`.bottom21`, {delay: 500, origin: 'bottom'})
sr.reveal(`.bottom29`, {delay: 550, origin: 'bottom'})
sr.reveal(`.bottom3`, {delay: 600, origin: 'bottom'})
sr.reveal(`.bottom31`, {delay: 650, origin: 'bottom'})
sr.reveal(`.bottom39`, {delay: 700, origin: 'bottom'})