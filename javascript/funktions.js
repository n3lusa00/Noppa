
function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var imageUrl = "kuvat/" + randomNumber + ".png";

    var diceImage = document.getElementById("dice").getElementsByTagName("img")[0];
    diceImage.src = imageUrl;
}


document.getElementById("dice").addEventListener("click", rollDice);
