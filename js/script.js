function demoDisplay(selected) {
    if (selected == "l") {
        var element = document.getElementById("login-panel");
        element.style.display = "block";
        var element = document.getElementById("register-panel");
        element.style.display = "none";
    } else {
        var element = document.getElementById("login-panel");
        element.style.display = "none";
        var element = document.getElementById("register-panel");
        element.style.display = "block";
    }
}

function registration() {
    var emailpattern = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;  
    var useid = document.forms["registers"]["user"].value;
    var email = document.forms["registers"]["emailId"].value;
    var password = document.forms["registers"]["password"].value;
    var con_password = document.forms["registers"]["conpwd"].value;

    if (useid == "") {
        document.getElementById("validation_user").innerHTML = "Please enter the username";
        return false;
    }
    if (email == "") {

        document.getElementById("validation_email").innerHTML = "Please enter the email";
        return false;
    }else if(!emailpattern.test(email)) {
        document.getElementById("validation_email").innerHTML = "Please enter the vaild email";
        return false;
    }

    if (password == "") {
        document.getElementById("validation_pass").innerHTML = "Please enter the password";
        return false;
    }else if(!passw.test(password)) {
        document.getElementById("validation_pass").innerHTML = "Please enter the min 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
        return false;
    }
    if (con_password == "") {
        document.getElementById("validation_cpass").innerHTML = "Please enter the confrim password";
        return false;
    }
    if(con_password != password){
         document.getElementById("validation_cpass").innerHTML = "password is not matching";
        return false;
    }
    if (useid != "" && email != "" && password != "" && con_password != "") {

        alert("successfully registered");
        return true;
        alert();

    }
}
// function clear() {
//     document.forms["register"].reset();
// }