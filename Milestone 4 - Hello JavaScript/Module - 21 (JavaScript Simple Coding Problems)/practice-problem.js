var number1 = prompt("Enter first number: ");
var number2 = prompt("Enter second number: ");
var temp;
console.log("Number 1 before swap: "+number1);
console.log("Number 2 before swap: "+number2);

temp = number1;
number1 = number2;
number2 = temp;

console.log("Number 1 after swap: "+number1);
console.log("Number 2 after swap: "+temp);