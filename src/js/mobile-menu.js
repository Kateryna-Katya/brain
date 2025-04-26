const menuBtn = document.querySelector('.menu-button');
const backdrop = document.getElementById('backdrop');
const modalMenu = document.getElementById('modalWindow');
const menuItems = document.querySelectorAll('.menu-list-item');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', openModal);
menuItems.forEach(item => item.addEventListener('click', closeModal));
backdrop.addEventListener('click', handleBackdropClick);
document.addEventListener('keydown', handleEscape);
window.addEventListener('scroll', blurHeader);

function openModal() {
    backdrop.style.display = 'flex';
}

function closeModal() {
    backdrop.style.display = 'none';
}

function handleBackdropClick(e) {
    if (e.target === backdrop) {
        closeModal();
    }
}

function handleEscape(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

function blurHeader() {
    if (window.scrollY > 60) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
}