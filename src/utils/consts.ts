export const strapiBaseUrl = "https://strapi-admin.testhelper.com";
export const serverBaseUrl = process.env.NEXT_PUBLIC_API_SERVER || "/toefl-api";
export const defaultMetadata = {
    metadataBase: new URL("https://testhelper.com"),
    title: {
        default: "تست هلپر | آزمون های بین المللی زبان انگلیسی - IELTS, TOEFL, GRE, PTE",
        template: "%s | تست هلپر",
    },
    description: "تست هلپر پلتفرم جامع آمادگی برای آزمون های بین المللی زبان انگلیسی آیلتس، تافل، GRE و PTE با آزمون های آزمایشی کامل، منابع معتبر و به روز",
    keywords: [
        "آیلتس",
        "تافل",
        "PTE",
        "GRE",
        "آزمون بین المللی",
        "تست هلپر",
        "Test Helper",
        "آموزش زبان انگلیسی",
        "آزمون آزمایشی",
        "IELTS",
        "TOEFL",
        "English language test",
        "international language exam",
    ],

    authors: [{ name: "تست هلپر" }],
    creator: "تست هلپر",
    publisher: "تست هلپر",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    openGraph: {
        type: "website",
        locale: "fa_IR",
        url: "https://testhelper.com",
        siteName: "تست هلپر",
        title: "تست هلپر | آزمون های بین المللی زبان انگلیسی - IELTS, TOEFL, GRE, PTE",
        description: "پلتفرم جامع آمادگی برای آزمون های بین المللی زبان انگلیسی آیلتس، تافل، GRE و PTE با آزمون های آزمایشی کامل، منابع معتبر و به روز",
        images: [
            {
                url: "/lassets/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "تست هلپر - همیار آزمون های بین المللی",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "تست هلپر | آزمون های بین المللی زبان انگلیسی",
        description: "پلتفرم جامع آمادگی برای آزمون های بین المللی زبان انگلیسی آیلتس، تافل، GRE و PTE",
        images: ["/lassets/images/twitter-image.jpg"],
        creator: "@testhelper",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    verification: {
        google: "G-X12ABC3DEF4",
        yandex: "yandex-verification-code",
    },

    alternates: {
        canonical: "https://testhelper.com",
        languages: {
            "fa-IR": "https://testhelper.com",
            "en-US": "https://testhelper.com/en",
        },
    },

    icons: {
        icon: [{ url: "/favicon.ico" }],
        apple: [{ url: "/apple-touch-icon.png" }],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
            },
        ],
    },
    manifest: "/site.webmanifest",
};

export const USER_PUBLIC_FILE_BASE_URL = `${serverBaseUrl}/api/files2/DownloadUserPublicFile/`;

export const getUserPublicFileUrl = (userId: string, fileName: string) => {
    return `${USER_PUBLIC_FILE_BASE_URL}${userId}/${fileName}`;
};
