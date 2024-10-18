const tabButtons = document.querySelectorAll('.tab-button');
const sectionContents = document.querySelectorAll('.section-content');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        sectionContents.forEach(content => {
            content.classList.remove('active');
            content.style.transform = 'translateY(20px)';
            content.style.opacity = '0';
        });
        
        button.classList.add('active');
        sectionContents[index].classList.add('active');

        setTimeout(() => {
            sectionContents[index].style.transform = 'translateY(0)';
            sectionContents[index].style.opacity = '1';
        }, 10);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    window.onclick = (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    };
});
