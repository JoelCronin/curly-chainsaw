
var homepage = document.getElementById("homepage");
var dashboard = document.getElementById("dashboard");
var login = document.getElementById("login");

function renderHomepage(){
    console.log("success")
    document.location.replace('/')
}

function renderSignIn(){
 console.log("signIn")
 document.location.replace("/signIn")
}

homepage.addEventListener("click", renderHomepage)
dashboard.addEventListener("click", renderSignIn)
login.addEventListener("click", renderSignIn)
