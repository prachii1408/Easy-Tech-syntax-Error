console.log("hello...welcome to Sangeet");
let songindex=0;
let audioelement=new Audio('1.mpeg');
let audioelement2=new Audio('2.mpeg');
let audioelement3=new Audio('3.mpeg');
let audioelement4=new Audio('4.mpeg');
let audioelement5=new Audio('5.mpeg');
let audioelement6=new Audio('6.mpeg');
let masterplay=document.getElementById('icon');
let stop=document.getElementById('icon4');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[{songname:"bheegi bheegi raaton mein",filePath:"song/1.mpeg", coverPath:"covers/bhigi bhgi.png"},
{songname:"jiska mujhe tha intezaar",filePath:"song/2.mpeg", coverPath:"covers/jiska mujhe.png"},
{songname:"gore rang pe na itna",filePath:"song/3.mpeg", coverPath:"covers/gore rang.png"},
{songname:"Ek pyaar ka nagma",filePath:"song/4.mpeg", coverPath:"covers/ek pyaar ka.png"},
{songname:"Gum hai kisike pyaar mein",filePath:"song/5.mpeg", coverPath:"covers/gum hai kisike.png"},
{songname:"kya yahi pyaar hai",filePath:"song/6.mpeg", coverPath:"covers/kya yahi pyaar hai.png"}
]
function play1(){
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement.play();
        gif.style.opacity=1;
    }
    stop.addEventListener('click',()=>{audioelement.pause();
        gif.style.opacity=0;})
        
}
function play2(){
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement2.play();
        gif.style.opacity=1;}
        stop.addEventListener('click',()=>{audioelement2.pause();
            gif.style.opacity=0;})
        
}
function play3(){
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement3.play();
        gif.style.opacity=1;}
        stop.addEventListener('click',()=>{audioelement3.pause();
            gif.style.opacity=0;})
        
}
function play4(){
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement4.play();
        gif.style.opacity=1;}
        stop.addEventListener('click',()=>{audioelement4.pause();
            gif.style.opacity=0;})
        
}
function play5(){
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement5.play();
        gif.style.opacity=1;}
        stop.addEventListener('click',()=>{audioelement5.pause();
            gif.style.opacity=0;})
        
}
function play6(){
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement6.play();
        gif.style.opacity=1;}
        stop.addEventListener('click',()=>{audioelement6.pause();
            gif.style.opacity=0;})
        
}

audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{audioelement.currentTime=progressbar.value*audioelement.duration/100})
 makeplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {element.classList.remove('pause.jpg');
    element.classList.add('play.png');})
} 
audioelement2.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement2.currentTime/audioelement2.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{audioelement2.currentTime=progressbar.value*audioelement2.duration/100})
makeplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {element.classList.remove('pause.jpg');
    element.classList.add('play.png');})
}  
audioelement3.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement3.currentTime/audioelement3.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{audioelement3.currentTime=progressbar.value*audioelement3.duration/100})
makeplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {element.classList.remove('pause.jpg');
    element.classList.add('play.png');})
}  
audioelement4.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement4.currentTime/audioelement4.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{audioelement4.currentTime=progressbar.value*audioelement4.duration/100})
makeplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {element.classList.remove('pause.jpg');
    element.classList.add('play.png');})
}  
audioelement5.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement5.currentTime/audioelement5.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{audioelement5.currentTime=progressbar.value*audioelement5.duration/100})
makeplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {element.classList.remove('pause.jpg');
    element.classList.add('play.png');})
}  
audioelement6.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement6.currentTime/audioelement6.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{audioelement6.currentTime=progressbar.value*audioelement6.duration/100})
makeplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {element.classList.remove('pause.jpg');
    element.classList.add('play.png');})
}  