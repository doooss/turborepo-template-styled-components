'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import StyledComponentsRegistry from './StyledComponentsRegistry';

interface ThemeProviderProps {
    children?: ReactNode;
}

const StyledThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default StyledThemeProvider;
