var sideNav = document.querySelector("#sideNav");
var main = document.querySelector("#main")

function openBtn(){
    sideNav.style.width = "300px"
    main.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeBtn(){
    sideNav.style.width = "0px"
    main.style.backgroundColor = "white";
}