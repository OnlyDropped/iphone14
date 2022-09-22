const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

btn.addEventListener('click', ()=>{
  nav.classList.toggle('menu-open')
  menu.classList.toggle('menu-active')
})