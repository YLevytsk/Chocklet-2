document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]"); // Стрелки
    const allWrappers = document.querySelectorAll('.ingredients-item-wrapper'); // Все карточки

    overlayButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // Останавливаем распространение события клика на родительский элемент

            const wrapper = button.closest('.ingredients-item-wrapper'); // Находим родительский элемент карточки

            if (wrapper) {
                wrapper.classList.toggle("flipped"); // Переключаем класс для поворота карточки
            }
        });
    });

    allWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", () => {
            // Закрываем оверлей на всех карточках, кроме той, по которой кликнули
            allWrappers.forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove("flipped");
                }
            });
        });
    });
});



  