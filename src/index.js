const scss = require("./style.scss");

const anchors = Array.from(document.querySelectorAll(".slider__item"));
const anchorSet = document.querySelector(".slider");
const scrollButton = document.querySelector(".scrollup");

//Ссылки-якоря
anchorSet.addEventListener("click", (e) => {
  anchors.forEach((anchor) => {
    anchor.classList.remove("active");
  });
  e.target.parentElement.classList.add("active");
});

//Скролл для смартфонов
document.addEventListener("scroll", () => {
  if (window.scrollY > 200 && !scrollButton.classList.contains("active")) {
    scrollButton.classList.add("active");
    return;
  }
  if (window.scrollY < 200 && scrollButton.classList.contains("active")) {
    scrollButton.classList.remove("active");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

