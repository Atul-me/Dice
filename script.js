// import img1 from './images/1.png'
// import img2 from './images/2.png'  
// import img3 from './images/3.png'
// import img4 from './images/4.png'
// import img5 from './images/5.png'
// import img6 from './images/6.png'
// var src = [img1, img2, img3, img4, img5, img6];
var random = Math.floor(Math.random()*6)+1;
var random2 = "dice" + random + ".png";
var random3 = "images/" + random2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random3);


var random4 = Math.floor(Math.random()*6)+1;
var random5 = "images/dice" + random4 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", random5);

if(random > random4){
    document.querySelector('h1').innerHTML = 'Player 1 wins!'
}
else if(random < random4){  
    document.querySelector('h1').innerHTML = 'Player 2 wins!'
}
else{
    document.querySelector('h1').innerHTML = 'Draw!'
}
