import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";
import UserContextProvider from "@/context/userContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Script from "next/script";

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
                <Script
                    id="goftino-widget"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html:
                            '!function(){var i="Nqpq88",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();',
                    }}
                />
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
