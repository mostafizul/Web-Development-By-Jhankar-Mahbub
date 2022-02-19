document.getElementById('add-border').addEventListener('click', function () {

    document.getElementById('border-container').style.border = "1px solid black";
})

document.getElementById('add-background').addEventListener('click',function(){
 const friendClass = document.getElementsByClassName('friend');

 for(const friends of friendClass){
    friends.style.backgroundColor = "red";
 }
})

document.getElementById('add-friend').addEventListener('click',function(){
    const borderContainer = document.getElementById('border-container');
    const createDiv = document.createElement('div');
    createDiv.classList.add('friend');

    createDiv.innerHTML = `<h3 class="friend-name">Friend-6</h3>
    <p>Atque, officiis?</p>`

    borderContainer.appendChild(createDiv);

})