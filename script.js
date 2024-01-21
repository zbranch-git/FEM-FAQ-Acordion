// First Button Clicked Every Reload
document.addEventListener("DOMContentLoaded", function () {
  const firstBtn = document.querySelector(".question__btn");
  firstBtn.click();
});

// Traversing the DOM
const btns = document.querySelectorAll(".question__btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const answer = e.currentTarget.parentElement.parentElement;

    answer.classList.toggle("show-text");
  });
});
