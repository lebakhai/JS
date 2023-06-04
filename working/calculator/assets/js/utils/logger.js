export default function logger(reducer, isEnabled) {
    return (prevState, action, args) => {
        const nextState = reducer(prevState, action, args)

        console.group(`[info] ${action}`);
            console.log(`prevState: `, prevState);
            console.log(`args: `, args);
            console.log(`nextState: `, nextState);
        console.groupEnd();

        return nextState;
    };
};