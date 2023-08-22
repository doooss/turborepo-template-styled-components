import { StyledThemeProvider } from '@ds/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <StyledThemeProvider>{children}</StyledThemeProvider>
            </body>
        </html>
    );
}
