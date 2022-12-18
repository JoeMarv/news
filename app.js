// DECLARATIONS
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const menu = document.querySelector('.menu')

// MENU CONTROL
menuBtn.addEventListener('click', function() {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})