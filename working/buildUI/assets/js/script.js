import html from './core.js';

const animals = [
    'cat',
    'dog',
    'memay',
    'tiger',
];

const isSuccess = true;

const output = html`
    <h1>${0}</h1>
    <ul> 
        ${animals.map((animal, index) => {return `<li>${animal}</li>`}).join('')}
    </ul>
`;

console.log(output);