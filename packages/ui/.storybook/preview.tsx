import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@ds/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
export const decorators = [
    (Story) => {
        return (
            <ThemeProvider theme={theme}>
                <div
                    style={{
                        width: '100vw',
                        maxWidth: '100%',
                        padding: '30px 0',
                        alignItems: 'center',
                    }}
                >
                    <Story />
                </div>
            </ThemeProvider>
        );
    },
];
