var ranNum1 = Math.floor(Math.random()*6)+1;
var imageSource = "images/dice" + ranNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var ranNum2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice"+ ranNum2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

function refresh(){
    window.location.reload("Refresh")
  }

if(ranNum1 > ranNum2){
    document.querySelector("h3").innerHTML = "Player 1 won! 🎉";
}
else if(ranNum1 < ranNum2){
    document.querySelector("h3").innerHTML = "Player 2 won! 🎉";
}
else {
    document.querySelector("h3").innerHTML = "Draw! 🎈";
}
