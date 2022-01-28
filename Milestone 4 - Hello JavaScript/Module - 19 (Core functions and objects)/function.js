var a = prompt(parseInt("Enter a number: "));
var b = prompt(parseInt("Enter b number: "));

function multiplication(a,b){
   var result = a*b;
   return result;
}
function division(a,b){
    var result = a/b;
    return result;
 }
console.log("Multiplication of Number a = " + a + " and b = " + b + " Result = "+ multiplication(a,b));
console.log("Division of Number a = " + a + " and b = " + b + " Result = "+ division(a,b));

