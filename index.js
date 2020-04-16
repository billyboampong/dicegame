// Random dice on refresh

var dice1 = document.querySelectorAll("img")[0]
var dice2 = document.querySelectorAll("img")[1]

var diceArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

var randomNumber1 = Math.floor(Math.random() * diceArray.length);
var randomNumber2 = Math.floor(Math.random() * diceArray.length);

dice1.setAttribute("src", diceArray[randomNumber1]);
dice2.setAttribute("src", diceArray[randomNumber2]);


// Winner banner dynamic text

var winnerBanner = document.querySelector(".winner");

if (randomNumber1 > randomNumber2){
winnerBanner.textContent = ("🏆 Player 1 is the winner!");
} else if (randomNumber2 > randomNumber1) {
  winnerBanner.textContent = ("Player 2 is the winner! 🏆");
} else {
winnerBanner.textContent = ("DRAW!");
}
