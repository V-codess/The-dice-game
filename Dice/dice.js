// //to edit names
var pl1="Player 1";
var pl2="Player 2";

function editNames() {
    pl1 = prompt("Change Player1 name");
    pl2 = prompt("Change player2 name");

    document.querySelectorAll("h4")[0].innerHTML = pl1;
    document.querySelectorAll("h4")[1].innerHTML = pl2;
}

// To generate number
var ranNum1 = Math.floor(Math.random()*6)+1;
var imageSource = "images/dice" + ranNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var ranNum2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice"+ ranNum2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

function refresh(){
if(ranNum1 > ranNum2){
    document.querySelector("h2").innerHTML = pl1  + " won! 🎉";
}
else if(ranNum1 < ranNum2){
    document.querySelector("h2").innerHTML = pl2  + " won! 🎉";
}
else {
    document.querySelector("h2").innerHTML = "Draw! 🎈";
}
}

// start again
function load(){
    window.location.reload("Refresh");
}
