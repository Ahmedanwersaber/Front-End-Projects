const hour=document.getElementById("hour");
const minute=document.getElementById("minutes");
const second=document.getElementById("second");
const Am=document.getElementById("am");
function updateclock(){
    let h = new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"
    if(h>12){
        h=h-12
        ampm="PM"
    }
  if(h<10){
        h="0" + h;
    }
    if(m<10){
        h="0" + m;
    }
    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s
    Am.innerHTML=ampm;
    setTimeout(()=>{
        updateclock();
     },1000)

  
}
updateclock();

// change background image
var color=["rgb(170, 192, 255)"

    ,"rgb(170, 219, 255)"

    ,"rgb(10, 151, 255)"

    ,"rgb(10, 102, 255)"];
var i=0;
document.querySelector(".btn").addEventListener("click",
function(){
   i= i < color.length ? ++i :0;
    document.querySelector("body ").style.background=color[i];
});

let btn=document.querySelector(".btn");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");

btn.addEventListener('click',()=>{
    document.body.style.backgroundImage="url('img/1.jpg')";
});
btn2.addEventListener('click',()=>{
    document.body.style.backgroundImage="url('img/2.jpg')";
});
btn3.addEventListener('click',()=>{
    document.body.style.backgroundImage="url('img/3.jpg')";
});

//var i=document.querySelector(".btn").addEventListener("click",
// function(){
//     var images=['img/1.jpg',
//                 'img/2.jpg',
//                 'img/3.jpg',
//                 'img/4.jpg',
//                 ];
    
//     var randomNumber = Math.floor(Math.random() * images.length);
//     var bgImg = 'url(' + images[randomNumber] + ')';
    
//     document.querySelector("body").css({'background':bgImg, 'background-size':'cover', });
    
//     });













