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