import { useEffect, useState } from 'react';

type ReturnType = [boolean, (locked: boolean) => void];

function useLockedBody(initialLocked = false): ReturnType {
    const [locked, setLocked] = useState(initialLocked);

    // Do the side effect before render
    useEffect(() => {
        if (!locked) {
            return;
        }

        // Save initial body style
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;
        const originalScrollWidth = document.body.clientWidth;
        // Lock body scroll
        document.body.style.overflow = 'hidden';

        const afterScrollWidth = document.body.clientWidth;

        const scrollBarWidth = afterScrollWidth - originalScrollWidth;

        // Avoid width reflow
        if (scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth + originalPaddingRight}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;

            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [locked]);

    // Update state if initialValue changes
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);

    return [locked, setLocked];
}

export default useLockedBody;

// https://usehooks-ts.com/react-hook/use-locked-body
