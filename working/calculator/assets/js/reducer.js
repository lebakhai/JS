import storage from "./utils/storage.js";
import { operatorHtml } from "./utils/operator.js";

const init = {
  calcData: storage.get(),
  isEditing: false,
};

const actions = {
  editMode(state) {
    state.isEditing = true;
    state.calcData.operators = [[], []];
    storage.set(state.calcData.operators, state.calcData.result);
  },
  endEdit(state, args) {
    const value = args.slice();
    if (/[/*+-]/.test(value)) {
      state.calcData.operators = [
        value.join().split(/[/*+-]/),
        value.join('').replace(/\d/g, "").split(''),
      ];
      state.calcData.result = operatorHtml(state.calcData.operators).result;
    } else {
      state.calcData.operators = [value, []];
      state.calcData.result = value.join("");
    }

    storage.set(state.calcData.operators, state.calcData.result);
    state.isEditing = false;
  },
  exitEdit(state) {
    state.isEditing = false;
  },
  addValue(state) {
    this.editMode(state);

  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, args);
  return state;
}
