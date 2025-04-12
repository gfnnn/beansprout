document.addEventListener('DOMContentLoaded', () => {
    const aftercareContents = document.querySelectorAll('.aftercare-content[data-title]');
    const instructions = document.getElementById('instructions');
    const title = document.querySelector('h1');

    aftercareContents.forEach(content => {
        content.style.display = 'none';
    });

    const headers = document.querySelectorAll('.header-row h2');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const headerRow = header.parentElement;

            headerRow.style.display = 'none';
            if (instructions) {
                instructions.style.display = 'none';
            }

            const target = header.getAttribute('data-target');
            const targetContent = document.querySelector(`.aftercare-content[data-title="${target}"]`);
            if (targetContent) {
                targetContent.style.display = 'block';
            }

            title.textContent = `Aftercare - ${header.textContent}`;
        });
    });
});

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