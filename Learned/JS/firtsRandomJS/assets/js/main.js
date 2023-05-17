var boxElement = document.querySelector('.box');
var btnElement = document.querySelector('.btn');
var countElement = document.querySelector('.countHTML');
var countSuccesElement = document.querySelector('.countSuccesHTML');
var countJS = 0;
var countSuccesJS = 0;
function gacha() {
    var random = Math.floor(Math.random() * 100);
    if (random <= 1) {
        boxElement.innerHTML 
        = '<p>có:</p><br><img id="img" src="https://cdn1.iconfinder.com/data/icons/operating-system-flat-1/30/linux-512.png">';
        countSuccesJS += 1;
        countSuccesElement.textContent = `Success: ${countSuccesJS}`;
    } else {
        boxElement.textContent = 'Có cái dái';
        countJS += 1;
        countElement.textContent = `Fail: ${countJS}`;
    }
};

function randomColor() {
    var color1 = Math.floor(Math.random() * 255);
    var color2 = Math.floor(Math.random() * 255);
    var color3 = Math.floor(Math.random() * 255);
    boxElement.style.color = `rgb(${color1}, ${color2}, ${color3})`;
};

btnElement.onclick = function() {
    gacha();
    randomColor();
};

// setInterval(randomColor, 1000);