document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]");
  
    overlayButtons.forEach(button => {
      button.addEventListener("click", () => {
        const wrapper = button.closest('.ingredients-item-wrapper');
  
        if (wrapper) {
          wrapper.classList.toggle("flipped"); // Поворачиваем карточку
        }
      });
    });
  
    // Обработка клика на стрелке для возврата
    const backArrows = document.querySelectorAll(".arrow-back");
  
    backArrows.forEach(arrow => {
      arrow.addEventListener("click", () => {
        const wrapper = arrow.closest('.ingredients-item-wrapper');
        if (wrapper) {
          wrapper.classList.toggle("flipped"); // Поворот обратно
        }
      });
    });
  });
  


  