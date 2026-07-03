// ==========================
// LOADING
// ==========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.visibility = "hidden";
    }, 2000);
});

// ==========================
// SCROLL MASUK
// ==========================

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    document.getElementById("hero").scrollIntoView({
        behavior: "smooth"
    });

});

// ==========================
// TYPING EFFECT
// ==========================

const text =
"Terima kasih sudah hadir dalam hidupku. Semoga kita selalu bersama selamanya ❤️";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,60);

    }

}

typing();

// ==========================
// LOVE LETTER
// ==========================

const surat =

`hallo cantikk, maafin aku iya sayangg akuuu.. mungkin kata maaf aja ga cukup buat kamu, karna dari sifat, ego, dan sifat sifat kecil kejelekan aku, maafin aku iyaa sayangg akuu. kamu itu bagaikan bumi dan matahari di saat aku membutuhkan kehangatan dan yaps kamu sangat hangat di pelukan aku terlalu nyaman di kehidupan kamu, tapi aku merasa sedih karna kamu blm bisa merasakan seperti itu dari diri aku, aku minta maaf karna aku tidak berguna ada di kehidupan kamu, aku minta maaf krna aku selalu bikin kamu marah, aku bener bener minta maaf iya sayangg. I LOVE YOU CANTIKKKK PRINCESSS AKUUU...`;

let j = 0;

function ketikSurat(){

    if(j < surat.length){

        document.getElementById("letterText").innerHTML += surat.charAt(j);

        j++;

        setTimeout(ketikSurat,40);

    }

}

setTimeout(ketikSurat,2500);

// ==========================
// COUNTDOWN
// ==========================

// GANTI TANGGAL JADIAN
const anniversary = new Date("2025-06-29 00:00:00");

function updateCounter(){

let now = new Date();

let diff = now - anniversary;

let days = Math.floor(diff / (1000*60*60*24));

let hours = Math.floor((diff/(1000*60*60))%24);

let minutes = Math.floor((diff/(1000*60))%60);

let seconds = Math.floor((diff/1000)%60);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCounter,1000);

updateCounter();

// ==========================
// MUSIC
// ==========================

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let play = false;

musicBtn.onclick = function(){

if(!play){

music.play();

musicBtn.innerHTML="⏸ Pause";

play=true;

}else{

music.pause();

musicBtn.innerHTML="🎵 Music";

play=false;

}

}

// ==========================
// QUOTES
// ==========================

const quotes=[

"Every love story is beautiful, but ours is my favorite ❤️",

"You are my home.",

"I found my happiness in you ❤️",

"Forever isn't long enough with you.",

"You are the best thing that ever happened to me.",

"I'll choose you over and over again."

];

let q=0;

function changeQuote(){

document.getElementById("quote").innerHTML=quotes[q];

q++;

if(q>=quotes.length){

q=0;

}

}

changeQuote();

setInterval(changeQuote,4000);

// ==========================
// CONFETTI
// ==========================

document.getElementById("loveBtn").onclick=function(){

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

}

// ==========================
// GALLERY EFFECT
// ==========================

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=function(){

this.classList.toggle("zoom");

}

});

// ==========================
// FLOATING HEART
// ==========================

document.addEventListener("mousemove",function(e){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize=Math.random()*20+10+"px";

heart.style.animation="fall 2s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},2000);

});

// ==========================
// STYLE FLOATING HEART
// ==========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

opacity:1;

transform:translateY(0) scale(1);

}

100%{

opacity:0;

transform:translateY(-120px) scale(2);

}

}

.zoom{

transform:scale(1.15)!important;

transition:.5s;

}

`;

document.head.appendChild(style);

// ==========================
// END
// ==========================

console.log("❤️ Web Bucin Premium Loaded ❤️");