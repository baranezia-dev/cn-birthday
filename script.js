/*
Everybody say Happy Birthday! This gift is a compound of various pens plus some other things I added
- gift 
https://codepen.io/ElaineXu/pen/EWvGWX
- neon 
https://codepen.io/markheggan/pen/LjrVYN
- fireworks 
https://codepen.io/chuongdang/pen/yzpDG
- moon 
https://codepen.io/agelber/pen/sjIKp
*/
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    // full screen dimensions
    cw = window.innerWidth,
    ch = window.innerHeight;

// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

window.onload = function () {
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];
    function init() {
        box.addEventListener("click", openBox, false);
    }
    function stepClass(step) {
        merrywrap.className = 'merrywrap';
        merrywrap.className = 'merrywrap step-' + step;
    }
    function openBox() {
        if (step === 1) {
            box.removeEventListener("click", openBox, false);
        }
        stepClass(step);
        if (step === 3) {
        }
        if (step === 4) {
            reveal();
            return;
        }
        setTimeout(openBox, stepMinutes[step - 1]);
        step++;
    }
    init();
}

function reveal() {
    document.querySelector('.merrywrap').style.backgroundColor = 'transparent';

    loop();

    var w, h;
    if (window.innerWidth >= 1000) {
        w = 295; h = 185;
    }
    else {
        w = 255; h = 155;
    }
}