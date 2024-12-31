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
            // Если карточка уже открыта, то не нужно закрывать её снова
            if (wrapper.classList.contains("flipped")) {
                return;
            }

            // Закрываем все карточки
            allWrappers.forEach(otherWrapper => {
                otherWrapper.classList.remove("flipped"); // Убираем класс flipped у всех карточек
            });

            // Открываем текущую карточку
            wrapper.classList.add("flipped"); // Добавляем класс flipped текущей карточке
        });
    });
});




  