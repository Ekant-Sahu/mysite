
console.log("helllo workasd");
const nav = document.querySelector(".nav");
let lastScrolly = window.scrollY;

window.addEventListener("scroll", () => 
{
    if(lastScrolly<window.scrollY)
    {
        nav.classList.add("nav--hidden")
    }
    else
    {
        nav.classList.remove("nav--hidden")
    }
    lastScrolly = window.scrollY;
})

window.addEventListener("scroll",() => 
{
    if(window.scrollY!=0){nav.classList.add("nav--color")}
    else{nav.classList.remove("nav--color")}
})

