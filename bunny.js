document.addEventListener('DOMContentLoaded', () => {
    function wink() {
        const bunny = document.getElementById('ascii-bunny');
        bunny.innerHTML = "(\\_/)<br>(-_-)<br>(\"'')(\"'')";
        setTimeout(() => {
            bunny.innerHTML = "(\\_/)<br>(^_^)<br>(\"'')(\"'')";
        }, 80);
    }

    setInterval(wink, 3500);
});