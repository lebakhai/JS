export default function logger(reducer, isEnabled = false) {
    return (prevState, action, args) => {
        const nextState = reducer(prevState, action, args);

        if(isEnabled) {
            console.group("[info]",action);
            console.log("prevState:", prevState);
            console.log("Action arguments: ", args)
            console.log("nextState:", nextState);
            console.groupEnd();
        }

        return nextState;
    }
}