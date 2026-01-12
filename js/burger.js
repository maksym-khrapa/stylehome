  const burger = document.getElementById('burger');
  const navLinks = document.querySelectorAll('.header__nav a');

  // Відкриття / закриття меню
  burger.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  // Закриття меню при кліку на посилання
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });

  // Закриття меню при ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.body.classList.remove('menu-open');
    }
  });