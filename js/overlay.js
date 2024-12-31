document.addEventListener("DOMContentLoaded", () => {
    const overlayButtons = document.querySelectorAll("[data-overlay]");

    overlayButtons.forEach(button => {
        button.addEventListener("click", () => {
            const wrapper = button.closest('.ingredients-item-wrapper');
            
            if (wrapper) {
                wrapper.classList.toggle("flipped");
            }
        });
    });
});


  