const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const sideBarOpen = document.querySelector(".sideBarOpen");
const sideBarClose = document.querySelector(".sideBarClose");
const inputName = document.querySelector("input#name");
const inputEmail = document.querySelector("input#email");
const inputMessage = document.querySelector("input#message");
const btn = document.querySelector("button")

let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
        body.classList.add("dark");
        inputName.classList.add("dark");
        inputEmail.classList.add("dark");
        inputMessage.classList.add("dark");
        btn.classList.add("dark");
    }

// dark mode
modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    inputName.classList.toggle("dark");
    inputEmail.classList.toggle("dark")
    inputMessage.classList.toggle("dark")
    btn.classList.toggle("dark")

    if (!body.classList.contains("dark") || !inputName.classList.contains("dark") || !inputEmail.classList.contains("dark") || !inputMessage.classList.contains("dark") || !btn.classList.contains("dark")) {
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