"use client";

import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { type Article, Simple03Horizontal, Simple03Vertical } from "@/components/marketing/blog/base-components/blog-cards";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const articles: Article[] = [
    {
        id: "article-1",
        title: "چهار سنتر خوب ایران برای آزمون آیلتس",
        summary: "در این مقاله به شما کمک می‌کنیم با توجه به چند ویژگی ساده اما مهم، سنتر مناسب خودتان را راحت‌تر انتخاب کنید.",
        href: "#",
        category: {
            name: "IELTS",
            href: "#",
        },
        thumbnailUrl: "https://testhelper.com/_next/image/?url=https%3A%2F%2Fstrapi-admin.testhelper.com%2Fuploads%2FFrame_26086401_53c31bbdab.jpg&w=3840&q=75",
        publishedAt: "20 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "سورنا زارع",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
        tags: [
            {
                name: "IELTS",
                color: "pink",
                href: "#",
            },
            {
                name: "Center",
                color: "indigo",
                href: "#",
            },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "استراتژی‌های پیشرفته برای موفقیت در آیلتس و تافل",
        summary: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        href: "#",
        category: {
            name: "Product",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",
        publishedAt: "19 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        tags: [
            {
                name: "IELTS",
                color: "blue-light",
                href: "#",
            },
            {
                name: "TOEFL",
                color: "pink",
                href: "#",
            },
            {
                name: "Strategies",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3",
        title: "نقشه راه جامع تافل برای تست‌هلپری‌ها",
        summary: "این مقاله به شما کمک می‌کند تا با استفاده از منابع و ابزارهای مناسب، برای آزمون تافل آماده شوید.",
        href: "#",
        category: {
            name: "Software Engineering",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
        publishedAt: "18 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        tags: [
            {
                name: "TOEFL",
                color: "success",
                href: "#",
            },
            {
                name: "Guide",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3.5",
        title: "راهنمای ثبت‌نام آیلتس – قدم‌ به ‌قدم 2025",
        summary: "این مقاله به شما کمک می‌کند تا با استفاده از منابع و ابزارهای مناسب، برای آزمون آیلتس آماده شوید.",
        href: "#",
        category: {
            name: "IELTS",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/blog/two-people.webp",
        publishedAt: "17 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/alec-whitten?fm=webp&q=80",
        },
        tags: [
            {
                name: "IELTS",
                color: "brand",
                href: "#",
            },
            {
                name: "Registration",
                color: "gray-blue",
                href: "#",
            },
        ],
    },
    {
        id: "article-4",
        title: "ریدینگ تافل از صفر تا صد",
        summary: "مدل‌های ذهنی عبارات ساده‌ای از فرآیندها یا روابط پیچیده هستند.",
        href: "#",
        category: {
            name: "TOEFL",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/smiling-girl-6.webp",
        publishedAt: "16 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
        tags: [
            {
                name: "TOEFL",
                color: "blue-light",
                href: "#",
            },
            {
                name: "Reading",
                color: "indigo",
                href: "#",
            },
            {
                name: "Guide",
                color: "orange",
                href: "#",
            },
        ],
    },
    {
        id: "article-5",
        title: "صفر تا صد رایتینگ تافل",
        summary: "این مقاله به شما کمک می‌کند تا با استفاده از منابع و ابزارهای مناسب، برای آزمون رایتینگ تافل آماده شوید.",
        href: "#",
        category: {
            name: "TOEFL",
            href: "#",
        },
        thumbnailUrl:
            "https://testhelper.com/_next/image/?url=https%3A%2F%2Fstrapi-admin.testhelper.com%2Fuploads%2FChat_GPT_Image_Aug_10_2025_06_49_54_PM_95f06e2438.png&w=2048&q=75",
        publishedAt: "15 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
        tags: [
            {
                name: "TOEFL",
                color: "brand",
                href: "#",
            },
            {
                name: "Writing",
                color: "indigo",
                href: "#",
            },
        ],
    },
    {
        id: "article-6",
        title: "راهنمای جامع تافل: هر آنچه باید بدانید",
        summary: "این مقاله به شما کمک می‌کند تا با استفاده از منابع و ابزارهای مناسب، برای آزمون تافل آماده شوید.",
        href: "#",
        category: {
            name: "Design",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/two-people.webp",
        publishedAt: "14 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
        },
        tags: [
            {
                name: "TOEFL",
                color: "brand",
                href: "#",
            },
            {
                name: "Guide",
                color: "indigo",
                href: "#",
            },
        ],
    },
    {
        id: "article-7",
        title: "اسپیکینگ تافل از صفر تا صد",
        summary: "این مقاله به شما کمک می‌کند تا با استفاده از منابع و ابزارهای مناسب، برای آزمون اسپیکینگ تافل آماده شوید.",
        href: "#",
        category: {
            name: "Product",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/workspace-5.webp",
        publishedAt: "13 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80",
        },
        tags: [
            {
                name: "TOEFL",
                color: "success",
                href: "#",
            },
            {
                name: "Speaking",
                color: "pink",
                href: "#",
            },
            {
                name: "Guide",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-8",
        title: "همه چیز در مورد آزمون آزمایشی تافل (ماک)",
        summary: "این مقاله به شما کمک می‌کند تا با استفاده از منابع و ابزارهای مناسب، برای آزمون آزمایشی تافل آماده شوید.",
        href: "#",
        category: {
            name: "Customer Success",
            href: "#",
        },
        thumbnailUrl: "https://www.untitledui.com/marketing/sythesize.webp",
        publishedAt: "12 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "تست‌هلپر",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80",
        },
        tags: [
            {
                name: "TOEFL",
                color: "brand",
                href: "#",
            },
            {
                name: "Mock Test",
                color: "gray-blue",
                href: "#",
            },
        ],
    },
];

export const Blog = () => {
    const isDesktop = useBreakpoint("lg");

    return (
        <div className="bg-primary">
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="mx-auto flex w-full flex-col items-center text-center">
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">بلاگ</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">مقالات بلاگ بهت کمک می‌کنن مسیر آماده‌سازی رو کوتاه‌تر و مطمئن‌تر طی کنی.</p>
                </div>
            </section>

            <section className="mx-auto flex w-full max-w-container flex-col gap-8 bg-primary px-4 pb-16 md:px-8 md:pb-24">
                <h2 className="text-xl font-semibold text-primary md:text-display-xs">مطالب اخیر</h2>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-8">
                    {articles.slice(0, 3).map((article, index) => (
                        <li key={article.id} className={cx(article.isFeatured ? "xl:row-span-2" : "xl:flex-row xl:gap-6", "flex flex-col gap-6 md:gap-8")}>
                            {index === 0 ? <Simple03Vertical article={article} /> : <Simple03Horizontal article={article} imageClassName="xl:w-80" />}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mx-auto flex w-full max-w-container flex-col gap-8 bg-primary px-4 pb-16 md:px-8 md:pb-24 lg:gap-16">
                <div className="flex flex-col gap-8">
                    <h2 className="text-xl font-semibold text-primary md:text-display-xs">تمام مطالب </h2>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.slice(3).map((article) => (
                            <li key={article.id} className={cx(!isDesktop && "nth-[n+4]:hidden")}>
                                <Simple03Vertical article={article} />
                            </li>
                        ))}
                    </ul>
                </div>
                <PaginationPageDefault rounded />
            </section>
        </div>
    );
};
