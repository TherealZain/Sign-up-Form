//how to make

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


const form = document.getElementById("form")
console.log(form)
if (form) {
form.addEventListener("submit", () => handleFormSubmit());
}


function onSubmit(token) {
    document.getElementById("form").submit();
  }


function handleFormSubmit(event){

    

    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
    let reconfirmPassword= document.getElementById("ConfirmPassword").value;
    let email = document.getElementById("email").value;
    let reconfirmEmail = document.getElementById("reconfirmEmail").value;
    let maleRadio = document.querySelector('input[value="male"]');
    const femaleRadio = document.querySelector('input[value="female"]');


    if(Username === ''){
        alert("Please enter a username");
        event.preventDefault();
    } else if(Username.length < 4){
        alert("Username is too short");
        event.preventDefault();
    }
    console.log("after user if");
    
    console.log("after length if");
    if(Password === ''){
        alert("Please enter a password");
        event.preventDefault();
    } else
    
    if(Enzoic.currentPasswordScore < Enzoic.PASSWORD_STRENGTH.Medium){
        alert("Password not strong enough");
        event.preventDefault();
    }
    console.log("after password score if");
    
    if(Password !== reconfirmPassword){
        alert("Passwords do not match");
        event.preventDefault();
    }
    console.log("after reconfirm if");
    if(reconfirmPassword !== Password){
        alert("Passwords do not match");
        event.preventDefault();
    }
    console.log("after reconfirm 2");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(email === ''){
        alert("Please enter a email");
        event.preventDefault();
    } else if(!regex.test(email)){
        alert("Invalid email address");
        event.preventDefault();
    } else if( email != reconfirmEmail){
        alert("Email do not match");
        event.preventDefault();
    }else

    console.log("after email check 1");
    if(reconfirmEmail !== email){
        alert("Email does not match");
        event.preventDefault();
    }
    console.log("after reconfirm check");
    /* if(!maleRadio.checked && !femaleRadio.checked){
        alert("Please select a gender");
    }
    */
    console.log("after gender check");
    const recaptchaResponse = grecaptcha.getResponse();
    if(recaptchaResponse === ''){
        alert("Please complete the captcha");
        event.preventDefault();
    }           
    console.log("do you see me");

    window.location.replace('https://www.google.com');

  



}




