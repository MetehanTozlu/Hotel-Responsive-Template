const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');

icon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

var navElements = document.getElementsByClassName("me-5");

for(let i=0;i<navElements.length;i++){
    if(window.location.pathname.split("/").pop().split(".").shift() == navElements[i].getAttribute("href").split(".").shift()){
        console.log("object");
        navElements[i].classList.add("activeUrl");
    }

}

var timeoutId;

window.onscroll = function () {
    var navbar = document.querySelector('.navbar1');
    var scrolled = window.scrollY;
    
    if (scrolled > 0) {
        navbar.classList.add('scrolled'); "img/"
        document.querySelector('.logo img').src = "img/acik1.png";
    } else {
        navbar.classList.remove('scrolled');
        document.querySelector('.logo img').src = 'img/logo.svg';
    }
    // clearTimeout(timeoutId);

    // timeoutId = setTimeout(function () {
    // }, 10);

};
