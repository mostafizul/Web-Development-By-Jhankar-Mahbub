
var winCount = 0;
var lostCount = 0;
for (var i = 0; i < 5; i++) {
    var number = parseInt(prompt("Enter Your Guess between 1 to 5: "));
    var randomNumber = Math.floor(Math.random() * 6 + 1);


    if (number == randomNumber) {
        console.log("You Have Won!");
        winCount++;
    } else {
        console.log("You Have Lost! Random Number was " + randomNumber);
        lostCount++;
    }
}
console.log("You have won: " + winCount);
console.log("You have lost: " + lostCount);