const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let counter = 0;
const totalImages = slider.querySelectorAll("img").length;

function showSlide() {
  slider.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  counter = (counter + 1) % totalImages;
  showSlide();
});

prevBtn.addEventListener("click", () => {
  counter = (counter - 1 + totalImages) % totalImages;
  showSlide();
});
