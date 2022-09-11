import _, { create } from 'lodash';
import './style.css';
import Logo from './images/logo.png';

import Burger1 from './images/burger1.png'
import Burger2 from './images/burger2.png'
import Burger3 from './images/burger3.png'
import Drink from './images/drink1.png'
import Icon from './images/icon.png'
import Man from './images/boy.png'

const content = document.querySelector('#content')

//header
const header = document.createElement('div')
header.setAttribute('class','header')
header.innerHTML = "<ul class='tabs'>\
  <li><button class='tab' id='home'>Home</button></li>\
  <li><button class='tab' id='menu'>Menu</button></li>\
  <li><button class='tab' id='contact'>Contact</button></li>\
<ul>"

//add triggers to the button 
header.querySelector('#home').addEventListener("click",(e)=>
{
    cleanBoard();
    showMain();
}
)

header.querySelector('#menu').addEventListener("click",(e)=>
{
    cleanBoard();
    showMenu();
}
)
header.querySelector('#contact').addEventListener("click",(e)=>
{
    cleanBoard();
    showContact();
}
)



content.appendChild(header)

//title
const title = document.createElement('h1');
const logo = new Image();
logo.src= Logo;
title.innerText = "Relakku's Kitchen"
title.setAttribute("class","title")
content.appendChild(title)
content.appendChild(logo)



// board 
const board = document.createElement('div')
board.setAttribute('class','board')
content.appendChild(board);

// footer
const footer = document.createElement('div')
footer.classList='footer'
footer.innerText = "Pictures from https://www.stickpng.com/"
content.appendChild(footer)






const showMain = () => {

// about 
const about = document.createElement('div');
about.setAttribute('class','about')
const p  = document.createElement('p')
p.innerHTML = "<p><q>Relakku's Kitchen is one of best hamburger restaurants across the country. Many people come to visit here to \
taste a freshly-made burger even from outside of the country. His bear hands give difference to his burgers. I wish I could move to the nextdoor of this restaurant.</q></p> <p class='bold'>Burger Critic</p>"

about.appendChild(p)

board.appendChild(about);

// hours 
const hours = document.createElement('div');
hours.setAttribute('class','hours')
hours.innerHTML = "<h3 class='bold'>Hours</h3>"
const ul = document.createElement('ul')

function makeHours(day,time="10am-5pm"){
    const li = document.createElement('li')
    li.innerText = `${day}: ${time}`
    ul.appendChild(li)
}

hours.appendChild(ul);
board.appendChild(hours)

makeHours('Monday',"Closed")
makeHours('Tuesday')
makeHours('Wednesday')
makeHours('Thursday')
makeHours('Friday',"10am-7pm")
makeHours('Saturday',"11am-6pm")
makeHours('Sunday',"12am-5pm")


// location 
const location = document.createElement('div');
location.setAttribute('class','location')
location.innerHTML = "<h3 class='bold'>Location</h3>"
const address = document.createElement('p');
address.innerText='123 Woods St., Salmon City'
location.appendChild(address)

board.appendChild(location)








}
// to switch the board
function cleanBoard() {
    board.innerHTML=''
}

//showMenu 

function showMenu(){

function makeCard(name,description,p,i){    
    // menu card 
const card = document.createElement('div');
card.setAttribute('class','card')
// text section
const text = document.createElement('div')
text.classList.add('text-div')
const menuTitle  = document.createElement('h3')
menuTitle.classList.add('menuTitle')
menuTitle.innerText = `${name}`

const desc = document.createElement('p')
desc.classList.add('desc')
desc.innerText = `${description}`

const price= document.createElement('p')
price.innerText = `$ ${p}`;
price.classList.add('price')


text.appendChild(menuTitle)
text.appendChild(desc)
text.appendChild(price)

card.append(text)



//image section
const image = document.createElement('div');
image.classList.add('image-div')

const burger = new Image();
burger.src= i;
burger.classList.add('menuImage')
image.append(burger)

card.append(image)



board.appendChild(card);
}

makeCard('Classic Hamburger',"Most popular choice. Classic burger served with fries and a drink",'12.00',Burger1)
makeCard('Giant Burger','If you are hungry, go for it. Giant Burger comes with fries and a drink','16.00',Burger2)
makeCard('Salmon Burger','Deep-fried fresh salmon. Supplied locally. Comes with fries and a drink.','12.00',Burger3)
makeCard('Classic Coke','Best pair with a burger.','3.00',Drink)
}

//show contact
function showContact(){

    function makeCard(name,description,phone,i){    
        // contact card 
    const card = document.createElement('div');
    card.setAttribute('class','card')
    // text section
    const text = document.createElement('div')
    text.classList.add('text-div')
    const personName  = document.createElement('h3')
    personName.classList.add('personName')
    personName.innerText = `${name}`
    
    const desc = document.createElement('p')
    desc.classList.add('descPerson')
    desc.innerText = `${description}`

    const tel = document.createElement('p');
    tel.classList.add('tel')
    tel.innerText=`Tel:${phone}`
    
    text.append(personName)
    text.appendChild(desc)
    text.appendChild(tel)
    
    card.append(text)
    
    
    
    //image section
    const image = document.createElement('div');
    image.classList.add('image-div')
    
    const picture = new Image();
    picture.src= i;
    picture.classList.add('faceImage')
    image.append(picture)
    
    card.append(image)
    
    
    
    board.appendChild(card);
    }
    makeCard('Relakkuma',"Head chef of this restaurant",'123-456-789',Icon)
    makeCard('Sato',"Dishwasher. He made this website",'987-654-321',Man)



}




// default 
showContact();






export {
    showMain,
    cleanBoard
}