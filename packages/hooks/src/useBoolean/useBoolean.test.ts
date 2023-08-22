import { act, renderHook } from '@testing-library/react';

import useBoolean from './useBoolean';

describe('useBoolean test', () => {
    it('should be defined', () => {
        expect(useBoolean).toBeDefined();
    });

    it('should return a function to toggle the boolean value', () => {
        const { result } = renderHook(() => useBoolean());

        act(() => {
            result.current[1].toggle();
        });

        expect(result.current[0]).toBe(true);
    });

    it('should return a boolean value', () => {
        const { result } = renderHook(() => useBoolean());

        expect(result.current[0]).toBe(false);
    });

    it('should return a function to set the boolean value', () => {
        const { result } = renderHook(() => useBoolean());

        act(() => {
            result.current[1].setTrue();
        });

        expect(result.current[0]).toBe(true);
    });

    it('should return a function to set the boolean value', () => {
        const { result } = renderHook(() => useBoolean());

        act(() => {
            result.current[1].setFalse();
        });

        expect(result.current[0]).toBe(false);
    });
});
