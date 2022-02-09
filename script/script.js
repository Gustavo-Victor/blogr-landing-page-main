const nav = window.document.querySelector('.nav');
const btnToggle = window.document.querySelector('.btn-toggle');
const felizardo = window.document.querySelector(".call-to-action-p");

btnToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    if(nav.classList.contains('active')){
        felizardo.style.display = 'none';
    }else{
        felizardo.style.display = 'block';
    }
});