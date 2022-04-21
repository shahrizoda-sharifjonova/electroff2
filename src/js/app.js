import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper'; 

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

new Swiper(".results__swiper", { 
    slidesPerView: 2,
    spaceBetween: 20,
    modules: [Navigation],
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});

const introBtn = document.querySelector('.intro__btn');
const orderBtn = document.querySelector('.order__btn');
const projectsBtn = document.querySelector('.projects__btn');
const popup =  document.querySelectorAll('.popup');
const popupClose =  document.querySelectorAll('.popup__close');

const popupOpen = document.querySelectorAll('.popup-open');
popupOpen.forEach(el => {
    el.addEventListener('click', (e)=>{
        const target = el.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
        body.classList.toggle('active');
    })
})

popupClose.forEach(ele=> {
    ele.addEventListener('click', (e)=>{
        popup.forEach(element => {
            element.classList.remove('active')
        });
        body.classList.remove('active');
    })
});


const form = document.getElementById('formContent');
form.addEventListener('submit', formSend);
async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);
    form.classList.add('sending');
    let response = await fetch('files/sendmail.php', {
        method: 'POST',
        body: formData
    });
    if(response.ok){
        let result = await response.json();
        form.classList.add('success');
        form.classList.remove('sending');
        form.reset();
        location.reload();
    }else{
        alert("Ошибка");
        form.classList.remove('sending');
    }
}

import IMask from 'imask';

var phoneMask = IMask(
    document.getElementById('number'), {
      mask: '+{7} (000) 000 - 00 - 00'
});

const manp = document.querySelector('.manp');
const manpClose = document.querySelector('.manp__close');
const manpOpen = document.querySelectorAll('.manp-open');

manpOpen.forEach(el => {
    el.addEventListener('click', (e)=>{
        manp.classList.toggle('active');
        const img = el.querySelector('img');
        const source = el.querySelector('source');
        const src = img.getAttribute('src');
        const srcset = source.getAttribute('srcset');
        const imgTarget = manp.querySelector('img');
        const sourceTarget = manp.querySelector('source');
        imgTarget.setAttribute('src', src);
        sourceTarget.setAttribute('srcset', srcset);
    })
});

manpClose.addEventListener('click', (e)=>{
    manp.classList.remove('active');
})