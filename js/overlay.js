document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]");

    overlayButtons.forEach(button => {
        button.addEventListener("click", () => {
            const overlayId = button.getAttribute("data-overlay");
            const overlay = document.getElementById(overlayId);

            if (overlay) {
                overlay.classList.toggle("active");
            }

            // Находим контейнер карточки и переключаем класс для поворота
            const wrapper = button.closest('.ingredients-item-wrapper');
            wrapper.classList.toggle("active"); // Поворачиваем карточку
        });
    });
});


  