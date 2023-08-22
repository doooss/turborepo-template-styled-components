import useDevice from './useDevice';

describe('useDevice test', () => {
    it('useDevice should be defined', () => {
        expect(useDevice).toBeDefined();
    });

    it('default value is desktop', () => {
        expect(useDevice()).toBe('desktop');
    });

    it('useDevice should return "desktop" if window.innerWidth is greater than 768', () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 769,
        });
    });

    it('useDevice should return "mobile" if window.innerWidth is less than 768', () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 767,
        });

        expect(useDevice()).toBe('mobile');
    });
});
