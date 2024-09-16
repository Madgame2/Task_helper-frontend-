const password = document.getElementById("password");
const confirm_password  = document.getElementById("confirm_password")

const submit =document.getElementById("submit")

function checking_passwods(){
    if(password.value!=confirm_password.value){
        submit.disabled = true
        error_massege("password must match","password_error")
    }else{
        submit.disabled = false
        delete_error_by_id("password_error")
    }
}


password.addEventListener("input",function(event){checking_passwods()});
confirm_password.addEventListener("input",function(event){checking_passwods()});