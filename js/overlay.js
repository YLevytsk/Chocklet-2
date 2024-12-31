document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]");

    overlayButtons.forEach(button => {
        button.addEventListener("click", () => {
            const overlayId = button.getAttribute("data-overlay");
            const overlay = document.getElementById(overlayId);
            const wrapper = button.closest('.ingredients-item-wrapper'); // Находим контейнер карточки

            if (overlay) {
                overlay.classList.toggle("active"); // Переключаем активный класс на оверлей
            }

            // Переключаем класс для поворота карточки
            wrapper.classList.toggle("active");
        });
    });
});


  