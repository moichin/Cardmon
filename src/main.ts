import './style.css'

let menu = document.getElementById('menu-hide')!;
let closeMenu = document.getElementById('close')!;
let openMenu = document.getElementById('open')!;
let girar = document.getElementById('girar')!;
let bgmenu = document.getElementById('menu-bg')!; 

openMenu.addEventListener('click', () => {
  menu.classList.remove('hidden');
  girar.classList.add('motion-rotate-out-160', 'motion-duration-[600ms]')
  bgmenu.classList.remove('hidden')
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('hidden');
  openMenu.classList.remove('hidden');
  bgmenu.classList.add("hidden")
  girar.classList.remove('motion-rotate-out-160')
  girar.classList.add('motion-rotate-in-160')
});