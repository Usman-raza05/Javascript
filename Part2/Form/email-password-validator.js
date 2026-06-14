let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();
        document.querySelector("#emailError").textContent = "";
        document.querySelector("#passwordError").textContent = "";


    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value)
    let passwordAns = passwordRegex.test(password.value)
    let isValid = true;
    if(!emailAns){
        document.querySelector("#emailError").textContent = "Email is incorrect..!";
        isValid = false;
    }
    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "Password is incorrect..!";
        isValid = false;
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent = "Everything is good"
    }
    else{
        document.querySelector("#resultMessage").textContent = ""
    }
})