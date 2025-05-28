document.addEventListener('DOMContentLoaded', () => {
  const carrossel = document.querySelector('.carrossel');
  const btnEsq = document.querySelector('.flecha_esq');
  const btnDir = document.querySelector('.flecha_dir');

  const slides = [
    'url("../IMGS/fundo1.jpg")',
    'url("../IMGS/fundo2.jpg")',
    'url("../IMGS/fundo3.jpg")'
  ];

  let currentIndex = 0;

  function atualizarCarrossel() {
    carrossel.style.backgroundImage = slides[currentIndex];
  }

  btnEsq.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    atualizarCarrossel();
  });

  btnDir.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    atualizarCarrossel();
  });

  atualizarCarrossel();
});