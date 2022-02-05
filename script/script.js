const nav = window.document.querySelector('.nav');
const btnToggle = window.document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});