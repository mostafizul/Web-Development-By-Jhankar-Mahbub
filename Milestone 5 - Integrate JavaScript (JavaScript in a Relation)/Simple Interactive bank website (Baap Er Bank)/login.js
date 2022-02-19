document.getElementById('login-submit').addEventListener("click",function(){

    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passwordFiled = document.getElementById("user-password");
    const userPassword = passwordFiled.value;

    if(userEmail == 'siam@gamil.com' && userPassword == 'secret'){
        location.href = "banking.html";
    }else{
        alert("invalid user");
    }
})


