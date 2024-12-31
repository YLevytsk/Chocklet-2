document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]"); // Ищем элементы с data-overlay

    overlayButtons.forEach(button => {
        button.addEventListener("click", () => {
            const overlayId = button.getAttribute("data-overlay"); // Получаем значение data-overlay
            const overlay = document.getElementById(overlayId); // Ищем связанный оверлей

            if (overlay.classList.contains("active")) {
                overlay.classList.remove("active");
            } else {
                document.querySelectorAll(".overlay.active").forEach(openOverlay => {
                    openOverlay.classList.remove("active");
                });

                overlay.classList.add("active");
            }
        });
    });
});

  