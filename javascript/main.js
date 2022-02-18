let ul = document.querySelector('nav ul');

document.querySelector('nav .menu').onclick = function (){
   ul.classList.add('active')
}
document.querySelector('nav .toggle').onclick= ()=>{
    ul.classList.remove('active')
}