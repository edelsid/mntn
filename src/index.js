const scss = require("./style.scss");

const anchors = Array.from(document.querySelectorAll(".slider__item"));
const scrollButton = document.querySelector(".scrollup");
const observables = Array.from(document.querySelectorAll(".stages__item"));
const banner = document.querySelector(".header");
observables.push(banner);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

//Определение активного якоря
const callback = (entries) => {
  let target;
  entries.forEach((entry) => {
    const classes = entry.target.classList;
    if (entry.isIntersecting && !classes.contains("header")) {
      target = anchors.find((item) => 
        item.attributes.name.value === entry.target.id);
    } else if (entry.isIntersecting && classes.contains("header")) {
      target = anchors[0]
    }
    if (target) changeAnchor(target);
  })
}

//Смена цвета границы активного якоря
const changeAnchor = (target) => {
  anchors.forEach((anchor) => {
    anchor.classList.remove("active");
  });
  target.classList.add("active");
}

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

//Наблюдение за тем, на какой части сайта мы находимся
const observer = new IntersectionObserver(callback, options);
observables.forEach((item) => {
  observer.observe(item);
});
