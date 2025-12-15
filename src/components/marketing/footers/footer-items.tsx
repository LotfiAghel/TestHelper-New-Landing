import { Badge } from "@/components/base/badges/badges";
import { Instagram, LinkedIn, Telegram, YouTube } from "@/components/foundations/social-icons";
import { LearnBranch } from "@/types";

export const footerSocials = [
    {
        label: "YouTube",
        icon: YouTube,
        href: "https://www.youtube.com/@TestHelperTV",
    },
    {
        label: "LinkedIn",
        icon: LinkedIn,
        href: "https://www.linkedin.com/company/testhelper/",
    },
    {
        label: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/testhelper_ir",
    },
    {
        label: "Telegram",
        icon: Telegram,
        href: "https://t.me/TestHelperLinks",
    },
];

export const footerNavList = [
    {
        label: "آزمون‌ها",
        items: [
            {
                label: "آزمون تافل",
                href: "/toefl",
            },
            {
                label: "آزمون آیلتس",
                href: "/ielts",
            },
            {
                label: "آزمون جی‌آرای",
                href: "/gre",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ms-1">
                        جدید
                    </Badge>
                ),
            },
        ],
    },
    {
        label: "تافل",
        items: [
            {
                label: "گروه تلگرام تافل",
                href: "https://t.me/TestHelperTOEFLgr",
            },
            {
                label: "کانال تلگرام تافل",
                href: "https://t.me/TestHelperTOEFL",
            },
            {
                type: 'download',
                branch: LearnBranch.TOEFL,
                label: "اپلیکیشن تافل",
                href: "./toefl/App",
            },
        ],
    },
    {
        label: "آیلتس",
        items: [
            {
                label: "گروه تلگرام آیلتس",
                href: "https://t.me/TestHelperIELTSgr",
            },
            {
                label: "کانال تلگرام آیلتس",
                href: "https://t.me/TestHelperIELTS",
            },
            {
                type: 'download',
                branch: LearnBranch.IELTS,
                label: "اپلیکیشن آیلتس",
                href: "./ielts/App",
            },
        ],
    },
    {
        label: "جی‌آرای",
        items: [
            {
                label: "گروه تلگرام جی‌آرای",
                href: "https://t.me/TestHelperGREgr",
            },
            {
                label: "کانال تلگرام جی‌آرای",
                href: "https://t.me/TestHelperGRE",
            },
            {
                type: 'download',
                branch: LearnBranch.GRE,
                label: "اپلیکیشن جی‌آرای",
                href: "./gre/App",
            },
        ],
    },
    // {
    //     label: "پی‌تی‌ای",
    //     items: [
    //         {
    //             label: "گروه تلگرام جی‌آرای",
    //             href: "https://t.me/TestHelperPTEgr",
    //         },
    //         {
    //             label: "کانال تلگرام جی‌آرای",
    //             href: "https://t.me/TestHelperPTE2",
    //         },
    //         {
    //             label: "اپلیکیشن جی‌آرای",
    //             href: "./pte/App",
    //         },
    //     ],
    // },
    // {
    //     label: "شبکه‌های اجتماعی",
    //     items: [
    //         {
    //             label: "یوتیوب",
    //             href: "#",
    //         },
    //         {
    //             label: "لینکدین",
    //             href: "#",
    //         },
    //         {
    //             label: "اینستاگرام",
    //             href: "#",
    //         },
    //     ],
    // },
    {
        label: "تست‌هلپر",
        items: [
            {
                label: "درباره ما",
                href: "/contact-us",
            },
            {
                label: "شرایط استفاده",
                href: "#",
            },
            {
                label: "حریم خصوصی",
                href: "#",
            },
        ],
    },
];
