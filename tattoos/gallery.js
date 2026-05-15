function openModal(img) {
    const modal = document.getElementById("image-modal");
    document.getElementById("modal-image").src = img.src;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}

let currentGalleryIndex = 0;

function setGalleryHeight(set, wrapper) {
    const imgs = set.querySelectorAll("img");
    let loaded = 0;
    imgs.forEach(img => {
        if (img.complete) {
            loaded++;
        } else {
            img.addEventListener("load", () => {
                if (++loaded === imgs.length) {
                    wrapper.style.height = `${set.offsetHeight + 40}px`;
                }
            });
        }
    });
    if (loaded === imgs.length) {
        wrapper.style.height = `${set.offsetHeight + 40}px`;
    }
}

function initializeGallery() {
    const sets = document.querySelectorAll(".gallery-set");
    const title = document.getElementById("gallery-title");
    const wrapper = document.querySelector(".gallery-wrapper");

    sets.forEach((set, i) => {
        if (i === 0) set.classList.add("active");
        else set.classList.remove("active");
    });

    title.textContent = sets[0].dataset.title;
    setGalleryHeight(sets[0], wrapper);
}

function navigateGallery(dir) {
    const sets = document.querySelectorAll(".gallery-set");
    const wrapper = document.querySelector(".gallery-wrapper");
    const title = document.getElementById("gallery-title");

    sets[currentGalleryIndex].classList.remove("active");
    currentGalleryIndex += dir;
    if (currentGalleryIndex < 0) currentGalleryIndex = sets.length - 1;
    else if (currentGalleryIndex >= sets.length) currentGalleryIndex = 0;

    sets[currentGalleryIndex].classList.add("active");
    title.textContent = sets[currentGalleryIndex].dataset.title;
    setGalleryHeight(sets[currentGalleryIndex], wrapper);
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGallery();
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });
});
