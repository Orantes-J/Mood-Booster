const e=[[{quote:"There is no path to happiness; happiness is the path.",author:"Buddha"},{quote:"Don't worry. Be happy.",author:"Bobby McFerrin"},{quote:"I have chosen to be happy because it's good for my health.",author:"Voltaire"},{quote:"Happiness is a journey, not a destination.",author:"Buddha"},{quote:"No medicine cures what happiness cannot.",author:"Gabriel García Márquez"},{quote:"They say a person needs just three things to be truly happy in this world: Someone to love, something to do, and something to hope for.",author:"Tom Bodett"},{quote:"Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.",author:"Marcel Proust"},{quote:"Happiness is a warm puppy.",author:"Charles M. Schulz"},{quote:"There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.",author:"Stephen Chbosky"},{quote:"Sanity and happiness are an impossible combination.",author:"Mark Twain"}],[{quote:"You cannot protect yourself from sadness without protecting yourself from happiness.",author:"Jonathan Safran Foer"},{quote:"It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",author:"Chuck Palahniuk"},{quote:"If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",author:"Roy T. Bennett"},{quote:"It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.",author:"Dale Carnegie"},{quote:"Happiness is a state of mind. It's just according to the way you look at things.",author:"Walt Disney"},{quote:"Think of all the beauty still left around you and be happy.",author:"Anne Frank"},{quote:"Happiness is not a goal...it's a by-product of a life well-lived.",author:"Eleanor Roosevelt"},{quote:"The best way to cheer yourself is to try to cheer someone else up.",author:"Mark Twain"},{quote:"Don't cry because it's over, smile because it happened.",author:"Dr. Seuss"},{quote:"Happiness depends upon ourselves.",author:"Aristotle"}]],t=[[{quote:"Anticipate the difficult by managing the easy.",author:"Lao Tzu"},{quote:"I believe that every person is born with talent.",author:"Maya Angelou"},{quote:"Our distrust is very expensive.",author:"Ralph Emerson"},{quote:"I never think of the future. It comes soon enough",author:"Albert Einstein"},{quote:"In order to win, you must expect to win.",author:"Richard Bach"},{quote:"Some pursue happiness, others create it.",author:"null"},{quote:"Don't ruin the present with the ruined past.",author:"Ellen Gilchrist"},{quote:"What we think, we become.",author:"Buddha"},{quote:"The shortest answer is doing.",author:"Lord Herbert"},{quote:"Our intention creates our reality.",author:"Wayne Dyer"}],[{quote:"Not all who wonder are lost.",author:"null"},{quote:"You know it was a good day if you didn't hit or bite anybody.",author:"Nathaniel Parizek"},{quote:"Today I will be happier than a bird with a french fry. ",author:"null"},{quote:"What we see depends mainly on what we look for.",author:"John Lubbock"},{quote:"We must always change, renew, rejuevenate ourselves. Otherwise we harden.",author:"Goethe"},{quote:"Consider the postage stamp: its usefulness consists in the ability to stick to one thing 'til it gets there.",author:"Josh Billings"},{quote:"I always wanted to be somebody, but now I realize I should have been more specific.",author:"Lily Tomlin"},{quote:"If you're going to be able to look back on something and laugh about it, you might as well laugh about it now.",author:"Marie Osmond"},{quote:"Here is a test to find whether your mission on earth is finished: If you're alive it isn't.",author:"Richard Bach"},{quote:"There is nothing in a caterpillar that tells you it's going to be a butterfly.",author:"Buckminster Fuller"}]],n=[[{quote:"A clever person solves a problem. A wise person avoids it.",author:"Albert Einstein"},{quote:"The wise person feels the pain of one arrow. The unwise feels the pain of two.",author:"Kate Carne"},{quote:"You've heard that it's wise to learn from experience, but it is wiser to learn from the experience of others.",author:"Rick Warren"},{quote:"Some of us think holding on makes us strong, but sometimes it is letting go.",author:"Hermann Hesse"},{quote:"Don't waste your time with explanations, people only hear what they want to hear.",author:"Paulo Coelho"},{quote:"Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.",author:"Dalai Lama"},{quote:"Faith in God includes faith in God's timing.",author:"Neal A. Maxwell"},{quote:"If we manage ego wisely, we get the upside it delivers followed by strong returns",author:"dave Marcum"},{quote:"Be wiser than other people, if you can; but do not tell them so.",author:"Lucius"},{quote:"Using pride wisely requires a solid grasp of when and why it can go wrong.",author:"David DeSteno"}],[{quote:"Knowledge is the crown of the wise, folly is an inheritance of a fool.",author:"Vusi Zitha"},{quote:"The nature of life is such that the fool does not always fail, nor is the wise man always successful.",author:"Janice Manning"},{quote:"Only the wisest and stupidest of men never change.",author:"Confucius"},{quote:"Do not be wise in words be wise in deeds.",author:"Jewish Proverb"},{quote:"The simple things are also the most extraordinary things, and only the wise can see them.",author:"Paulo Coelho"},{quote:"A wise man can learn more from a foolish question than a fool can learn from a wise answer.",author:"Bruce Lee"},{quote:"We never have more than we can bear. The present hour we are always able to endure.",author:"H.E Manning"},{quote:"The wise lack for nothing. The foolish, meanwhile, cannot make good use of anything.",author:"Camille Alice"},{quote:"Never seem wiser, nor more learned, than the people you are with. Wear your learning, like your watch, in a private pocket: and do not merely pull it out and strike it; merely to show that you have one.",author:"Lord Chesterfield"},{quote:"Life often teaches us through our wrong turns and missed possibilities.",author:"Anne Wilson Schaef"}]],o=document.querySelector(".quote-ui"),i=(document.querySelector(".main-container"),function(){o.innerHTML=""});let a=0;let s=0;let r=0;let u=0;let l=0;let h=0;let d=0;let c=0;document.querySelector("body"),document.querySelector(".q-o-d");const p=document.querySelector(".quote-holder-anime"),m=document.querySelector(".clickedAnime"),v=document.querySelector(".quote-holder-kanye"),g=document.querySelector(".clickedKanye"),y=document.querySelector(".quote-holder-wise"),f=document.querySelector(".clickedWise"),q=document.querySelectorAll(".mood-btn");m.addEventListener("click",(function(){fetch("https://animechan.vercel.app/api/random").then((e=>e.json())).then((e=>{p.innerHTML=` "${e.quote}" - ${e.character}`}))})),g.addEventListener("click",(function(){fetch("https://api.kanye.rest").then((e=>e.json())).then((e=>{v.innerHTML=`${e.quote}`}))})),f.addEventListener("click",(function(){fetch("https://api.quotable.io/random?tags=wisdom").then((e=>e.json())).then((e=>{y.innerHTML=`"${e.content}" - ${e.author}`}))}));q.forEach((p=>{p.addEventListener("click",(function(){p.textContent&&("Happy"==p.textContent&&(i(),o.innerHTML='\n    <div class="sect-wrapper">\n    <div class="title-container">\n        <h2 class="mid-font">Lets keep the positive vibes going!</h2>\n    </div>\n    </div>\n    <section>\n    <h3 class="title-font">generateMarkupH</h3>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="/happy-api-img.a96b9dd5.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-h1 quote-set">"I\'m not in this world to live up to your expectations and you\'re not in this world to live up to mine" - Bruce Lee</p>\n            </div>\n            <div class="mid-font">\n                <p>I can\'t say myself that I am happy but I am not mad either, I find everything beautiful. There is so much going on that it would be false advertisement if I said I was happy.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedHappy btn">Happy Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    <section>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="/happy-api-img-2.6f5f29b6.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-h2 quote-set">"A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness." - Albert Einstein</p>\n            </div>\n            <div class="mid-font">\n                <p>It takes teh same amnount of effort to be happy as it is to be upset.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedHappy2 btn">Happy Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    ',document.querySelector(".clickedHappy").addEventListener("click",(function(){const t=e[0][a];null==t&&(a=0),document.querySelector(".quote-holder-h1").innerHTML=`${t.quote} - ${t.author}`,a+=1})),document.querySelector(".clickedHappy2").addEventListener("click",(function(){const t=e[1][s];null==t&&(s=0),document.querySelector(".quote-holder-h2").innerHTML=`${t.quote} - ${t.author}`,s+=1}))),"Down"==p.textContent&&(i(),o.innerHTML='\n    <div class="sect-wrapper">\n    <div class="title-container">\n        <h2 class="mid-font">Lets get some positive quotes going!</h2>\n    </div>\n    </div>\n    <section>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="/alone-api-img-1.ad8730e4.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-d1 quote-set">"Just because today is a bad day doesn\'t mean tomorrow won\'t be the best day of your life. You just gotta get there."</p>\n            </div>\n            <div class="mid-font">\n                <p>The mind is very powerful thing, so it takes the exact amount effort to be happy.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedd1 btn">Uplifting Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    <section>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="alone-api-img-2.3f6ede5a.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-d2 quote-set">"Whenever you\'re going through a bad day just remember, your track record for getting through bad days, so far, is 100%. That\'s pretty darn good."</p>\n            </div>\n            <div class="mid-font">\n                <p>Just because you are down at the moment, do remember that the same reason that got you there will no longer hurt you, you have survived and is now knowledge.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedd2 btn">Uplifting Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    ',document.querySelector(".clickedd1").addEventListener("click",(function(){const e=t[0][r];null==e&&(r=0),document.querySelector(".quote-holder-d1").innerHTML=`${e.quote} - ${e.author}`,r+=1})),document.querySelector(".clickedd2").addEventListener("click",(function(){const e=t[1][u];null==e&&(u=0),document.querySelector(".quote-holder-d2").innerHTML=`${e.quote} - ${e.author}`,u+=1}))),"Inspired"==p.textContent&&(i(),o.innerHTML='\n    <div class="sect-wrapper">\n    <div class="title-container">\n        <h2 class="mid-font">Lets get some quotes to inpsire you!</h2>\n    </div>\n    </div>\n    <section>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="bruce-api-img.1324405e.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-I1 quote-set">"I\'m not in this world to live up to your expectations and you\'re not in this world to live up to mine" - Bruce Lee</p>\n            </div>\n            <div class="mid-font">\n                <p>As a martial artist myself  Bruce Lee has a big impact on my life. "Be like water" has helped me to get where I am today. If somthething is thrown at you, absorb the impact and throw it away, do not let it make a impact on you.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedI1 btn">test Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    <section>\n    <h3 class="title-font">test subject 2</h3>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="/lama-api-img.6c0dea35.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-I2 quote-set">"I am the number one most impactful artist of our generation, in the flesh. I am Shakespeare, Walt Disney." - Kanye West</p>\n            </div>\n            <div class="mid-font">\n                <p>The Dalai Lama if you do not know, in short is a reincarnation that is aware of his previous lives and continues his misison from his past lives, to create and maintain the peace he has built.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedI2 btn">Uplifting Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    ',document.querySelector(".clickedI1").addEventListener("click",(function(){const e=n[1][l];null==e&&(l=0),document.querySelector(".quote-holder-I1").innerHTML=`${e.quote} - ${e.author}`,l+=1})),document.querySelector(".clickedI2").addEventListener("click",(function(){const e=n[1][h];null==e&&(h=0),document.querySelector(".quote-holder-I2").innerHTML=`${e.quote} - ${e.author}`,h+=1}))),"Curious"==p.textContent&&(i(),o.innerHTML='\n    <div class="sect-wrapper">\n    <div class="title-container">\n        <h2 class="mid-font">Lets get your curiosity going!</h2>\n    </div>\n    </div>\n    <section>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="thinker-api-img.df757159.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-c1 quote-set">"Curiosity is the engine of achievement." - Ken Robinson</p>\n            </div>\n            <div class="mid-font">\n                <p>Being open minded without judging has helped me learn things a lot easier. Consider this in a contriversal topic.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedC1 btn">Curiosity Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    <section>\n    <div class="test-quote-div grid-set">\n        <div class="image-default-set">\n            <img class="image-set" src="/thinking-api-img.05230263.jpg" alt="practice image">\n        </div>\n        <div class="grid-set-inner">\n            <div class="jkshkil">\n                <p class="quote-holder-c2 quote-set">"I am the number one most impactful artist of our generation, in the flesh. I am Shakespeare, Walt Disney." - Kanye West</p>\n            </div>\n            <div class="mid-font">\n                <p>In order to be able to learn we must stay curious, let us ask why, how, when, and what even for the simplest of things. You will gain knowledge guarantee.</p>\n            </div>\n        </div>\n        <div>\n            <button class="clickedC2 btn">Curiosity Quote</button>\n        </div>\n    </div>\n    </section>\n    <hr>\n    ',document.querySelector(".clickedC1").addEventListener("click",(function(){const e=t[0][d];null==e&&(d=0),document.querySelector(".quote-holder-c1").innerHTML=`${e.quote} - ${e.author}`,d+=1})),document.querySelector(".clickedC2").addEventListener("click",(function(){const e=t[1][c];null==e&&(c=0),document.querySelector(".quote-holder-c2").innerHTML=`${e.quote} - ${e.author}`,c+=1}))))}))}));
//# sourceMappingURL=index.7e310f0f.js.map