import storage from "./utils/storage.js";

const init = {
  calcData: storage.get(),
  isEditing: false,
};

const actions = {
  saveBoth(state, args) {
  },
  editMode(state) {
    state.isEditing = true;
    state.calcData.operators = [[], []];
    storage.set(state.calcData.operators, state.calcData.result);
  },
  endEdit(state, value) {
    state.calcData.operators = [
        /[/*+-]/.test(value) ? value.split(/[/*+-]/) : value, 
        /[/*+-]/.test(value) ? value.replace(/\d/g, "") : [],
    ];

    /[/*+-]/.test(value) ? undefined : state.calcData.result = value;

    state.isEditing = false;
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, args);
  return state;
}
