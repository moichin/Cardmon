import './style.css'



let menu = document.getElementById('menu-hide')!;
let closeMenu = document.getElementById('close')!;
let openMenu = document.getElementById('open')!;

openMenu.addEventListener('click', () => {
  menu.classList.remove('hidden');
  openMenu.classList.add('hidden');
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('hidden');
  openMenu.classList.remove('hidden');
});