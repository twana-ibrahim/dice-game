function refresh(){
    window.location.reload();
}

var diceNum1 = Math.floor(Math.random() * 6) + 1;
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", "./images/dice"+ diceNum1 +".png");


var diceNum2 = Math.floor(Math.random() * 6) + 1;
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", "./images/dice"+ diceNum2 +".png");


var bigTitle = document.querySelector("#big-title");

if(diceNum1 > diceNum2){
    bigTitle.innerHTML = "🚩 Player 1 wins!"
}
else if(diceNum1 < diceNum2){
    bigTitle.innerHTML = "Player 2 wins! 🚩"
}
else{
    bigTitle.innerHTML = "Draw!"
}


