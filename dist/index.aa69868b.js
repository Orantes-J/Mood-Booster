'use strict';
// quote of the day
const quoteOfDay = document.querySelector('.q-o-d');
// anime quote
const insertAnimeQuote = document.querySelector('.quote-holder-anime');
const animeQuoteReq = document.querySelector('.clickedAnime');
// kanye quote
const insertKanyeQuote = document.querySelector('.quote-holder-kanye');
const kanyeQuoteReq = document.querySelector('.clickedKanye');
// wisdom quote
const insertWisdomQuote = document.querySelector('.quote-holder-wise');
const wisdomQuoteReq = document.querySelector('.clickedWise');
animeQuoteReq.addEventListener('click', function() {
    fetch('https://animechan.vercel.app/api/random').then((res)=>res.json()
    ).then((quote)=>{
        insertAnimeQuote.innerHTML = ` "${quote.quote}" - ${quote.character}`;
    });
});
kanyeQuoteReq.addEventListener('click', function() {
    fetch('https://api.kanye.rest').then((res)=>res.json()
    ).then((quote)=>{
        insertKanyeQuote.innerHTML = `${quote.quote}`;
    });
});
wisdomQuoteReq.addEventListener('click', function() {
    console.log(`wise running`);
    fetch(`https://api.quotable.io/random?tags=wisdom`).then((res)=>res.json()
    ).then((quote)=>{
        console.log(quote);
        insertWisdomQuote.innerHTML = `"${quote.content}" - ${quote.author}`;
    });
});

//# sourceMappingURL=index.aa69868b.js.map
