import { useEffect, useRef } from 'react';

/**
 * 첫 마운트 시에는 실행하지 않는 useEffect
 *
 * */
const useDidMountEffect = (func: () => void, deps: any) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};

export default useDidMountEffect;
