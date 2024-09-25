var cakesList = [{
id: "1",
image:"images/cake 1.jpg "
},{
id:'2',
image:"images/cake 2.jpg "
},{
id:"3",
image:"images/cake 3.jpg "
},{
id:"4",
image:"images/cake 4.jpg "
},{
id:"5",
image:"images/cake 5.jpg "
},{
id:"6",
image:"images/cake 6.jpg "
},{
id:"7",
image:"images/cake 7.jpg "
}]

let cupcakeList = [
    {
        id: "8",
        image:"images/cupcake 1.jpg"
        },{
        id:'9',
        image:"images/cupcake 2.jpg "
        },{
        id:"10",
        image:"images/cupcake 3.jpg "
        },{
        id:"11",
        image:"images/cupcake 4.jpg "
        },{
        id:"12",
        image:"images/cupcake 5.jpg "
        },{
        id:"13",
        image:"images/cupcake 6.jpg "
        },{
        id:"14",
        image:"images/cupcake 7.jpg "
        }
]

let cakesnCups = document.querySelector(".cakes_cupcakes")

function LoadCakes(){
    cakesnCups.innerHTML = cakesList.map((x) => {
        return `<section>
             <img src="${x.image}"></img>
         </section>`
     }).join("")
  
}


function LoadCupcakes(){
    cakesnCups.innerHTML = cupcakeList.map((x) => {
        return `<section>
             <img src="${x.image}"></img>
         </section>`
     }).join("")
  
}
function loadSite(){
LoadCakes()
}

/*TOGGLING*/
var nav = document.querySelector("#nav")
let cover  = document.querySelector("#cover")
let button  = document.querySelector("#button")
let check= document.querySelector(".swiper")
let check1  = document.querySelector(".check")
function Toggle(){
     
    nav.classList.add("active")

if(screen.width <= 500){
    cover.style.display = "none"
    button.style.visibility ="hidden"
   
}else{
    cover.style.display = "flex"
}
}
function Close(){
    nav.classList.remove("active")
    cover.style.display = "flex"
    
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  