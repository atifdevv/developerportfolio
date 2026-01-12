const menu = document.getElementById('hamburger');
const list = document.getElementById('navlist');


menu.addEventListener('click', ()=>{

    list.classList.toggle('navlist-active');
})