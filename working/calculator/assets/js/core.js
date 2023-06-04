export default function html([first, ...strings], ...values) {
    return values.reduce((acc, curr) =>
        acc.concat(curr, strings.shift())
        ,[first])
        .filter(x => x && x !== true || x === 0)
        .join('')
}

export function operatorHtml([[firstNumber, ...numbers], [...operators]]) {
    if (operators.length > 0) {
        function convertToIcon(operators) {
            return operators.map(operator => {
                switch(operator) {
                    case "*":
                        return `<i class="fa-solid icon calc-icon fa-xmark"></i>`;
                    case "+":
                        return `<i class="fa-solid icon calc-icon fa-plus"></i>`;
                        case "-":
                        return `<i class="fa-solid icon calc-icon fa-minus"></i>`;
                    case "/":
                        return `<i class="fa-solid icon calc-icon fa-percent"></i>`;
                    default:
                        console.log('bug!')
                }
            })
        }
    
        const operatorIcons = convertToIcon(operators);
        
        return operatorIcons.reduce((acc, curr) =>
            acc.concat(`<span class="operator">${curr}</span>`, numbers.shift())
        , [firstNumber])
        .filter(x => x && x !== true || x === 0)
        .join('')
    } else {
        var output = [firstNumber, ...numbers].join('');
        return output;
    }
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
            state = reducer(state, action, args);
            render();
        }
    }
}