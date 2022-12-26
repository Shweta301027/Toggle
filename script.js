const btn = document.querySelector('.btn-menu');
const hide = document.querySelector('.btn-sub');

btn.addEventListener('click', ()=>{
    hide.classList.toggle('display-block')
});

