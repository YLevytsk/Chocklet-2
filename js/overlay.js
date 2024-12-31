document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]"); // Стрелки
    const allWrappers = document.querySelectorAll('.ingredients-item-wrapper'); // Все карточки

    // Обработчик клика по стрелке
    overlayButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // Останавливаем распространение события клика на родительский элемент

            const wrapper = button.closest('.ingredients-item-wrapper'); // Находим родительский элемент карточки

            if (wrapper) {
                wrapper.classList.toggle("flipped"); // Переключаем класс для поворота карточки
            }
        });
    });

    // Обработчик клика по карточке
    allWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", () => {
            // Закрываем все карточки
            allWrappers.forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove("flipped"); // Убираем класс flipped у других карточек
                }
            });

            // Открываем текущую карточку
            wrapper.classList.toggle("flipped"); // Переключаем класс flipped на текущей карточке
        });
    });
});




  