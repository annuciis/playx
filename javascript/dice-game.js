images = new Array();
images[0] = "images/dice1.png";
images[1] = "images/dice2.png";
images[2] = "images/dice3.png";
images[3] = "images/dice4.png";
images[4] = "images/dice5.png";
images[5] ="images/dice6.png";

function getDice(){
    // the player can play same round just once
    var textResult = document.getElementsByClassName("result-text")[0].textContent;

    if(textResult == "Draw!" || textResult == "Player 2 wins!" || textResult =="Player 1 wins!"){
        alert("Press try again!")

     // if it's the first round   

    } else {


var diceScore = Math.random();
diceScore = diceScore * 6;
diceScore = Math.floor(diceScore);

var dice = images[diceScore];

var diceScore1 = Math.random();
diceScore1 = diceScore1 * 6;
diceScore1 = Math.floor(diceScore1);

dice1 = images[diceScore1];


document.querySelectorAll(".dice-image")[0].setAttribute("src", dice);
document.querySelectorAll(".dice-image")[1].setAttribute("src", dice1);


// the text, which mention the winner

if(diceScore == diceScore1){
    document.querySelector(".result-text").innerHTML = "Draw!"
} else if(diceScore > diceScore1){
    document.querySelector(".result-text").innerHTML = "Player 1 wins!"
} else if(diceScore1 > diceScore){
    document.querySelector(".result-text").innerHTML = "Player 2 wins!"
}
    }
}


function clearResults(){
    document.getElementsByClassName("result-text")[0].innerHTML = "</br>";
}





