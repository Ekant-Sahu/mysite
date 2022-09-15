

let intro = document.querySelector('.preloader');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1)*400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>
                setTimeout(()=>
                {
                    span.classList.remove('active');
                    span.classList.add('fade')
                },(idx + 1) * 50)

            )}, 2000);

            setTimeout(() => {
                intro.style.top = '-100vh'
            }, 2300);
    })
})

console.log("helllo world");
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
   /* setInterval(function(){
        if(lastScrolly=window.scrollY)
        {
            nav.classList.add("nav--hidden")
        }
    
    },2000)*/
})





/*
window.addEventListener("scroll",() => 
{
    if(window.scrollY!=0){nav.classList.add("nav--color")}
    else{nav.classList.remove("nav--color")}
})*/

// let i = document.querySelector(".work");
// i.src = "work.jpg"

// let image1 = document.querySelector("#image1");
// let image2 = document.querySelector("#image2");
// let images1 = ['node.jpg','unity.png','html.jpg'];
// let images2 = ['pen.png','work.jpg','photo_2022-09-10_18-49-45.jpg'];
// image1.src = "html.jpg";
// image2.src = "pen.png";

// setInterval(function(){
//     let random = Math.floor(Math.random()*3);
//     image1.src = images1[random];
//     image2.src= images2[random];
// },5000)


let btn = document.querySelector("#b");
btn.onclick = function()
{
    window.open("mailto:ekantsahu9179@gmail.com")
}

let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");


// addEventListener("resize", ()=>
// {
//     var width = window.innerWidth;
//     console.log(width);
//     if(width<668){
//         line1.innerText = ".."
//         line2.innerText = ".."
//     }
//     else{
//         line1.innerText = "....................";
//         line2.innerText = "....................";
//     }  
// })

// if(window.matchMedia("(min-width: 668px)").matches){
//     line1.innerText = "....................";
//     line2.innerText = "....................";
// }
// else{
//     line1.innerText = ".."
//     line2.innerText = ".."
    
// }



ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 400
});

ScrollReveal().reveal('.content h1',{delay: 400, origin: 'left'});
ScrollReveal().reveal('.design',{delay: 400, origin: 'top'});
ScrollReveal().reveal('p',{delay: 400, origin: 'right'});
ScrollReveal().reveal('h2',{delay: 400, origin: 'left'});
ScrollReveal().reveal('#program1',{delay: 400, origin: 'left'});
ScrollReveal().reveal('#program2',{delay: 400, origin: 'right'});






var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

