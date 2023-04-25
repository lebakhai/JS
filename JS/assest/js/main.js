var boxElement = document.querySelector('.box');
var countElement = document.querySelector('.countHTML');
var countSuccesElement = document.querySelector('.countSuccesHTML');
var countJS = 0;
var countSuccesJS = 0;
function gacha() {
    var random = Math.floor(Math.random() * 100);
    if (random = (1)) {
        boxElement.innerHTML = '<p>có:</p><br><img id="img" src="https://static.vecteezy.com/system/resources/previews/000/421/448/original/weapons-icon-vector-illustration.jpg">';
        countSuccesJS += 1;
        countSuccesElement.textContent = `Success: ${countSuccesJS}`;
    } else {
        boxElement.textContent = 'Có cái dái';
        countJS += 1;
        countElement.textContent = `Fail: ${countJS}`;
    }   
};



