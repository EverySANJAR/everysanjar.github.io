//////ANIMATIONS//////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

///////



////////////SLIDER/////////
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const radioButtons = document.querySelectorAll("input[type=radio]");

let slideIndex = 0;

function goToSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function goToSelectedSlide() {
  radioButtons.forEach((radioButton, index) => {
    if (radioButton.checked) {
      slideIndex = index;
      goToSlide(slideIndex);
    }
  });
}

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", goToSelectedSlide);
});

goToSlide(slideIndex);
//////////////////////////////////