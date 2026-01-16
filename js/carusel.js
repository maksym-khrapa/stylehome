document.addEventListener('click', (e) => {
  const prevBtn = e.target.closest('.carousel-btn.prev');
  const nextBtn = e.target.closest('.carousel-btn.next');

  if (!prevBtn && !nextBtn) return;

  const carousel = e.target.closest('.project-card__carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.querySelectorAll('img'));
  let index = parseInt(track.dataset.index || '0');

  if (prevBtn) index = (index - 1 + slides.length) % slides.length;
  if (nextBtn) index = (index + 1) % slides.length;

  track.dataset.index = index;
  const slideWidth = carousel.clientWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
});

window.addEventListener('resize', () => {
  document.querySelectorAll('.project-card__carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const index = parseInt(track.dataset.index || '0');
    const slideWidth = carousel.clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  });
});

/* ===== СВАЙП ДЛЯ МОБІЛЬНИХ ===== */
document.querySelectorAll('.project-card__carousel').forEach(carousel => {
  let startX = 0;
  let endX = 0;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.querySelectorAll('img'));

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', () => {
    let index = parseInt(track.dataset.index || '0');
    const threshold = 50; // мінімальна дистанція свайпу

    if (startX - endX > threshold) {
      // свайп вліво → наступний слайд
      index = (index + 1) % slides.length;
    } else if (endX - startX > threshold) {
      // свайп вправо → попередній слайд
      index = (index - 1 + slides.length) % slides.length;
    }

    track.dataset.index = index;
    const slideWidth = carousel.clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    // скидаємо координати
    startX = 0;
    endX = 0;
  });
});
