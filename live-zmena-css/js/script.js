let link = document.getElementById("styles");
console.log(link);
let button = document.getElementById("btn");
console.log(button);
button.innerHTML = "Gray";

function swapStyle() {;

    if(button.innerHTML == "Gray"){
        link.setAttribute("href", "css/orangeStyle.css");
        button.innerHTML = "Orange";
    }
    else if(button.innerHTML == "Orange"){
        link.setAttribute("href", "css/blueStyle.css");
        button.innerHTML = "Blue";
    }
    else if(button.innerHTML == "Blue"){
        link.setAttribute("href", "css/pinkStyle.css");
        button.innerHTML = "Pink";
    }
    else{
        link.setAttribute("href", "css/default.css");
        button.innerHTML = "Gray";
    }
}