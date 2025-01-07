document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("reviewModal");
    const btn = document.getElementById("leaveReviewBtn");
    const closeBtn = document.querySelector("[data-modal-close]");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});