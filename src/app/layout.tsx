import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Vazirmatn({
    subsets: ["arabic"],
    display: "swap",
    variable: "--font-inter",
    weight: "400",
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
        <html lang="fa" dir="rtl" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
