const burger = document.querySelector('.burger');//burger
const mainMenu = document.querySelector('.mainMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mainMenu.classList.toggle('active');
})

const navUrl = document.querySelectorAll(".menu-link");//close menu on click

navUrl.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    burger.classList.remove("active");
    mainMenu.classList.remove("active");
}