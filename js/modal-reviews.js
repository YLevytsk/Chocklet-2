document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("reviewModal");
    const btn = document.getElementById("leaveReviewBtn");
    const closeBtn = document.querySelector("[data-modal-close]");

    btn.onclick = function() {
        modal.classList.add("is-open");
    }

    closeBtn.onclick = function() {
        modal.classList.remove("is-open");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("is-open");
        }
    }
});