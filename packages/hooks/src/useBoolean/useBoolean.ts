import { useState } from 'react';

export const useBoolean = (initialState: boolean = false) => {
    const [state, setState] = useState(initialState);

    const setTrue = () => setState(true);

    const setFalse = () => setState(false);

    const toggle = () => setState(!state);

    return [state, { setTrue, setFalse, toggle }] as const;
};

export default useBoolean;
