let burgir = document.getElementById("burger");
let menu = document.getElementById("menu");

function burgirXopen(){

    let top = document.getElementById("top");
    let mid = document.getElementById("mid");
    let bot = document.getElementById("bot");

    mid.style.left = "-3em";
    top.style.transform = 'rotate(45deg)';
    top.style.top = "2em";
    bot.style.transform = 'rotate(-45deg)';
    bot.style.top = "2em";
}

function burgirXclosed(){

    let top = document.getElementById("top");
    let mid = document.getElementById("mid");
    let bot = document.getElementById("bot");

    mid.style.left = "2em";
    top.style.transform = 'rotate(0deg)';
    top.style.top = "1em";  
    bot.style.transform = 'rotate(0deg)';
    bot.style.top = "3em";
}

function burgirOpen(){

    if(burgir.value == "YES"){
        burgir.value="NO";
        menu.style.top = "-500px";
        burgirXclosed();
    }
    else if(burgir.value=="NO"){
        burgir.value="YES";
        menu.style.top = "66px";
        burgirXopen();
    }
}