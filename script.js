document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cardd');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });
  });
  const cards = document.querySelectorAll('.card');
let current = 0;

function setActiveCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) {
      card.classList.add('active');
    }
  });
}
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle the eye icon
    this.classList.toggle('show');
});
let currentSlide = 0;

function showSlide(index) {
  const sliderContainer = document.querySelector('.slider-container');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  sliderContainer.style.transform = translateX(-${currentSlide * 100}%);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}