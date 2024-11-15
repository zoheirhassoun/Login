const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

function myFunction() {
    /*    let email =document.getElementById("email").value;
        let password =document.getElementById("password_user").value;
        let website_email = "admin@gmail.com";
        let website_password = "admin123"
        if( email == website_email && password == website_password) {
            location.assign("https://zicostore.com");
            alert("Login Successfully ");
        } */
        
        var email = document.getElementById("email").value;
        var password = document.getElementById("password_user").value;
        if(email== "admin@gmail.com" && password=="admin123") {
           location.assign("https://zoheir.store");
         /*   window.open("glass.html"); */
            alert("Login Successfully ");
        } 
        else {
            alert("Invalid Information ");
            return;
        }
    } 