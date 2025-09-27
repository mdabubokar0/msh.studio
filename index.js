// -------------------- Navbar Component --------------------
class Navbar extends HTMLElement {
  connectedCallback() {
    const basePath = this.getBasePath();

    this.innerHTML = `
      <nav>
        <header>
          <a href="${basePath}/index.html">
            <img class="brand" src="${basePath}/assets/logo.png" alt="Logo">
          </a>
          <div class="menu">
            <div class="head-btn">
              <i class="fas fa-times close-btn"></i>
            </div>
            <a href="${basePath}/index.html">Home</a>
            <a href="${basePath}/about/about.html">About</a>
            <a href="${basePath}/work/work.html">Work</a>
            <a href="${basePath}/contact/contact.html">Contact</a>
            <a href="#">
              <div class="line"></div>
            </a>
            <a href="${basePath}/contact/contact.html">
              <div class="btn">
                <div class="btn-green"></div>Let's talk!
              </div>
            </a>
          </div>
          <div class="head-btn">
            <i class="fas fa-bars menu-btn"></i>
          </div>
        </header>
      </nav>
    `;

    this.attachEvents();
  }

  getBasePath() {
    // Auto-detect relative path depth
    const path = window.location.pathname;
    const depth = path.split("/").length - 2;
    return depth > 0 ? "../".repeat(depth) : ".";
  }

  attachEvents() {
    // Attach menu toggle events AFTER rendering
    const menu = this.querySelector(".menu");
    const menuBtn = this.querySelector(".menu-btn");
    const closeBtn = this.querySelector(".close-btn");

    if (menu && menuBtn && closeBtn) {
      menuBtn.addEventListener("click", () => menu.classList.add("active"));
      closeBtn.addEventListener("click", () => menu.classList.remove("active"));
    }
  }
}

// -------------------- Footer Component --------------------
class Footer extends HTMLElement {
  connectedCallback() {
    const basePath = this.getBasePath();
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer>
        <div class="container footer">
          <div>
            <img src="${basePath}/assets/white-logo.png" alt="Logo">
            <p>We are glad to see you on our website! We are sure that you will find everything you need for your project.</p>
          </div>
          <div class="footer-icons">
            <a href="#"><img src="${basePath}/assets/f1.png" alt="Icon"></a>
            <a href="#"><img src="${basePath}/assets/f2.png" alt="Icon"></a>
            <a href="#"><img src="${basePath}/assets/f3.png" alt="Icon"></a>
            <a href="#"><img src="${basePath}/assets/f4.png" alt="Icon"></a>
            <a href="#"><img src="${basePath}/assets/f5.png" alt="Icon"></a>
          </div>
          <div class="horizontal-line grey"></div>
          <p class="copyright">Copyright © ${year} mshstudio. All rights reserved.</p>
        </div>
      </footer>
    `;
  }

  getBasePath() {
    const path = window.location.pathname;
    const depth = path.split("/").length - 2;
    return depth > 0 ? "../".repeat(depth) : ".";
  }
}

customElements.define("custom-navbar", Navbar);
customElements.define("custom-footer", Footer);

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
