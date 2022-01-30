var number = parseInt(prompt("Enter a number: "));

let factorialNumber = 1;
function factorial(number){
    for(let i=1;i<=number;i++){
      factorialNumber=factorialNumber*i;
    }
    return factorialNumber;
}

console.log(factorial(number));