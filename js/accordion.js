document.addEventListener("htmx:afterSwap", function (e) {

  // шукаємо faq тільки після підвантаження partial
  const faqItems = document.querySelectorAll(".faq__item");
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector(".faq__question");

    // захист від подвійного навішування
    if (question.dataset.bound) return;
    question.dataset.bound = "true";

    question.addEventListener("click", () => {

      faqItems.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });

});
