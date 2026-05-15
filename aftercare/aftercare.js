document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".aftercare-content[data-title]");
    const instructions = document.getElementById("instructions");
    const heading = document.querySelector("h1");

    contents.forEach(el => { el.style.display = "none"; });

    document.querySelectorAll(".header-row h2").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.style.display = "none";
            if (instructions) instructions.style.display = "none";
            const target = btn.getAttribute("data-target");
            const content = document.querySelector(`.aftercare-content[data-title="${target}"]`);
            if (content) content.style.display = "block";
            heading.textContent = `Aftercare - ${btn.textContent}`;
        });
    });
});
