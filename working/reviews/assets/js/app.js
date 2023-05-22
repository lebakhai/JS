// Variable declaration 
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const apiUrl = './assets/db/db.json';
var prevBtn = $('.card-main .prev.btn');
var randomBtn = $('.card-main .random.btn');
var nextBtn = $('.card-main .next.btn');
var cards = Array.from($$('.card'));
var loaderElement = $('.loader');
var apiData;
var usersData;
var currentIndex;
var prevIndex;
var nextIndex;


// Api call
function getApiData(url) {
    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        apiData = data;
        usersData = data.users
        currentIndex = data.currentIndex
    })
};

getApiData(apiUrl);



function loadCurrentCards(duration) {
    if (currentIndex - 1 < 0) {
        prevIndex = usersData.length - 1;
    } else {
        prevIndex = currentIndex - 1;
    };

    if (currentIndex + 1 < usersData.length - 2) {
        nextIndex = currentIndex + 1;
    } else {
        nextIndex = 0;
    };

    setTimeout(() => {
        cards[0].querySelector('img').src = usersData[prevIndex].image;
        cards[1].querySelector('img').src =  usersData[currentIndex].image;
        cards[2].querySelector('img').src =  usersData[nextIndex].image;

        cards[0].querySelector('.personal-info .name').textContent = usersData[prevIndex].name;
        cards[1].querySelector('.personal-info .name').textContent = usersData[currentIndex].name;
        cards[2].querySelector('.personal-info .name').textContent = usersData[nextIndex].name;

        cards[0].querySelector('.personal-info .job').textContent = usersData[prevIndex].job;
        cards[1].querySelector('.personal-info .job').textContent = usersData[currentIndex].job;
        cards[2].querySelector('.personal-info .job').textContent = usersData[nextIndex].job;

        cards[0].querySelector('.dsc').textContent = usersData[prevIndex].description;
        cards[1].querySelector('.dsc').textContent = usersData[currentIndex].description;
        cards[2].querySelector('.dsc').textContent = usersData[nextIndex].description;
    }, duration);
};



// Card animation handler
function cardAnimation(dimension = Left, duration = 250) {
    cards.forEach((card, index) => {
        card.style.animation = `card${index + 1}Slide${dimension} ${duration}ms ease`;
        setTimeout(() => {
            card.style.animation = ``;
        }, duration);
    });
};

prevBtn.onclick = (e) => {
    cardAnimation('Right', 250);
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex =  usersData.length - 1;
    }
    loadCurrentCards(250);
}

nextBtn.onclick = (e) => {
    cardAnimation('Left', 250);
    if (currentIndex <  usersData.length - 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    loadCurrentCards(250)
}

randomBtn.onclick = (e) => {
    var random = Math.floor(Math.random() * 2);
    if (random === 0) {
        cardAnimation('Right', 250);
    } else {
        cardAnimation('Left', 250);
    };
    currentIndex = Math.floor(Math.random() * usersData.length);
    loadCurrentCards();
};

function loopAnimation(method = 'Right' ,duration = 250, pos = 13) {
    var i = 0;
    var loopAni = setInterval(() => {
        if (i >= pos + 1) {
            clearInterval(loopAni);
        } else {
            cardAnimation(method, duration);
            // console.log(i);
        }
        i++;
    }, duration + 25);
};


// Loader function
function loader() {
    loaderElement.style.display = 'flex';
    var intervalLoader = setInterval(() => {
        if (apiData) {
            clearInterval(intervalLoader);
            start();
        }
    },1)
};



// Start handler
function start() {
    if (!apiData) {
        loader();
    } else {
        loaderElement.style.display = 'none';
    }
    loadCurrentCards();
};

start();