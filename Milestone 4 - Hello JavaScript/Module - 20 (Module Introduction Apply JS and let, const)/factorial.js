var number = parseInt(prompt("Enter a number: "));
var factorial = 1;
for (var i=1;i<=number;i++){
   factorial = factorial*i;
}
console.log("Factorial of " + number + " is " + factorial);