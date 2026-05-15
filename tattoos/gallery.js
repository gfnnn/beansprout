function openModal(img) {
    const modal = document.getElementById("image-modal");
    document.getElementById("modal-image").src = img.src;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}

let currentGalleryIndex = 0;

function initializeGallery() {
    const sets = document.querySelectorAll(".gallery-set");
    const title = document.getElementById("gallery-title");

    sets.forEach((set, i) => {
        if (i === 0) set.classList.add("active");
        else set.classList.remove("active");
    });

    title.textContent = sets[0].dataset.title;
}

function navigateGallery(dir) {
    const sets = document.querySelectorAll(".gallery-set");
    const title = document.getElementById("gallery-title");

    sets[currentGalleryIndex].classList.remove("active");
    currentGalleryIndex += dir;
    if (currentGalleryIndex < 0) currentGalleryIndex = sets.length - 1;
    else if (currentGalleryIndex >= sets.length) currentGalleryIndex = 0;

    sets[currentGalleryIndex].classList.add("active");
    title.textContent = sets[currentGalleryIndex].dataset.title;
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGallery();
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });
});
