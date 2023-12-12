const image = document.querySelector(".tab-img");
const tabSwitch = document.querySelector(".tab-switch");
const tabSwitch2 = document.querySelector(".tab-switch2");
const tabGroup = document.querySelector(".tab-group");

tabSwitch2.addEventListener("click", () => {
  image.src = "/assets/tab2.png";
  tabSwitch2.classList.add("active-tab");
  tabSwitch.classList.remove("active-tab");
  tabGroup.classList.add("tab-group-swap");
  tabGroup.classList.remove("tab-group");
});

tabSwitch.addEventListener("click", () => {
  image.src = "/assets/tab1.png";
  tabSwitch2.classList.remove("active-tab");
  tabSwitch.classList.add("active-tab");
  tabGroup.classList.remove("tab-group-swap");
  tabGroup.classList.add("tab-group");
});




const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

const createDots = () => {
  slides.forEach(() => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    dotsContainer.appendChild(dot);
  });
};

createDots();

const dots = document.querySelectorAll('.carousel-dot');

const showSlide = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots[index].classList.remove('active-dot');
  });

  dots[slideIndex].classList.add('active-dot');
};

const updateSlide = (newIndex) => {
  slideIndex = newIndex;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
};

showSlide();

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateSlide(index);
  });
});

prevBtn.addEventListener('click', () => {
  updateSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  updateSlide(slideIndex + 1);
});










const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
