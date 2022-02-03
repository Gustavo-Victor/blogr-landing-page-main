const ul = window.document.querySelector('.nav-list');
const li = ul.childNodes;


li.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });

    item.addEventListener('mouseover', () => {
        if(!item.classList.contains('active')){
            item.classList.add('active');
        }
    });
    
})

