function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
const footer = document.createElement('footer');
footer.className = 'footer';
const currentYear = new Date().getFullYear();
footer.innerHTML = `
    Built by <a href="https://dotgfn.bsky.social" target="_blank">.gfn</a> | &copy; ${currentYear} Tattoos by Roxy
`;
document.body.appendChild(footer);
});