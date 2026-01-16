document.addEventListener('click', (e) => {
  // шукаємо кнопку, по якій клікнули
  const prevBtn = e.target.closest('.carousel-btn.prev');
  const nextBtn = e.target.closest('.carousel-btn.next');

  if (!prevBtn && !nextBtn) return; // якщо не наша кнопка — нічого не робимо

  // знаходимо батьківську карусель
  const carousel = e.target.closest('.project-card__carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.querySelectorAll('img'));
  let index = parseInt(track.dataset.index || '0'); // поточний індекс з data-attribute

  // кнопка "назад"
  if (prevBtn) {
    index = (index - 1 + slides.length) % slides.length;
  }

  // кнопка "вперед"
  if (nextBtn) {
    index = (index + 1) % slides.length;
  }

  // оновлюємо data-index
  track.dataset.index = index;

  // зміщуємо track
  const slideWidth = carousel.clientWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
});

// підлаштування при ресайзі вікна
window.addEventListener('resize', () => {
  document.querySelectorAll('.project-card__carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const index = parseInt(track.dataset.index || '0');
    const slideWidth = carousel.clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  });
});
