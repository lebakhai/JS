const init = {
    animals: ['cat', 'dog', 'tiger', 'bird', 'fish', 'matis', 'isopod'],
}

export default function reducer(state = init, action, ...args) {
    switch (action) {
        case "ADD":
            const newValues = args;
            return {
                ...state,
                animals: [...state.animals, newValues]
            }
        default:
            return state;
            break;
    }
}