const messageElement = document.getElementById('icon-message');

document.querySelectorAll('.egypt-icons i').forEach(icon => {
    icon.addEventListener('mouseenter', (event) => {
        const rect = event.target.getBoundingClientRect();
        messageElement.style.left = `${rect.left + window.scrollX}px`;
        messageElement.style.top = `${rect.top + window.scrollY - messageElement.offsetHeight - 5}px`;
        messageElement.textContent = `Message for ${event.target.dataset.icon}`;
        messageElement.style.display = 'block';
    });

    icon.addEventListener('mouseleave', () => {
        messageElement.style.display = 'none';
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

