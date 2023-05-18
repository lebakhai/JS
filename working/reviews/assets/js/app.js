const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const apiUrl = './assets/db/db.json';

var usersData;

function getApiData(url) {
    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        userData = data.users;
    })
};

getApiData(apiUrl);
