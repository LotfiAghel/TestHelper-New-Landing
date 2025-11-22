import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Instagram, LinkedIn, Telegram, YouTube } from "@/components/foundations/social-icons";

const footerSocials = [
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

const footerNavList = [
    {
        label: "آزمون‌ها",
        items: [
            {
                label: "آزمون تافل",
                href: "./toefl",
            },
            {
                label: "آزمون آیلتس",
                href: "./ielts",
            },
            {
                label: "آزمون جی‌آرای",
                href: "./gre",
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
                label: "اپلیکشن تافل",
                href: "https://testhelper.com/toefl/App",
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
                label: "اپلیکیشن آیلتس",
                href: "https://testhelper.com/ielts/App",
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
                label: "اپلیکیشن جی‌آرای",
                href: "https://testhelper.com/gre/App",
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
    //             href: "https://testhelper.com/pte/App",
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

export const Footer = () => {
    return (
        <footer className="py-8 shadow-xs sm:py-12 lg:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    {/* <UntitledLogo className="h-8 w-min" /> */}
                    <p className="text-md text-quaternary">© 2027 تمامی حقوق برای تست‌هلپر محفوظ است.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
