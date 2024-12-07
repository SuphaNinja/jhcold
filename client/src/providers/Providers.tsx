import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { GoogleOAuthProvider } from '@react-oauth/google';

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
};

const queryClient = new QueryClient();

export default function Providers({ children }: ThemeProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
                <ThemeProvider 
                    attribute="class"
                    defaultTheme="system" 
                    enableSystem 
                    disableTransitionOnChange
                    >
                    {children} 
                </ThemeProvider>
            </GoogleOAuthProvider>
        </QueryClientProvider>
    )
}
