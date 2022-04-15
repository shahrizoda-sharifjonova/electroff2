import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper'; 

// import Swiper from 'swiper/bundle';

const swiper = new Swiper();

const menu = document.querySelector('.menu');
const disableMenu = document.querySelector('.disable-menu');
const firstMenu = document.querySelector('.first-menu');
const thirdMenu = document.querySelector('.third-menu');
const menuIcons = document.querySelector('.menu-icons');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    disableMenu.classList.toggle('active')
    body.classList.toggle('active')
    firstMenu.classList.toggle('active')
    thirdMenu.classList.toggle('active')
    menuIcons.classList.toggle('active')
    headerList.classList.toggle('active')
})

new Swiper(".needs__swiper", { 
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Navigation],
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        1400: {
        slidesPerView: 6,
        spaceBetween: 30,
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        768:{
        slidesPerView: 2,
        spaceBetween: 30,
        },
        576:{
        slidesPerView: 1,
        spaceBetween: 20,
        },
    },
});

new Swiper(".estates__swiper", { 
    slidesPerView: 1,
    spaceBetween: 30,
    modules: [Navigation, Pagination],
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});