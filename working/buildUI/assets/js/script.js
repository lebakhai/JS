import html from './core.js'

const games = ['Minecraft', 'LOL', 'Valorant', 'Stardew Valley'];

const output = html`
    <h1>${false}</h1>
    <ul>
        ${games.map(game => `<li>${game}</li>`).join('\n        ')} 
    </ul>
`;

console.log(output);