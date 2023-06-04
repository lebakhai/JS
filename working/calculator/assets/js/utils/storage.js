const CALC_STORAGE_KEY = "Calc";

export default {
    get() {
        return JSON.parse(localStorage.getItem(CALC_STORAGE_KEY)) || {
            operators: [[], []],
            result: 0,
        }
    },
    set(operators, result) {
        localStorage.setItem(CALC_STORAGE_KEY, {
            operators,
            result,
        })
    }
}