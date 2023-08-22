'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from './StyledComponentsRegistry';

interface ThemeProviderProps {
    children?: ReactNode;
}

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const StyledThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default StyledThemeProvider;
