import "./styles/index.scss";
import $ from "jquery";
import "bootstrap";

//burger mobile menu

function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();
// Вызываем эту ф-ю, если нам нужно зафиксировать меню при скролле

function fixedNav() {
  const nav = document.querySelector("nav");
  if (window.scrollY >= 768.98) {
    nav.classList.add("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);
