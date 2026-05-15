document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const bunny = document.getElementById("ascii-bunny");
        bunny.innerHTML = "(\\_/)<br>(-_-)<br>(\"'')(\"'')";
        setTimeout(() => {
            bunny.innerHTML = "(\\_/)<br>(^_^)<br>(\"'')(\"'')";
        }, 80);
    }, 3500);
});
