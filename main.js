const imgs = document.querySelector('#imgs');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const img = document.querySelectorAll("img");

let counter = 0;
let interval = setInterval(start, 2000); 

 function start() {
    counter++;

    change();
 }

function change() {
    if(counter > img.length - 1) {
        counter = 0;
    } else if (counter < 0 ) {
         counter = img.length - 1;
    }
    imgs.style.transform = `translateX(${-counter * 500}px)`;
}

function stopInterval() {
    clearInterval(interval);
    interval = setInterval(start, 2000);
}

rightBtn.addEventListener('click', () => {
    counter++;

    change();
    stopInterval();
});

leftBtn.addEventListener('click', () => {
    counter--;

    change();
    stopInterval();
});

imgs.addEventListener('mouseenter', () => clearInterval(interval));
imgs.addEventListener('mouseleave', () => stopInterval());