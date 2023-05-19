// Variable declaration 
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const apiUrl = './assets/db/db.json'
var prevBtn = $('.card-main .prev.btn')
var randomBtn = $('.card-main .random.btn')
var nextBtn = $('.card-main .next.btn')
var cards = Array.from($$('.card'))
var usersData


// Api call
function getApiData(url) {
    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        userData = data.users
    })
}

getApiData(apiUrl)


// Card animation handler
function cardAnimation(dimension = Left, duration = 250) {
    cards.forEach((card, index) => {
        card.style.animation = `card${index + 1}Slide${dimension} ${duration}ms ease`
        setTimeout(() => {
            card.style.animation = ``            
        }, duration)
    })
}

prevBtn.onclick = (e) => {
    cardAnimation('Right', 250)
}

nextBtn.onclick = (e) => {
    cardAnimation('Left', 250)
}

randomBtn.onclick = (e) => {
    var random = Math.floor(Math.random() * 2)
    if (random === 0) {
        cardAnimation('Right', 250)
    } else {
        cardAnimation('Left', 250)
    }
}

