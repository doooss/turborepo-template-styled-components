import { useEffect, useState } from 'react';

const breakpoint = 768;

export type Device = 'mobile' | 'desktop';

const useDevice = (): Device => {
    const [device, setDevice] = useState<Device>('desktop');

    useEffect(() => {
        if (!window) return;

        const handleResize = () => {
            if (window.innerWidth < breakpoint) {
                setDevice('mobile');
            } else {
                setDevice('desktop');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return device;
};

export default useDevice;
