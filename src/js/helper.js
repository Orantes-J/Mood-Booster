
import * as gen from "./quotes.js";

const quoteContainer = document.querySelector('.quote-ui');
const mainContainer = document.querySelector('.main-container');

export const clearContaniner = function(){
    mainContainer.innerHTML = '';
}

export const clearUi = function(){
    quoteContainer.innerHTML = '';
    // quoteContainer.remove();
}

export const generateMarkupC = function(){
    quoteContainer.innerHTML = 
    `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="mid-font">Lets get your curiosity going!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="thinker-api-img.df757159.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-c1 quote-set">"Curiosity is the engine of achievement." - Ken Robinson</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">Being open-minded without judging has helped me learn things a lot easier. Consider this strategy in a  controversial topic.</p>
            </div>
        </div>
        <div>
            <button class="clickedC1 btn">Curiosity Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/thinking-api-img.05230263.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-c2 quote-set">"I am the number one most impactful artist of our generation, in the flesh. I am Shakespeare, Walt Disney." - Kanye West</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">To be able to learn, we must stay curious. Let us ask why, how, when, and what. Even for the simplest of things, you will gain a knowledge guarantee.</p>
            </div>
        </div>
        <div>
            <button class="clickedC2 btn">Curiosity Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `
};

export const generateMarkupI = function(){
    quoteContainer.innerHTML = 
    `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="mid-font">Lets get some quotes to inpsire you!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="bruce-api-img.1324405e.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-I1 quote-set">"I'm not in this world to live up to your expectations and you're not in this world to live up to mine" - Bruce Lee</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">As a martial artist my-self,  Bruce Lee has had a huge impact on my life. "Be like water" has helped me get where I am today. If something is thrown at you, absorb the impact and throw it away, don't let it have an impact on you.</p>
            </div>
        </div>
        <div>
            <button class="clickedI1 btn">Wise Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/lama-api-img.6c0dea35.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-I2 quote-set">"I am the number one most impactful artist of our generation, in the flesh. I am Shakespeare, Walt Disney." - Kanye West</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">The Dalai Lama, if you do not know,  is a reincarnation that is aware of his previous lives and continues his mission from his past lives. To create and maintain the peace he has built.</p>
            </div>
        </div>
        <div>
            <button class="clickedI2 btn">Wise Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `
}

export const generateMarkupD = function(){
    quoteContainer.innerHTML = 
    `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="mid-font">Lets get some positive quotes going!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/alone-api-img-1.ad8730e4.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil low-font">
                <p class="quote-holder-d1 quote-set">"Just because today is a bad day doesn't mean tomorrow won't be the best day of your life. You just gotta get there."</p>
            </div>
            <div class="low-font quote">
                <p class="quote">The mind is very powerful thing, so it takes the exact amount effort to be happy.</p>
            </div>
        </div>
        <div>
            <button class="clickedd1 btn">Uplifting Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="alone-api-img-2.3f6ede5a.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil low-font">
                <p class="quote-holder-d2 quote-set">"Whenever you're going through a bad day just remember, your track record for getting through bad days, so far, is 100%. That's pretty darn good."</p>
            </div>
            <div class="low-font quote">
                <p class="quote">Just because you are down at the moment, do remember that the same reason that got you there will no longer hurt you, you have survived and is now knowledge.</p>
            </div>
        </div>
        <div>
            <button class="clickedd2 btn">Uplifting Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `
};

export const generateMarkupH = function(){
    quoteContainer.innerHTML =
    `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="low-font">Lets keep the positive vibes going!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set low-font">
        <div class="image-default-set">
            <img class="image-set" src="/happy-api-img.a96b9dd5.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-h1 quote-set">"I'm not in this world to live up to your expectations and you're not in this world to live up to mine" - Bruce Lee</p>
            </div>
            <div>
                <p class="quote">I can't say myself that I am happy but I am not mad either, I find everything beautiful. There is so much going on that it would be false advertisement if I said I was happy.</p>
            </div>
        </div>
        <div>
            <button class="clickedHappy btn">Happy Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/happy-api-img-2.6f5f29b6.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil low-font">
                <p class="quote-holder-h2 quote-set">"A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness." - Albert Einstein</p>
            </div>
            <div class="low-font">
                <p class="quote">It takes the same amount of effort to be happy as it is to be upset.</p>
            </div>
        </div>
        <div>
            <button class="clickedHappy2 btn">Happy Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `
}

// Happy
let counterH = 0;
export const addEventHOne = function(){
    document.querySelector('.clickedHappy').addEventListener('click', function(){
        const downQuote = gen.happyQuotes[0][counterH];
        if(downQuote == undefined) counterH = 0;
        document.querySelector('.quote-holder-h1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterH += 1;
    })
};

let counterH2 = 0;
export const addEventHTwo = function(){
    document.querySelector('.clickedHappy2').addEventListener('click', function(){
        const downQuote = gen.happyQuotes[1][counterH2];
        if(downQuote == undefined) counterH2 = 0;
        document.querySelector('.quote-holder-h2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterH2 += 1;
    })
};

// Down 
let counterd = 0;
export const addEventDOne = function(){
    document.querySelector('.clickedd1').addEventListener('click', function(){
        const downQuote = gen.downQuotes[0][counterd];
        if(downQuote == undefined) counterd = 0;
        document.querySelector('.quote-holder-d1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterd += 1;
    })
};

let counterd2 = 0;
export const addEventDTwo = function(){
    document.querySelector('.clickedd2').addEventListener('click', function(){
        const downQuote = gen.downQuotes[1][counterd2];
        if(downQuote == undefined) counterd2 = 0;
        document.querySelector('.quote-holder-d2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterd2 += 1;
    })
};


// Inspired
let counterI = 0;
export const addEventIOne = function(){
    document.querySelector('.clickedI1').addEventListener('click', function(){
        const downQuote = gen.wiseQuotes[1][counterI];
        if(downQuote == undefined) counterI = 0;
        document.querySelector('.quote-holder-I1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterI += 1;
    })
};

let counterI2 = 0;
export const addEventITwo = function(){
    document.querySelector('.clickedI2').addEventListener('click', function(){
        const downQuote = gen.wiseQuotes[1][counterI2];
        if(downQuote == undefined) counterI2 = 0;
        document.querySelector('.quote-holder-I2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterI2 += 1;
    })
};

// Curious
let counterC = 0;
export const addEventCOne = function(){
    document.querySelector('.clickedC1').addEventListener('click', function(){
        const downQuote = gen.downQuotes[0][counterC];
        if(downQuote == undefined) counterC = 0;
        document.querySelector('.quote-holder-c1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterC += 1;
    })
};

let counterC2 = 0;
export const addEventCTwo = function(){
    document.querySelector('.clickedC2').addEventListener('click', function(){
        const downQuote = gen.downQuotes[1][counterC2];
        if(downQuote == undefined) counterC2 = 0;
        document.querySelector('.quote-holder-c2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterC2 += 1;
    })
};

export const clearEntire = function(){
    const mainBio = document.querySelector(".sect-p1");
    const dayQuote = document.querySelector(".t-quote");
    mainBio.classList.add("hide-object");
    dayQuote.classList.add("hide-object");
}
