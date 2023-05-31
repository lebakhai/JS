export default function html([first, ...strings], ...values) {
    return values.reduce((acc, curr) => {
        return acc.concat(curr, strings.shift())
    }, [first])
    .filter(x => x && x !==  true || x === 0)
    .join('');
};

export function createStore(reducer) {
    let state = reducer();
};