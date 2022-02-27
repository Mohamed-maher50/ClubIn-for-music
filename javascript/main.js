let ul = document.querySelector("nav ul");

document.querySelector("nav .menu").onclick = function () {
  ul.classList.add("active");
};
document.querySelector("nav .toggle").onclick = () => {
  ul.classList.remove("active");
};

// ///////////////////// popUp button

let popUp = document.querySelectorAll(".popUp")[0];
window.onscroll = function () {
  if (window.scrollY > 600) {
    popUp.style = "opacity:1";
  } else {
    popUp.style = "opacity:0";
  }
};
popUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// ///////////////// artist slider
let data = [
  {
    p: "You begin with a text, you sculpt information, you chieeded, you come to the p contey you may find some redeeming value with, wait for it, dummy copy, no less. There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.",
  },
  {
    p: "You begin with u come to the p contey you may find some redeeming value with, wait for it, dummy copy, no less. There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.",
  },
  {
    p: "You begin with a text, you sculpt information, you chid, you come to the p contey you may find some redeeming value with, wait for it, dummy copy, no less. There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.",
  },
  {
    p: "You begin with a text, you sculpt information, y's not needed, you come to the p contey you may find some redeeming value with, wait for it, dummy copy, no less. There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.",
  },
];
let index = 0;
let p = document.querySelectorAll(".artist-slider div.insert")[0],
  prev = document.querySelectorAll(".artist-slider .prev")[0],
  next = document.querySelectorAll(".artist-slider .next")[0];
  p.innerHTML = data[index].p;
  

let check =true
if(check){
   
    setInterval (()=>{
     
        p.innerHTML = data[index].p;
        index !== data.length -1 ? NEXT() :PREV();
    
        
    },5000)
}
prev.addEventListener("click",PREV)
function PREV(){
    p.style.opacity =1
    if(index !==0 ){
        index--
    }
    console.log(index)
    p.innerHTML =data[index].p;
    check =false;
    setTimeout(()=>{
        check =true
    },1000)
   
}
next.addEventListener("click",NEXT)
function NEXT(){
    p.style.opacity =1
    if(index < data.length-1 ){
        index++
    }
    console.log(index)
    p.innerHTML =data[index].p;
    check =false;
    setTimeout(()=>{
        check =true
    },2000)
 
}
window.onload = function(){
    alert("hello in my web site my name is mohamed maher")
}