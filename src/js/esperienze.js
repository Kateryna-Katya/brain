import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.esperienze-swiper', {
        modules: [Navigation],
        breakpoints: {
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1439: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
        centeredSlides: true,
        loop: true,
        slideClass: 'esperienze-swiper-slide',
        wrapperClass: 'esperienze-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
});