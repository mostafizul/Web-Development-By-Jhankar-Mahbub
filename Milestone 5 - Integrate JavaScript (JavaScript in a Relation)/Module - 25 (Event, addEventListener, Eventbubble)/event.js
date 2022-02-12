function makeRed() {
    document.body.style.backgroundColor = "red";
}

const blueButton = document.getElementById('blue-button');

blueButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    console.log(blueButton);
})

document.getElementById('green-button').addEventListener("click",function(){
    document.body.style.backgroundColor = "green";
})