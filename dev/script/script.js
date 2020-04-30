let floatMenu = document.querySelector('.content-float-menu')
let barMenu = document.querySelector('.header__bar')
let menu = document.querySelector('.header__hamburguer-menu').addEventListener('click',()=>{
    floatMenu.classList.toggle('active')
    barMenu.classList.toggle('toggle')

})   
let menuFloat = document.querySelector('.content-float-menu > span').addEventListener('click',()=>{
    barMenu.classList.toggle('toggle')
    setTimeout(()=>{

        floatMenu.classList.toggle('active')
    },300)
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
let arrow = document.querySelector('.footer__arrow')
window.addEventListener('scroll',addClassNav)
function addClassNav(){

    if(window.scrollY >10){
        nav.classList.add('nav-active')
    }else{
        nav.classList.remove('nav-active')
    }
    // //arrow
    // if(window.scrollY>600){
    //     arrow.classList.add('arrow-up')
    // }else{
    //     arrow.classList.remove('arrow-up')
    // }
}

// addEventListener('DOMContentLoaded', ()=>{
    
//     let btnUp = document.querySelector('.footer__arrow')
//     let scrollUp = () => document.documentElement.scrollTop || document.body.scrollTop
//     function up (){
    
//         if(scrollUp() > 0){
//             requestAnimationFrame(up)
//             scrollTo(0, scrollUp() - (scrollUp() / 20))
//         }
//     }
//     btnUp.addEventListener('click', up)
// })

//MENU ACTIVE
let list1 = document.querySelector('.header__list li a')
let list = document.querySelector('.header__list')
if(list1.textContent == 'home'){
    list1.classList.add('a-active')
}
let headerActive = document.querySelectorAll('.header__list li a')
    headerActive.forEach((hActive)=>{
            hActive.addEventListener('click',()=>{
            list.querySelector('.a-active').classList.remove('a-active')
            hActive.classList.add('a-active')
    })


})

//MENU FLOAT
let listFloat = document.querySelector('.content-float-menu')
let itemsFloat = document.querySelectorAll('.header__float-menu li a')
    itemsFloat.forEach((item)=>{
        item.addEventListener('click',()=>{
            listFloat.classList.remove('active')
        })
    })

