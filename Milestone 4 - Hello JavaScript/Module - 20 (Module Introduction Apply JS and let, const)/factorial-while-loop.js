var number = parseInt(prompt("Enter a number: "));
// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i<=number){
//         factorial = factorial*i;
//         i++
//      }
//      return factorial;
// }
// console.log(getFactorial(number));

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i>=1){
        factorial = factorial*i;
        i--;
     }
     return factorial;
}
console.log(getFactorial(number));

