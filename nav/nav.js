

let menuIcon = document.querySelector('.icon');
let mobileMenu = document.querySelector('.mobile-nav');

let reunionService = document.querySelector('.reunion-service');
let reunionMenu = document.querySelector('.reunion-service-items');

let about = document.querySelector('.about');
let aboutMenu = document.querySelector('.about-items');

menuIcon.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

reunionService.addEventListener('click', () => reunionMenu.classList.toggle('hidden'));

about.addEventListener('click', () => aboutMenu.classList.toggle('hidden'));