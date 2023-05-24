export default function html([first, ...strings], ...values) {
    return values.reduce((acc, currValue) => {
        return acc.concat(currValue, strings.shift());
    }, [first])
    .filter((x => x && (x !== true) || (x === 0)))
    .join('');
};

export function createStore() {

};