document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado correctamente. Me pondré en contacto pronto.');
    this.reset();
});