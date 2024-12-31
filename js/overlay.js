document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]"); // Стрелки
    const allWrappers = document.querySelectorAll('.ingredients-item-wrapper'); // Все карточки

    // Обработчик клика по стрелке для открытия/закрытия карточки
    overlayButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // Останавливаем распространение события клика на родительский элемент

            const wrapper = button.closest('.ingredients-item-wrapper'); // Находим родительский элемент карточки

            if (wrapper) {
                // Переключаем класс flipped на текущей карточке
                wrapper.classList.toggle("flipped");

                // Закрываем все остальные карточки
                allWrappers.forEach(otherWrapper => {
                    if (otherWrapper !== wrapper) {
                        otherWrapper.classList.remove("flipped");
                    }
                });
            }
        });
    });

    // Обработчик клика по карточке для переключения состояния
    allWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", (e) => {
            // Если клик был по карточке, а не по стрелке
            if (!e.target.closest('[data-overlay]')) {
                if (wrapper.classList.contains("flipped")) {
                    wrapper.classList.remove("flipped"); // Закрываем карточку
                } else {
                    allWrappers.forEach(otherWrapper => {
                        otherWrapper.classList.remove("flipped"); // Закрываем все остальные карточки
                    });
                    wrapper.classList.add("flipped"); // Открываем текущую карточку
                }
            }
        });
    });
});




  