document.querySelectorAll('.project-card__carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let index = 0;
  let interval = null;

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlide();
    }, 4000); // змінюємо слайд кожні 4 секунди
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    index = (index + 1) % slides.length;
    updateSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
    startAutoSlide();
  });

  window.addEventListener('resize', updateSlide);
  
  startAutoSlide(); // старт автоперемикання
});
