const btn = document.querySelectorAll(".share-btn");
const popup = document.querySelector(".social-popup");

btn.forEach(function (item) {
  item.addEventListener("click", function () {
    popup.classList.toggle("show-popup");
  });
});

// const btn = document.querySelector(".share-btn");
// const popup = document.querySelector(".social-popup");

// btn.addEventListener("click", function () {
//   popup.classList.toggle("show-popup");
// });
