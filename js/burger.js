document.addEventListener('click', (e) => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');

  if (!burger || !nav) return;

  // 1️⃣ Клік по бургеру
  if (e.target.closest('.burger')) {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open', !expanded);
  }

  // 2️⃣ Клік по посиланню в nav → закрити
  if (e.target.closest('.header__nav a')) {
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }

  // 3️⃣ Клік поза nav → закрити
  if (nav.classList.contains('open') && !e.target.closest('.header__nav') && !e.target.closest('.burger')) {
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});

// 4️⃣ Закриття по ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    if (!burger || !nav) return;

    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});
