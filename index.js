const VALID_EMAIL ="admin@gmail.com";
const VALID_PASSWORD= "admin1234";
document.getElementById('LoginForm').addEventListener('submit', function(e)){
    e.preventDefault();
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;

    if(email === VALID_EMAIL && password === VALID_PASSWORD){
        alert('login success');
        window.location.href='admin.html':

    } else{
        alert('Wrong email or password');
    }


});