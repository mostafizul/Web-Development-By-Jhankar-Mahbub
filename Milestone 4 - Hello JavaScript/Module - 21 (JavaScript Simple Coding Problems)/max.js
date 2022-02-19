var number1 = prompt("Enter first number: ");
var number2 = prompt("Enter second number: ");
var number3 = prompt("Enter second number: ");

if(number1>number2 && number1>number3){
    console.log(number1 +" is greater than "+number2 + " and "+number3);
}else if(number2>number1 && number2>number3){
    console.log(number2 +" is greater than "+number1+ " and "+number3);
}else{
    console.log(number3 +" is greater than "+number1+ " and "+number2);
}

var max = Math.max(number1,number2,number3);
console.log(max);
