const sliderContainer = document.querySelector(".sliderContainer");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

sliderContainer.addEventListener("mouseover", stopAutoSlide);
sliderContainer.addEventListener("mouseleave", startAutoSlide); 

let currentIndex = 0;

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlider();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  updateSlider();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function updateSlider() {
  const newTranform = -currentIndex * 100 + "%";
  slides.style.transform = `translateX(${newTranform})`;
}

let interval;

function startAutoSlide() {
  interval = setInterval(nextSlide, 1000);
}

function stopAutoSlide() {
  clearInterval(interval);
}
startAutoSlide();
