const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const sideBarOpen = document.querySelector(".sideBarOpen");
const sideBarClose = document.querySelector(".sideBarClose");

let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
        body.classList.add("dark");
    }

// dark mode
modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode" , "light-mode");
    } else {
        localStorage.setItem("mode" , "dark-mode");
    }
});

// side bar
sideBarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sideBarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});