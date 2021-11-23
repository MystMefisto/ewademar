/* Variables and consts */
const Main = document.querySelector('.main-container');
const About = document.getElementById('about')
const Commission = document.getElementById('commissions');
const Networks = document.getElementById('networks');

/* About */

document.addEventListener('DOMContentLoaded', () => {
    let about = document.createElement('p');
    about.classList.add('about');
    aboutEwa = `I'm Ewademar, digital artist and Mexican freelancer. I draw mainly FNaF and furries stuff. I speak spanish and I'm learning english at the moment. I'm currently working on commissions and for various FNaF fangames with the hope of someday working for the Fazbear Fanverse.`;
    about.innerText = aboutEwa;
    Main.appendChild(about);
});

About.addEventListener('click',(e)=>{
    e.preventDefault();
    let about = document.createElement('p');
    Main.innerHTML="";
    about.classList.add('about');
    aboutEwa = `I'm Ewademar, digital artist and Mexican freelancer. I draw mainly FNaF and furries stuff. I speak spanish and I'm learning english at the moment. I'm currently working on commissions and for various FNaF fangames with the hope of someday working for the Fazbear Fanverse.`;
    about.innerText = aboutEwa;
    Main.appendChild(about);
});

Commission.addEventListener('click',(e)=>{
    e.preventDefault();
    Main.innerHTML="";
    /* First Commission */
    let commissionContainer1 = document.createElement('div');
    commissionContainer1.classList.add('commissionContainer');
    let commissionImage1 = document.createElement('img');
    commissionImage1.src = 'commissions/commission1.png';
    commissionImage1.classList.add('commissionImage');
    commissionContainer1.appendChild(commissionImage1);

    /* Second Commission */
    let commissionContainer2 = document.createElement('div');
    commissionContainer2.classList.add('commissionContainer');
    let commissionImage2 = document.createElement('img');
    commissionImage2.src = 'commissions/commission2.png';
    commissionImage2.classList.add('commissionImage');
    commissionContainer2.appendChild(commissionImage2);

    /* Third Commission */
    let commissionContainer3 = document.createElement('div');
    commissionContainer3.classList.add('commissionContainer');
    let commissionImage3 = document.createElement('img');
    commissionImage3.src = 'commissions/commission3.png';
    commissionImage3.classList.add('commissionImage');
    commissionContainer3.appendChild(commissionImage3);

    /* Fourth Commission */
    let commissionContainer4 = document.createElement('div');
    commissionContainer4.classList.add('commissionContainer');
    let commissionImage4 = document.createElement('img');
    commissionImage4.src = 'commissions/commission4.png';
    commissionImage4.classList.add('commissionImage');
    commissionContainer4.appendChild(commissionImage4);

    /* Fifth Commission */
    let commissionContainer5 = document.createElement('div');
    commissionContainer5.classList.add('commissionContainer');
    let commissionImage5 = document.createElement('img');
    commissionImage5.src = 'commissions/commission5.png';
    commissionImage5.classList.add('commissionImage');
    commissionContainer5.appendChild(commissionImage5);

    /* Sixth Commission */
    let commissionContainer6 = document.createElement('div');
    commissionContainer6.classList.add('commissionContainer');
    let commissionImage6 = document.createElement('img');
    commissionImage6.src = 'commissions/commission6.png';
    commissionImage6.classList.add('commissionImage');
    commissionContainer6.appendChild(commissionImage6);

    /* Seventh Commission */
    let commissionContainer7 = document.createElement('div');
    commissionContainer7.classList.add('commissionContainer');
    let commissionImage7 = document.createElement('img');
    commissionImage7.src = 'commissions/commission7.png';
    commissionImage7.classList.add('commissionImage');
    commissionContainer7.appendChild(commissionImage7);

    /* Eighty Commission */
    let commissionContainer8 = document.createElement('div');
    commissionContainer8.classList.add('commissionContainer');
    let commissionImage8 = document.createElement('img');
    commissionImage8.src = 'commissions/commission8.png';
    commissionImage8.classList.add('commissionImage');
    commissionContainer8.appendChild(commissionImage8);

    /* Disclaimer */

    let priceContainer = document.createElement('div');
    priceContainer.classList.add('commissionContainer');
    let priceImage = document.createElement('img');
    priceImage.src = 'commissions/prices.png';
    priceImage.classList.add('commissionImage');
    priceContainer.appendChild(priceImage);

    /* Disclaimer */
    
    /* Appending every commission div to main */
    Main.append(commissionContainer1,commissionContainer2,
        commissionContainer3,commissionContainer4,
        commissionContainer5,commissionContainer6,
        commissionContainer7,commissionContainer8,
        priceContainer);
});

Networks.addEventListener('click',(e)=>{
    e.preventDefault();
    Main.innerHTML="";
    /* Title */
    let networkTitle = document.createElement('h1');
    networkTitle.innerText = "Contact Me:";
    networkTitle.classList.add('network-title');

    /* Container of networks */
    let networkContainer = document.createElement('div');
    networkContainer.classList.add('network-container');

    /* Creating network elements */

    /* Furaffinity */
    let furaffinityLink = document.createElement('a');
    let furaffinityImage = document.createElement('img');
    furaffinityLink.classList.add('network-link');
    furaffinityLink.href = 'https://www.furaffinity.net/user/ewademar/';
    furaffinityLink.target = '_blank';
    furaffinityImage.classList.add('network-image');
    furaffinityImage.src = 'networks/furaffinity.png';
    furaffinityLink.appendChild(furaffinityImage);

    /* Instagram */

    let instagramLink = document.createElement('a');
    let instagramImage = document.createElement('img');
    instagramLink.classList.add('network-link');
    instagramLink.href = 'https://www.instagram.com/ewademar_official/';
    instagramLink.target = '_blank';
    instagramImage.classList.add('network-image');
    instagramImage.src = 'networks/instagram.png';
    instagramLink.appendChild(instagramImage);

    /* Twitter */

    let twitterLink = document.createElement('a');
    let twitterImage = document.createElement('img');
    twitterLink.classList.add('network-link');
    twitterLink.href = 'https://twitter.com/ewademar';
    twitterLink.target = '_blank';
    twitterImage.classList.add('network-image');
    twitterImage.src = 'networks/twitter.png';
    twitterLink.appendChild(twitterImage);

    /* Reddit */

    let redditLink = document.createElement('a');
    let redditImage = document.createElement('img');
    redditLink.classList.add('network-link');
    redditLink.href = 'https://www.reddit.com/user/ewademar';
    redditLink.target = '_blank';
    redditImage.classList.add('network-image');
    redditImage.src = 'networks/reddit.png';
    redditLink.appendChild(redditImage);

    /* Appending container to links */

    networkContainer.append(furaffinityLink,instagramLink,twitterLink,redditLink);

    Main.append(networkTitle,networkContainer);
});