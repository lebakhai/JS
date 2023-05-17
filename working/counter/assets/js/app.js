const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const numberElement = $('.number');
const btns = Array.from($$('.btn'));

var counterNumber = 0;

function getNumber(num) {
    counterNumber += num;
    numberElement.textContent = counterNumber;
}

function resetNumber() {
    counterNumber = 0;
    numberElement.textContent = counterNumber;
}

btns.forEach((btn, index) => {
    if (btn.classList.contains('decrease')) {
        btn.onclick = (e) => {
            getNumber(-1);
        }
    } 
    
    if (btn.classList.contains('reset')) {
        btn.onclick = (e) => {
            resetNumber();
        }   
    } 

    if (btn.classList.contains('increase')) {
        btn.onclick = (e) => {
            getNumber(1);
        }
    }
})
