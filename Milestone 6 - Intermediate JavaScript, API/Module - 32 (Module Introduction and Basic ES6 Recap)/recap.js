const bloodGroup = "o+"; //value kokhono change kora jabe na
let phone = "realme"; 
phone = "one plus";  //value reassign kora jai
console.log(phone);

//default paramater
function add(num1,num2=2){
    return num1+num2;
}
console.log(add(4));

//... array
function maxNumber(array = []){
    const max = Math.max(...array)
    return max;
}
console.log(maxNumber);

//template string
const myNotes = `My name is siam. My blood grpup is ${bloodGroup}`;
console.log(myNotes);

//arrow function
const square = x => x*x;
console.log(square(4))