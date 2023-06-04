import storage from "./utils/storage.js";

const init = {
    calcData: storage.get(),
    isEditing: false,
}

const actions = {
    save(state, args) {

    },
    editMode(state) {
        state.isEditing = true;
        state.calcData.operators = [[], []]
        storage.set(state.calcData.operators, state.calcData.result)
    },

} 

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args);
    return state;
}
