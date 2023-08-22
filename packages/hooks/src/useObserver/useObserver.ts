import { createRef, useEffect } from 'react';

interface UseObserverProps {
    onIntersect: () => void;
    root?: Document | null;
    rootMargin?: number;
    threshold?: number;
}
const useObserver = ({
    onIntersect,
    root = null,
    rootMargin = 3,
    threshold = 1.0,
}: UseObserverProps) => {
    const targetRef = createRef<HTMLDivElement>();

    useEffect(() => {
        let observer: IntersectionObserver;

        if (targetRef && targetRef.current) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        onIntersect();
                    }
                },
                {
                    root,
                    rootMargin: String(rootMargin) + 'px',
                    threshold,
                }
            );
            // 실제 Element가 들어있는 current 관측을 시작한다.
            observer.observe(targetRef.current);
        }
        return () => observer && observer.disconnect();
    }, [targetRef, rootMargin, threshold, onIntersect, root]);

    return { targetRef };
};

export default useObserver;
