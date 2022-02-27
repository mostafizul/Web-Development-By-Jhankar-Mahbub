function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function displayUsers(data){
  const ul = document.getElementById('users');
  for(const users of data){
    //console.log(users.name);
    const li = document.createElement('li');
    li.innerText = `${users.name}, ${users.email}`;
    ul.appendChild(li);
  }
}