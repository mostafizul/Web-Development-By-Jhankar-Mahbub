//Inch to feet
var inch = parseFloat(prompt("Enter Inch: "));
var mile = parseFloat(prompt("Enter Mile: "));

function inchTofeet(inch){
    var result = inch*0.1;
    return result;
}
function mileTokilometer(inch){
    var result = inch*1.6;
    return result;
}
console.log("Convert " +"("+inch+")"+" -> "+inchTofeet(inch).toPrecision(3));
console.log("Convert " +"("+mile+")"+" -> "+mileTokilometer(mile).toPrecision(3));