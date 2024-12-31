document.addEventListener("DOMContentLoaded", () => {
    // Находим все кнопки управления (стрелки)
    const overlayButtons = document.querySelectorAll(".arrow");
  
    // Перебираем каждую кнопку
    overlayButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Получаем ID связанного оверлея из data-атрибута
        const overlayId = button.getAttribute("data-overlay");
        const overlay = document.getElementById(overlayId);
  
        // Проверяем, открыт ли уже оверлей
        if (overlay.classList.contains("active")) {
          overlay.classList.remove("active"); // Закрываем
        } else {
          // Закрываем все остальные оверлеи
          document.querySelectorAll(".overlay.active").forEach(openOverlay => {
            openOverlay.classList.remove("active");
          });
  
          overlay.classList.add("active"); // Открываем текущий
        }
      });
    });
  });
  