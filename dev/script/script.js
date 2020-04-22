let floatMenu = document.querySelector('.header__float-menu')
let barMenu = document.querySelector('.header__bar')
let menu = document.querySelector('.header__hamburguer-menu').addEventListener('click',()=>{
    floatMenu.classList.toggle('active')
    barMenu.classList.toggle('toggle')
})   

/* ----- Progress bar animations ---- */

let progres = document.querySelectorAll('.about__progress-done')
let valor = document.querySelectorAll('.about__progress .val')
let scroll = document.querySelector('#scroll')

let options = {
    // root: null,
    rootMargin: '0px',
    threshold: 0

    }

function progressBar(entries){
    if(entries[0].isIntersecting){
        
        for (const progre of progres) {
        let dat =  progre.getAttribute('data-done')
            progre.style.width = dat+'%';
            progre.style.opacity = 1;

        }
        for (const val of valor) {
            let score = val.textContent
            val.style.left=score;
            val.style.opacity=1;
        }
    }

}

let observer = new IntersectionObserver(progressBar, options);
    observer.observe(scroll)

/* -------- SCROLL ANIMATIONS ------- */
let nav = document.querySelector('.header__nav')
window.addEventListener('scroll',addClassNav)

function addClassNav(){

    if(window.scrollY >10){
        nav.classList.add('nav-active')
    }else{
        nav.classList.remove('nav-active')
    }
    console.log(window.scrollY)
}
