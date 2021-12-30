// jshint esversion: 11

// Self Invoked Function To Build The NavLinks Dynamically
(function () {
  const navUl = document.querySelector("header nav ul");
  for (let i = 0; i < 4; i++) {
    const sections = document.querySelectorAll("main section.content");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const getSectionAttribut = sections[i].getAttribute("id");
    a.setAttribute("href", `#${getSectionAttribut}`);
    a.textContent = `${getSectionAttribut}`.toUpperCase();
    li.appendChild(a);
    navUl.appendChild(li);
  }
})();

// Smoothly Scrolling Applied On All NavLinks By Clicking
let a = document.querySelectorAll("header nav ul li a");
a.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    document.querySelector(this.hash).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
});

// Dark Mode
const btnDarkMode = document.querySelector(".btnDarkMode");
btnDarkMode.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("applyDarkMode");
});

// getBoundingClientRect
// ScrollSpy, In Viewport && Add Active Class
const sections = document.querySelectorAll("section.content");
const navLinks = document.querySelectorAll("header nav ul li a");
document.body.addEventListener("scroll", isInViewport);

function isInViewport() {
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect();
    const inViewPort = rect.top <= 400 && rect.top >= -200;
    if (inViewPort === true) {
      sections[i].classList.add("active");
      sections[i].classList.add("your-active-class");
      const id = sections[i].getAttribute("id");
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    } else {
      sections[i].classList.remove("active");
      sections[i].classList.remove("your-active-class");
      navLinks[i].classList.remove("active");
    }
  }
}

// Show/Hidde TopPage Arrow
const btnTopPage = document.querySelector("#topPage");
document.body.addEventListener("scroll", () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    btnTopPage.classList.remove("hiddeArrow");
    return;
  }
  btnTopPage.classList.add("hiddeArrow");
});
// Scroll To Top Page
btnTopPage.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".hero").scrollIntoView({
    behavior: "smooth",
    top: 0,
  });
});
