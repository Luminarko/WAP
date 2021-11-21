function changeColor() {
    document.getElementsByClassName("btn1")[0].style.background = "#00FF00"
}
function changeColor1() {
    document.getElementsByClassName("btn1")[0].style.background = "#FF0000"
}
function changeColor2() {
    document.getElementsByClassName("btn2")[0].style.background = "#00FF00"
}
function changeColor3() {
    document.getElementsByClassName("btn2")[0].style.background = "#FF0000"
}
function changeColor4() {
    document.getElementsByClassName("btn3")[0].style.background = "#00FF00"
}
function changeColor5() {
    document.getElementsByClassName("btn3")[0].style.background = "#FF0000"
}

document.getElementsByClassName("btn1").onmouseover = function() {mousein()};
document.getElementsByClassName("btn1").onmouseout = function(){but1()};

function day(){
    document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
    document.getElementsByClassName("dole")[0].style.background = "#FF0000";
    document.getElementsByClassName("dole1")[0].style.background = "#FF0000";
    document.getElementsByClassName("dole2")[0].style.background = "#FF0000";
    document.getElementsByClassName("nahore")[0].style.background = "#FF0000";
    console.log("Day");
}
function night(){
    document.getElementsByTagName("body")[0].style.backgroundColor = "#808080";
    document.getElementsByClassName("dole")[0].style.background = "black";
    document.getElementsByClassName("dole1")[0].style.background = "black";
    document.getElementsByClassName("dole2")[0].style.background = "black";
    document.getElementsByClassName("nahore")[0].style.background = "black";
    console.log("Night");
}
