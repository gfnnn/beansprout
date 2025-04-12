function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
}
function openModal(img) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    modalImage.src = img.src;
    modal.style.display = 'flex';
}
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

let currentGalleryIndex = 0;

function initializeGallery() {
const gallerySets = document.querySelectorAll('.gallery-set');
const galleryTitle = document.getElementById('gallery-title');
const galleryWrapper = document.querySelector('.gallery-wrapper');

gallerySets.forEach((set, index) => {
if (index === 0) {
    set.classList.add('active');
} else {
    set.classList.remove('active');
}
});

galleryTitle.textContent = gallerySets[0].dataset.title;

const activeSet = gallerySets[0];
const images = activeSet.querySelectorAll('img');
let loadedImages = 0;

images.forEach((img) => {
if (img.complete) {
    loadedImages++;
} else {
    img.addEventListener('load', () => {
        loadedImages++;
        if (loadedImages === images.length) {
            const activeSetHeight = activeSet.offsetHeight;
            galleryWrapper.style.height = `${activeSetHeight + 40}px`;
        }
    });
}
});

if (loadedImages === images.length) {
const activeSetHeight = activeSet.offsetHeight;
galleryWrapper.style.height = `${activeSetHeight + 40}px`;
}
}

function navigateGallery(direction) {
const gallerySets = document.querySelectorAll('.gallery-set');
const galleryWrapper = document.querySelector('.gallery-wrapper');
const galleryTitle = document.getElementById('gallery-title');

gallerySets[currentGalleryIndex].classList.remove('active');

currentGalleryIndex += direction;

if (currentGalleryIndex < 0) {
currentGalleryIndex = gallerySets.length - 1;
} else if (currentGalleryIndex >= gallerySets.length) {
currentGalleryIndex = 0;
}

gallerySets[currentGalleryIndex].classList.add('active');

galleryTitle.textContent = gallerySets[currentGalleryIndex].dataset.title;

const activeSet = gallerySets[currentGalleryIndex];
const images = activeSet.querySelectorAll('img');
let loadedImages = 0;

images.forEach((img) => {
if (img.complete) {
    loadedImages++;
} else {
    img.addEventListener('load', () => {
        loadedImages++;
        if (loadedImages === images.length) {
            const activeSetHeight = activeSet.offsetHeight;
            galleryWrapper.style.height = `${activeSetHeight + 40}px`;
        }
    });
}
});

if (loadedImages === images.length) {
const activeSetHeight = activeSet.offsetHeight;
galleryWrapper.style.height = `${activeSetHeight + 40}px`;
}
}

document.addEventListener('DOMContentLoaded', () => {
initializeGallery();
});
