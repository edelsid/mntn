const scss = require("./style.scss");

const anchors = Array.from(document.querySelectorAll(".slider__item"));
const anchorSet = document.querySelector(".slider");

anchorSet.addEventListener("click", (e) => {
  anchors.forEach((anchor) => {
    anchor.classList.remove("active");
  });
  e.target.parentElement.classList.add("active");
});

