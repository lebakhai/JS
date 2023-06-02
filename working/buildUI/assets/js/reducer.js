const init = {
    games: ['Minecraft', 'LOL', 'Valorant', 'Stardew Valley'],
    cars: ['BWM', 'Porches']
}

export default function reducer(state = init, action, args) {
    switch (action) {
        case "ADD":
            const newGame = args;
            return {
                ...state,
                games: [...state.games, newGame]
            };
            break;
        default:
            return state;
            break;
        }
}