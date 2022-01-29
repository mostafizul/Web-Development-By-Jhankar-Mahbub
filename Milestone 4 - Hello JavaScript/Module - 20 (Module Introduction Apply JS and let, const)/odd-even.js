var number = parseInt(prompt("Enter a number: "));

function OddEvenCheck(number) {
    if (number % 2 == 0) {
        console.log(number + " is a even number");
    } else {
        console.log(number + " is a odd number");
    }
}
OddEvenCheck(number);