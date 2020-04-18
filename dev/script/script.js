let floatMenu = document.querySelector('.header__float-menu')
let barMenu = document.querySelector('.header__bar')
let menu = document.querySelector('.header__hamburguer-menu').addEventListener('click',()=>{
    floatMenu.classList.toggle('active')
    barMenu.classList.toggle('toggle')
})   
    