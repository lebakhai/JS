const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const numberElement = $('.number');
const btns = Array.from($$('.btn'));
const control = $('.control')

var counterNumber = 0;

function getNumber(num) {
    counterNumber += num;
    numberElement.textContent = counterNumber;
}

function resetNumber() {
    counterNumber = 0;
    numberElement.textContent = counterNumber;
}

function clickHandler(btn) {
    if (btn.classList.contains('decrease')) {
        getNumber(-1);
    } 
    
    if (btn.classList.contains('reset')) {
        resetNumber();
    } 

    if (btn.classList.contains('increase')) {
        getNumber(1);
    }
}

btns.forEach((btn) => {
    btn.onclick = (e) => {
        clickHandler(btn);
    }
})