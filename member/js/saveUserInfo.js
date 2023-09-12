window.onload=function(){
    var submitBtn = document.getElementsByClassName("login-button")[0];
    submitBtn.onclick = function(){
        var userName = document.getElementById("userName").value;
        sessionStorage.setItem("loginStatus",true);
        sessionStorage.setItem("user",userName);
        location.href = "/index.html";
    }
}