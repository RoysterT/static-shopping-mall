// var userNameText = document.getElementById("userNameText");
// var isLogin = document.getElementById("isLogin");
// var noLogin = document.getElementById("noLogin");
// var loginOrNot = false;
// //获取url传递的参数值
// function getQueryString(name) {
//     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) {
//         // return unescape(r[2]);
//         return decodeURI(r[2]); //解决中文乱码问题
//     }
//     else {
//         return 0;
//     }
// }
// var userName = getQueryString("userName");
// if (userName) {
//     userNameText.innerHTML = userName;
//     noLogin.style.display = "none";
//     isLogin.style.display = "block";
//     loginOrNot = true;
// }
// else {
//     noLogin.style.display = "block";
//     isLogin.style.display = "none";
//     loginOrNot = false;
// }
var loginStatus = sessionStorage.getItem("loginStatus");
var userNameText = document.getElementById("userNameText");
var isLogin = document.getElementById("isLogin");
var noLogin = document.getElementById("noLogin");
if(loginStatus=="true"){
    var userName = sessionStorage.getItem("user");
    userNameText.innerHTML = userName;
    noLogin.style.display = "none";
    isLogin.style.display = "block";
}
else{
    noLogin.style.display = "block";
    isLogin.style.display = "none";
}
userNameText.onclick = function(){
    sessionStorage.removeItem("loginStatus");
    sessionStorage.setItem("loginStatus",false);
}