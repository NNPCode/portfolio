$(document).ready(function(){

    const toggleMenu = document.querySelector('.mobile-nav');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const bodyE1 = document.body

    toggleMenu.addEventListener('click', function(){

        this.classList.toggle('mobile-nav--active');
        mobileMenu.classList.toggle('mobile-menu--active');
        overlay.classList.toggle('overlay--active');
        bodyE1.classList.toggle('noscroll');
    })

    mobileMenu.addEventListener('click', function(){

        this.classList.remove('mobile-menu--active');
        toggleMenu.classList.remove('mobile-nav--active');
        overlay.classList.remove('overlay--active');
        bodyE1.classList.remove('noscroll');
    })

    window.addEventListener('resize', function(){
        
        toggleMenu.classList.remove('mobile-nav--active');
        mobileMenu.classList.remove('mobile-menu--active');
        overlay.classList.remove('overlay--active');
        bodyE1.classList.remove('noscroll');
    })

    // Mixitup
    let containerE1 = document.querySelector('#mix-cards');

    let mixer = mixitup(containerE1, {
        classNames: {
            block: ""
        }
    });

    // PageNav
    $('#header-top-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.8,
        filter: '',
        easing: 'swing',
    });

})    


// document.querySelector('.mobile-nav').addEventListener('click', function(){
//     this.classList.toggle('mobile-nav--active')
//     document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active')
//     document.querySelector('.overlay').classList.toggle('overlay--active')
// });


