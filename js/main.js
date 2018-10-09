'use strict'

// add some listener for menu showing
let mainDivOfMenu = document.querySelector('.nav_closed');

mainDivOfMenu.addEventListener('click', function(event){
if(event.target.dataset.menu){
  mainDivOfMenu.classList.toggle('nav_open')
};

if(event.target.dataset.home){
  mainDivOfMenu.classList.remove('nav_open');
}
if(event.target.dataset.profile){
  mainDivOfMenu.classList.remove('nav_open');
}
if(event.target.dataset.skils){
  mainDivOfMenu.classList.remove('nav_open');
}
if(event.target.dataset.education){
  mainDivOfMenu.classList.remove('nav_open');
}
if(event.target.dataset.experience){
  mainDivOfMenu.classList.remove('nav_open');
}
if(event.target.dataset.portfolio){
  mainDivOfMenu.classList.remove('nav_open');
}
if(event.target.dataset.contact){
  mainDivOfMenu.classList.remove('nav_open');
}
// for(let i = 0; i < valArr.length; i++){
//   let val = valArr[i];
//   console.log(event.target.attributes[`data-${val}`]);  

// }
}, false)
