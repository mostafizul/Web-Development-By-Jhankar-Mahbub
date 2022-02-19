//problem - 1
//celcius to farenheit

/*
var celcius = parseFloat(prompt("Enter celcius: "));
var farenheit = parseFloat(prompt("Enter farenheit: "));

function celciusTofarenheit(celcius){
    var farenheit = ((celcius*(9/5))+32);
    return farenheit;
}
function farenheitTocelcius(farenheit){
    var celcius = ((farenheit-32)*(5/9));
    return celcius;
}

console.log(celciusTofarenheit(celcius));
console.log(farenheitTocelcius(farenheit));
*/

// problem - 2
//simple interest calculator (5 bochore koto interest)
/*
var principalAmount = parseFloat(prompt("Enter your Principal amount: "));
var interestRate = parseFloat(prompt("Enter your Interest Rate(%): "));
var time = parseInt(prompt("Enter your Interest Time (Years): "));

function interestCalculator(principalAmount,interestRate,time){
    var result = (principalAmount*(1+((interestRate/100)*time)));
    return result;
}
var interestAmount = interestCalculator(principalAmount,interestRate,time);
var interest = interestAmount-principalAmount;

console.log("Your Interest Amount: "+interest);
console.log("Your Total Interest: "+interestCalculator(principalAmount,interestRate,time));
*/


