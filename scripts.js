let mybutton = document.getElementById("scrollButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop)

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let dropdown = document.getElementById("dropClick");
let menu = document.getElementById("dropdown");

function dropdownclick(){
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
