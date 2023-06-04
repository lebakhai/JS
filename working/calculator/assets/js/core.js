export default function html([first, ...strings], ...values) {
    return values.reduce((acc, curr) =>
        acc.concat(curr, strings.shift)
        .filter(x => x && x !== true || x === 0)
        .join('')
    ,[first])
}

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for(const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        connect(selector = state => state) {
            return component => (props, ...args) =>
            component(Object.assign({}, selector(state), props, args))
        },
        dispatch(action, ...args) {
            state = reduce(state, action, args);
            render();
        }
    }
}