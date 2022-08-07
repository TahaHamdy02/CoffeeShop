/*==================== MENU SHOW Y HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*================= HIDE / SEARCH-BOX  ===================*/
var Search = document.querySelector('#search__icon'),
    SearchIcon = document.querySelector('#search__icon .uil'),
    SearchForm = document.querySelector('#search__form');
Search.addEventListener('click', () => {
    SearchForm.classList.toggle('show-search');
    SearchIcon.classList.toggle('active');
});

/*================= HIDE / SHOW CART  ===================*/
var Cart = document.querySelector('#cart__icon'),
    CartIcon = document.querySelector('#cart__icon .uil'),
    CartMenu = document.querySelector('#cart__items');

Cart.addEventListener('click', () => {
    CartMenu.classList.toggle('show-cart');
    CartIcon.classList.toggle('active');
});

/*================= HIDE / SHOW DROPDOWN ===================*/
var dropdownmenu = document.querySelector('.products__dropdown'),
    drop = document.querySelector('.drop'),
    downup = document.querySelector('.drop .downarr');

drop.addEventListener('click', () => {
    drop.classList.toggle('active');
    dropdownmenu.classList.toggle('show-dropdown');
    downup.classList.toggle('rotate');
});

/*================= HIDE / SHOW USER__PROFILE ===================*/
let profileBtn = document.querySelector('.personal'),
    UserInfo = document.querySelector('.personal__profile');
profileBtn.addEventListener('click', () => {
    if (UserInfo.style.display == 'block') {
        UserInfo.style.display = 'none';
    } else {
        UserInfo.style.display = 'block';
    }
});

/*================= USER PROFILE PHOTO===================*/
var profile = document.querySelector('#profile__ex'),
    pe = document.querySelector('.personal .uil');
document.addEventListener('DOMContentLoaded', () => {
    const resentImageDataUrl = localStorage.getItem('recent-image')
    if (resentImageDataUrl) {
        profile.setAttribute('src', resentImageDataUrl)
        pe.style.display = 'none';
        profile.style.display = 'block';
    } else {
        profile.style.display = 'none';
    }
});

/*================= USER DATA LOGIN/SIGNUP ===================*/
let user = document.querySelector('#user__name'),
    user1 = document.querySelector('.profile__user1'),
    user2 = document.querySelector('.profile__user2'),
    UserName = localStorage.getItem('username');

/*======= SET AND REMOVE USER =======*/
if (localStorage.getItem('username')) {
    user2.style.display = 'none';
    user1.style.display = 'block';
    user.innerHTML = UserName
} else {
    user2.style.display = 'block';
    user1.style.display = 'none';
};

/*===== LOGOUT & CLAER LOCAL STORAGE =====*/
let logout = document.querySelector('#user__logout');
logout.addEventListener('submit', function() {
    localStorage.clear();
    setTimeout(() => {
        window.location = "/assets/login.html"
    }, 500)
});

/*====================  MENU MOBILE ====================*/
var MenuBtn = document.querySelector('#menu__btn'),
    MenuIcon = document.querySelector('#menu__btn .uil'),
    Menu = document.querySelector('.nav');
MenuBtn.addEventListener('click', () => {
    Menu.classList.toggle('show-menu');
    MenuIcon.classList.toggle('active');
});

/*==================== HEADER BACKGROUND COLOR ====================*/
window.addEventListener('scroll', function() {
    let header = document.querySelector('#header');
    windowPosition = window.scrollY > 0,
        header.classList.toggle('scrolling-active', windowPosition);
});

// window.addEventListener('scroll', () => {
//     let y = window.scrollY;
//     MenuBtn.style.display = 'block';
// });
/*==================== CONTANCT ====================*/

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/