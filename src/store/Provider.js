import { useReducer } from 'react';
import UserContext from './Context';
import reducer, { initState } from './reducer';

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
}

export default Provider;
