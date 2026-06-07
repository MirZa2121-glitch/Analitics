/*import { IMG } from './components/dataIMG.js';
import $cardIcon from '../asset/img/icon/Cardsicon.png';
import $coin from '../asset/img/icon/Coin%20icon.png';
import $purse from '../asset/img/icon/Purse%20icon.png';
import $google from '../asset/img/logo/Google.svg';
import $analitic from '../asset/img/details/analitic-1.png';
import $feedback from '../asset/img/icon/User Feedback Image.png';
*/

import { support } from './components/texhSupport.js';
import { initLanguageSwitcher } from './components/changeLang.js';

const $card = document.getElementById('card');
const $card2 = document.getElementById('card2');
const $sliders = document.getElementById('sliders');

function generateCard() {
    const items = [
        { 
            name: 'Customizable card', 
            desc: 'Custom your own card for your exact incomes and expenses needs.', 
            img: new URL('../asset/img/icon/Cardsicon.png', import.meta.url).href 
        },
        { 
            name: 'No payment fee', 
            desc: 'Transfer your payment all over the world with no payment fee.', 
            img: new URL('../asset/img/icon/Coin icon.png', import.meta.url).href 
        },
        { 
            name: 'All in one place', 
            desc: 'The right place to keep your credit and debit cards, boarding passes & more.', 
            img: new URL('../asset/img/icon/Purse icon.png', import.meta.url).href 
        },
    ];

    if (!$card) return;

    $card.innerHTML = items.map(item => `
        <div class="justify-between items-center py-10 lg:p-0">
            <div class="mx-auto">
                <img src="${item.img}" alt="${item.name}" class="mx-auto"/>
                <div class='w-[250px] text-center'>
                    <h4 data-lang-key="title2" class="font-semibold text-[18px] text-white py-2">${item.name}</h4>
                    <p data-lang-key="description2" class="text-sm text-[#b8b8b8ae] text-[18px]">${item.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}


document.addEventListener('DOMContentLoaded', generateCard);

const generateRewiew = function() {
    const reviews = [
        {
            text: '“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don\'t need to worry because it\'s all in one place!”',
            author: 'Johnny Owens',
            rating: '⭐⭐⭐⭐⭐',
            img: new URL('../asset/img/icon/User Feedback Image.png', import.meta.url).href,
        },
        {
            text: '“I love how clean and simple the interface is. It helps me keep track of all my cards and tickets without any stress.”',
            author: 'Megan Fox',
            rating: '⭐⭐⭐⭐⭐',
            img: new URL('../asset/img/icon/User Feedback Image.png', import.meta.url).href,
        },
        {
            text: '“The design is elegant and the app feels very fast. It is definitely my go-to wallet solution now.”',
            author: 'Alex Rivera',
            rating: '⭐⭐⭐⭐⭐',
            img: new URL('../asset/img/icon/User Feedback Image.png', import.meta.url).href,
        },
    ];

    $sliders.innerHTML = `
        <div class="swiper review-swiper">
            <div class="swiper-wrapper">
                ${reviews.map(review => `
                    <div class="swiper-slide">
                        <div class="bg-[#BFAFF2] rounded-3xl p-8 min-h-[260px] flex flex-col justify-between w-[400px] md:w-[800px] lg:w-[1080px] h-[460px] mx-auto">
                            <p data-lang-key="rewiew" class="w-50 md:w-180 lg:w-180 text-[#2B2B2B] text-[18px] leading-relaxed my-[30px] md:my-[100px]  lg:my-[100px] font-bold mx-10 lg:mx-[100px]">${review.text}</p>
                            <div class="flex items-center gap-7 mx-[100px]">
                            <div class="">
                                <img src="${review.img}" alt=""/>
                            </div>
                                <div>
                                    <p data-lang-key="author" class="font-semibold text-[#2B2B2B]">${review.author}</p>
                                    <p class="text-sm text-[#5c5c5c]">${review.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    `;

    if (typeof Swiper !== 'undefined') {
        new Swiper('.review-swiper', {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 12
                },
                // when window width is >= 640px (mobile landscape / small tablets)
                640: {
                    slidesPerView: 1.05,
                    spaceBetween: 16
                },
                // when window width is >= 768px (tablets)
                768: {
                    slidesPerView: 1.12,
                    spaceBetween: 20
                },
                // when window width is >= 1024px (small desktops)
                1024: {
                    slidesPerView: 1.2,
                    spaceBetween: 24
                },
                // when window width is >= 1280px (large desktops)
                1280: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });
    }
}

generateRewiew()

function generateCard2() {
    const items = [
        { 
            name: 'Customizable card', 
            desc: 'Custom your own card for your exact incomes and expenses needs.', 
            img: new URL('../asset/img/icon/Cardsicon.png', import.meta.url).href 
        },
        { 
            name: 'No payment fee', 
            desc: 'Transfer your payment all over the world with no payment fee.', 
            img: new URL('../asset/img/icon/Coin icon.png', import.meta.url).href 
        },
        { 
            name: 'All in one place', 
            desc: 'The right place to keep your credit and debit cards, boarding passes & more.', 
            img: new URL('../asset/img/icon/Purse icon.png', import.meta.url).href 
        },
    ];

    if (!$card) return;

    $card.innerHTML = items.map(item => `
        <div class="justify-between items-center py-10 lg:p-0">
            <div class="mx-auto">
                <img src="${item.img}" alt="${item.name}" class="mx-auto"/>
                <div class='w-[250px] text-center'>
                    <h4 class="font-semibold text-[18px] text-white py-2">${item.name}</h4>
                    <p class="text-sm text-[#b8b8b8ae] text-[18px]">${item.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}

const startLocalFiles = function() {
    initLanguageSwitcher();
    support();
}

startLocalFiles()