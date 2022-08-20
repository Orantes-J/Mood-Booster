'use strict';

import * as help from './helper.js';
import * as gen from "./quotes.js";


const htmlBody = document.querySelector('body');

// quote of the day
const quoteOfDay = document.querySelector('.q-o-d');

// anime quote
const insertAnimeQuote = document.querySelector('.quote-holder-anime')
const animeQuoteReq = document.querySelector('.clickedAnime');

// kanye quote
const insertKanyeQuote = document.querySelector('.quote-holder-kanye');
const kanyeQuoteReq = document.querySelector('.clickedKanye');

// wisdom quote
const insertWisdomQuote = document.querySelector('.quote-holder-wise');
const wisdomQuoteReq = document.querySelector('.clickedWise');

// inspirational quote 

// module curious quote
// const insertCuriousQuote = document.querySelector('.quote-holder-curious');
// const curiousQuoteReq = document.querySelector('.clickedCurious');

// mood section buttons
const moodBtns = document.querySelectorAll('.mood-btn');

const endPointTags = ['life', 'technology', 'wisdom', 'love', 'friendship', 'inspirational'];

if(module.hot){
    module.hot.accept();
}

animeQuoteReq.addEventListener('click', function(){
    fetch('https://animechan.vercel.app/api/random')
    .then(res => res.json())
    .then(quote => {
        insertAnimeQuote.innerHTML = ` "${quote.quote}" - ${quote.character}`;
    })
});

kanyeQuoteReq.addEventListener('click', function(){
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {
        insertKanyeQuote.innerHTML = `${quote.quote}`;
    });
});

// lukePeavey <-GITHUB OPEN SOURCE
wisdomQuoteReq.addEventListener('click', function(){
    fetch(`https://api.quotable.io/random?tags=wisdom`)
    .then(res => res.json())
    .then(quote =>{
        insertWisdomQuote.innerHTML = `"${quote.content}" - ${quote.author}`;
    })
});

// CLEAR PAGES AND GEN HTML MARKUP
const classNames = ['h-mood', 'i-mood', 'c-mood', 'd-mood'];
moodBtns.forEach((btn) => {

    btn.addEventListener('click', function(){

        if(!btn.textContent) return;

        if (btn.textContent == 'Up In The Clouds'){
            // htmlBody.classList.add('h-mood'); <- THIS IS ADDS BACKGROUND IMAGE
            help.clearUi();
            help.generateMarkupH();
            document.querySelectorAll('.quote').forEach(d => d.classList.add('bnedur'))
            help.addEventHOne();
            help.addEventHTwo();
        };

        if(btn.textContent == 'Down In The Dumps'){
            // htmlBody.classList.add('d-mood'); <- THIS IS ADDS BACKGROUND IMAGE 
            help.clearUi();
            help.generateMarkupD();
            document.querySelectorAll('.quote').forEach(d => d.classList.add('bnedur'))
            help.addEventDOne();
            help.addEventDTwo();
        }

        if(btn.textContent == 'Inspired To Create'){
            // htmlBody.classList.add('i-mood'); <- THIS IS ADDS BACKGROUND IMAGE 
            help.clearUi();
            help.generateMarkupI();
            document.querySelectorAll('.quote').forEach(d => d.classList.add('bnedur'))
            help.addEventIOne();
            help.addEventITwo();
        }

        if(btn.textContent == 'Thirst For Knowledge'){
            // htmlBody.classList.add('c-mood'); <- THIS IS ADDS BACKGROUND IMAGE 
            help.clearUi();
            help.generateMarkupC();
            document.querySelectorAll('.quote').forEach(d => d.classList.add('bnedur'))
            help.addEventCOne();
            help.addEventCTwo()
        }
    });
});

// NOTES -> INNER HTML DOES NOT ATTACH EVENT LISTENER BUT WE CAN ALWAYS ADD THE EVENT VIA QUERY SELECTOR && GUARD CLAUSE
