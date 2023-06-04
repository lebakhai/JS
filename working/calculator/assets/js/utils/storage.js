const CALC_STORAGE_KEY = "CALC";

export default {
    get() {
        return JSON.parse(localStorage.getItem(CALC_STORAGE_KEY)) || {
            operators: [[], []],
            result: 0,
        }
    },
    set(operators, result) {
        localStorage.setItem(CALC_STORAGE_KEY, JSON.stringify({
            operators,
            result,
        }))
    }
}