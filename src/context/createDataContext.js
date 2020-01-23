import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
    console.log(`DataContext - reducer: ${JSON.stringify(reducer)}`);
    console.log(`DataContext - actions: ${JSON.stringify(actions)}`);
    console.log(`DataContext - initialState: ${JSON.stringify(initialState)}`);

    const Context = React.createContext(initialState);

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        // for (let key in actions) {
        //     boundActions[key] = actions[key](dispatch);
        // }

        return (
            <Context.Provider value={{state, actions: boundActions}}>
                {children}
            </Context.Provider>
        );
    };

    return {Context, Provider};
};
