// for active link click
$(document).ready(function(){
    $('.navbar-nav').on('click', 'a', function(){
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    }) 
}) 

// for menu y hidden
const toggleMenu = document.querySelector('.navbar-toggler')

// show mobile menu
const mobileMenu = () => {
    toggleMenu.classList.toggle('is-active')
}

toggleMenu.addEventListener('click', mobileMenu)


// scroll trigger
gsap.registerPlugin(ScrollTrigger)
// gsap animation
// navbar
gsap.from('.navbar-brand, .navbar-toggler', {opacity: 0, duration: 0.6, delay: 0.3, y: 10}) 
gsap.from('.nav-item', {opacity: 0, duration: 0.6, delay: 0.2, y: 30, stagger: 0.2}) 

// home page
gsap.from('.home_photo', {opacity: 0, duration: 0.6, delay: 0.3, x: -100}) 
gsap.from('.home_intro h1', {opacity: 0, duration: 0.6, delay: 0.5, x: 100}) 
gsap.from('.home_intro h2', {opacity: 0, duration: 0.6, delay: 0.3, x: 100}) 
gsap.from('.home_intro p', {opacity: 0, duration: 0.6, delay: 0.7, x: 100})
gsap.from('.home_social a', {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})  

// WEB project
gsap.from('.project h1', {scrollTrigger:'.project h1', opacity: 0, duration: 1, delay: 1, x: -30}) 
gsap.from('.project .line', {scrollTrigger:'.project .line', opacity: 0, duration: 1, delay: 1, y: -30}) 
gsap.from('.box1 img', {scrollTrigger:'.box1 img', opacity: 0, duration: 1, delay: 1.1, x: 100}) 
gsap.from('.box2 img', {scrollTrigger:'.box2 img', opacity: 0, duration: 1, delay: 0.4, x: -100}) 

// UIX project
gsap.from('.uixproject h1', {scrollTrigger:'.project h1', opacity: 0, duration: 1, delay: 1, x: -30}) 
gsap.from('.uixproject .line', {scrollTrigger:'.project .line', opacity: 0, duration: 1, delay: 1, y: -30}) 
gsap.from('.top-left', {scrollTrigger:'.top-left', opacity: 0, duration: 1, delay: 0.4, x: 80}) 
gsap.from('.top-center', {scrollTrigger:'.top-center', opacity: 0, duration: 1, delay: 0.8, x: 90}) 
gsap.from('.top-right', {scrollTrigger:'.top-right', opacity: 0, duration: 1, delay: 1.1, x: 100}) 
gsap.from('.mid-left', {scrollTrigger:'.mid-left', opacity: 0, duration: 1, delay: 1.1, x: -100}) 
gsap.from('.mid-center', {scrollTrigger:'.mid-center', opacity: 0, duration: 1, delay: 0.8, x: -90}) 
gsap.from('.mid-right', {scrollTrigger:'.mid-right', opacity: 0, duration: 1, delay: 0.4, x: -80}) 
gsap.from('.bottom-left', {scrollTrigger:'.bottom-left', opacity: 0, duration: 1, delay: 1.1, x: 80}) 
gsap.from('.bottom-center', {scrollTrigger:'.bottom-center', opacity: 0, duration: 1, delay: 0.8, x: 90}) 
gsap.from('.bottom-right', {scrollTrigger:'.bottom-right', opacity: 0, duration: 1, delay: 0.4, x: 100}) 
gsap.from('.parent-btn', {scrollTrigger:'.parent-btn', opacity: 0, duration: 1, delay: 1, y: -30}) 

// skills
gsap.from('.skills h1', {scrollTrigger:'.skills h1', opacity: 0, duration: 1, delay: 0.7, y: -30}) 
gsap.from('.skills .line', {scrollTrigger:'.skills .line', opacity: 0, duration: 1, delay: 0.9, y: -30})
gsap.from('.programming img', {scrollTrigger:'.programming img',opacity: 0, duration: 1, delay: 0.9, y: -30, stagger: 0.1})
gsap.from('.design img', {scrollTrigger:'.design img',opacity: 0, duration: 1, delay: 1.1, y: -30, stagger: 0.3})

// contact
gsap.from('.contact h1', {scrollTrigger:'.contact h1', opacity: 0, duration: 1, delay: 1.1, x: -30}) 
gsap.from('.contact .line', {scrollTrigger:'.contact .line', opacity: 0, duration: 1, delay: 1.1, y: -30})
gsap.from('.contact_social img', {scrollTrigger:'.contact_social img', opacity: 0, duration: 1.1, delay: 0.4, x: 30})
gsap.from('.contact .desc', {scrollTrigger:'.contact .desc', opacity: 0, duration: 1, delay: 1.2, x: -30})
gsap.from('.contact_social a', {scrollTrigger:'.contact a',opacity: 0, duration: 1.1, delay: 1.2, y: -30, stagger: 0.2})
gsap.from('.copyright p', {scrollTrigger:'.copyright p', opacity: 0, duration: 1.1, delay: 1.2, x: -30})

// parallax
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
});