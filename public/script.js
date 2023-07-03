const navButton = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const closeBtn = document.querySelector('#close-icon');

navMenu.classList.add('hidden');

navButton.addEventListener('click', (e)=> {
    e.preventDefault();
    // navMenu.classList.toggle('hidden');
    // navButton.classList.toggle('hidden');
    
    // // navButton.setAttribute('src', './img/icon-close.svg')
    // if(navMenu.classList.contains('hidden')){
    //     navMenu.classList.remove('hidden')
    //     navButton.classList.add('hidden')
    //     closeBtn.classList.remove('hidden');
    // }else{
    //     navMenu
    // }
    navButton.setAttribute('src', './img/icon-hamburger.svg')
    if(navMenu.classList.contains('hidden')){
        navMenu.classList.remove('hidden');
        navButton.setAttribute('src', './img/icon-close.svg');
    }else{
        navMenu.classList.add('hidden');
        navButton.setAttribute('src', './img/icon-hamburger.svg');
    }
})
// navButton.setAttribute('src', './img/icon-hamburger.svg')
// if(navMenu.contains('hidden')){
//     navMenu.classList.remove('hidden');
//     navButton.setAttribute('src', './img/icon-close.svg');
// }else{
//     navMenu.classList.add('hidden');
//     navButton.setAttribute('src', './img/icon-hamburger.svg');
// }