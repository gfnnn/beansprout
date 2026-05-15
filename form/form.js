const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_3x2pfdd';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Sent';
            alert('Sent!');
        }, () => {
            btn.value = 'Send';
            alert('Something went wrong. Please try again or reach out via Instagram.');
        });
});
