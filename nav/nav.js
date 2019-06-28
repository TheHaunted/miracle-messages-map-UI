

let menuIcon = document.querySelector('.icon');
let mobileMenu = document.querySelector('.mobile-nav');

let reunionService = document.querySelector('.reunion-service');
let reunionMenu = document.querySelector('.reunion-service-items');
console.log(reunionService);

menuIcon.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

reunionService.addEventListener('click', () => reunionMenu.classList.toggle('hidden'));