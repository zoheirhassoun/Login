const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');



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
                  /*  location.assign("https://zicostore.com"); */
					window.open("welcome.html");
                    alert("Login Successfully ");
                } 
                else {
                    alert("Invalid Information ");
                    return;
                }
            } 