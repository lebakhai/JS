const init = {
    operators: [[], []],
    result: 0,
}

const actions = {
    save(state, args) {
        
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args);
    return state;
}