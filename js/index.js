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

//add border and copy text
let text = [];
let savedText = null;
function toggleBorder(button) {
    if (button.style.border === "1px solid black") {
      button.style.border = "";
      savedText = null;
      text.pop(savedText);
    } else {
      button.style.border = "1px solid black";
      savedText = button.innerHTML;
      console.log(`Saved text: ${savedText}`);
      text.push(savedText);
      console.log(text);
    }
}

let text2 = [];
let savedText2 = null;
function toggleBorder2(button) {
    if (button.style.border === "1px solid black") {
      button.style.border = "";
      savedText2 = null;
      text2.pop(savedText2);
    } else {
      button.style.border = "1px solid black";
      savedText2 = button.innerHTML;
      console.log(`Saved text: ${savedText2}`);
      text2.push(savedText2);
      console.log(text2);
    }
}

//send email
function sendEmail(){
    var params = {
        name : document.getElementById("cta-name").value,
        email : document.getElementById("cta-email").value,
        message : document.getElementById("cta-idea").value,
    };

    const serviceId = "service_6y7hwgi";
    const templateId = "template_foeoiac";
    emailjs
    .send(serviceId, templateId, params)
    .then(
        res =>{
            document.getElementById("cta-name").value = "";
            document.getElementById("cta-email").value = "";
            document.getElementById("cta-idea").value = "";
            console.log(res);
            alert("Message sent successfully");
        }
    )
    .catch((err) => console.log(err));
}