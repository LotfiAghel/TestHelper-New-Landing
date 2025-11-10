import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";
import UserContextProvider from "@/context/userContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Vazirmatn({
    subsets: ["arabic"],
    display: "swap",
    variable: "--font-inter",
    weight: "400",
    preload: true,
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true,
});

export const metadata: Metadata = {
    title: "تست‌هلپر | پلتفرم آزمون‌های بین‌المللی زبان",
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <GoogleOAuthProvider
                clientId={
                    "706367811187-qj0fme26bcctej0egr9ho9vdu3sga4ct.apps.googleusercontent.com"
                }
            >
                <html lang="fa" dir="rtl" suppressHydrationWarning>
                    <head>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                    </head>
                    <body className={cx(inter.variable, "bg-primary antialiased")}>
                        <RouteProvider>
                            <Theme>{children}</Theme>
                        </RouteProvider>
                    </body>
                </html>
                <GoogleAnalytics gaId="G-6PK22LDCQY" />
            </GoogleOAuthProvider>
        </>
    );
}
