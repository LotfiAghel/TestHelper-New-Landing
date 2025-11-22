"use client";

import { type FC, Fragment, type HTMLAttributes, memo } from "react";
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
import Image from "next/image";
// import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing/base-components/pricing-tier-card";
import { FlowPattern } from "@/components/shared-assets/background-patterns/flow-pattern";
import { cx } from "@/utils/cx";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={cx("relative -ml-4 w-full bg-tertiary px-4 py-6 md:ml-0 md:h-140 md:w-auto md:rounded-3xl md:p-10 lg:h-100", props.className)}>
            <div className="relative flex h-full w-full">{props.children}</div>
        </div>
    );
};

interface Feature {
    title: string;
    description: string;
    items: string[];
    imageLightSrc: string;
    imageDarkSrc: string;
    imagePosition: "left" | "right";
}

interface FeaturesProps {
    heading?: string;
    description?: string;
    customFeatures?: Feature[];
}

const defaultFeatures: Feature[] = [
    {
        title: "پلتفرم جامع آزمون‌ها",
        description: "محیط اختصاصی برای تمرین تمامی آزمون‌های بین‌المللی زبان",
        items: [
            "آزمون تافل (TOEFL): شامل مجموعه‌های TPO، Neo-TOEFL، Zhenti",
            "آزمون آیلتس (IELTS): شامل نمونه‌سوالات Cambridge، Real-IELTS، Makkar، Speaking Assistant App، Official Cambridge Guide",
            "آزمون جی‌آرای (GRE): شامل سؤالات PowerPrep، Dalao، Crown، TC، RC و Manhattan",
        ],
        imageLightSrc: "/images/features/tests-light.png",
        imageDarkSrc: "/images/features/tests-dark.png",
        imagePosition: "left",
    },
    {
        title: "منابع معتبر و به‌روز",
        description: "بیش از 500 آزمون واقعی و شبیه‌سازی شده در محیطی کاملاً مشابه آزمون اصلی",
        items: ["بانک سؤال‌های واقعی و استاندارد", "به‌روزرسانی مداوم براساس آخرین تغییرات آزمون‌ها", "کیفیت و سطح دشواری نزدیک به آزمون اصلی"],
        imageLightSrc: "/images/features/exams-light.png",
        imageDarkSrc: "/images/features/exams-dark.png",
        imagePosition: "right",
    },
    {
        title: "سیستم‌های یادگیری لغات",
        description: "مرور زمان‌بندی شده با روش‌های لایتنر و تیک8 برای انتقال کلمات به حافظه بلندمدت.",
        items: ["مرور هوشمند و خودکار در فواصل زمانی معین", "امکان اضافه کردن تگ و دسته‌بندی اختصاصی توسط کاربر", "لیست لغات و فلش‌کارت‌های اختصاصی هر آزمون"],
        imageLightSrc: "/images/features/vocab-light.png",
        imageDarkSrc: "/images/features/vocab-dark.png",
        imagePosition: "left",
    },
    {
        title: "دسته‌بندی موضوعی",
        description: "تمرین دقیق و هدفمند بر اساس موضوع، مهارت یا سطح دشواری",
        items: [
            "تمرین بر اساس موضوع مثل «تاریخ هنر»، «باستان‌شناسی» و…",
            "تمرکز بر مهارت‌های خاص مثل اسپیکینگ یا ریدینگ",
            "جستجوی پیشرفته بین تمام متن‌ها و فایل‌های صوتی",
        ],
        imageLightSrc: "/images/features/subject-light.png",
        imageDarkSrc: "/images/features/subject-dark.png",
        imagePosition: "right",
    },
    {
        title: "تصحیح هوش مصنوعی",
        description: "تصحیح سریع و دقیق رایتینگ و اسپیکینگ با الگوریتم‌های پیشرفته",
        items: ["فیدبک فوری با پرامپت اختصاصی (ChatGPT-Pro)", "نمره‌دهی مطابق استانداردهای رسمی", "پیشنهادهای کاربردی برای بهبود گرامر و واژگان"],
        imageLightSrc: "/images/features/AI-light.png",
        imageDarkSrc: "/images/features/AI-dark.png",
        imagePosition: "left",
    },
    {
        title: "نمودارهای تحلیلی",
        description: "داشبورد و نمودارهای تحلیلی برای بررسی پیشرفت، نقاط ضعف و بهینه‌سازی یادگیری",
        items: ["پیگیری روند نمرات در طول زمان", "تحلیل عملکرد در مهارت‌ها و موضوعات", "گزارش‌های آماده برای برنامه‌ریزی مطالعه"],
        imageLightSrc: "/images/features/charts-light.png",
        imageDarkSrc: "/images/features/charts-dark.png",
        imagePosition: "right",
    },
    {
        title: "فلش‌کارت‌های ضروری",
        description: "مجموعه لغات مهم هر آزمون و امکان یادگیری با روش‌های لایتنر و تیک8",
        items: ["فلش‌کارت‌های آماده با قابلیت شخصی‌سازی", "سازگار با سیستم‌های لایتنر و تیک8", "مرور سریع در موبایل و دسکتاپ"],
        imageLightSrc: "/images/features/flash-cards-light.png",
        imageDarkSrc: "/images/features/flash-cards-dark.png",
        imagePosition: "left",
    },
    {
        title: "اپلیکیشن‌های تخصصی",
        description: "اپلیکیشن اختصاصی برای هر آزمون، با امکان استفاده کاملاً آفلاین",
        items: [
            "مناسب سفر، مسیر یا موقعیت‌های بدون اینترنت",
            "طراحی‌شده مخصوص نیازهای هر آزمون (تافل، آیلتس، جی‌آرای و…)",
            "امکان همگام‌سازی با حساب کاربری پس از اتصال اینترنت",
        ],
        imageLightSrc: "/images/features/application-light.png",
        imageDarkSrc: "/images/features/application-dark.png",
        imagePosition: "right",
    },
];

export const Features = ({ heading, description, customFeatures }: FeaturesProps = {}) => {
    const features = customFeatures || defaultFeatures;
    return (
        <section className="flex flex-col gap-8 overflow-hidden py-8 shadow-xs sm:gap-8 sm:py-12 md:gap-12 md:py-16 lg:gap-16 lg:py-16">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span> */}
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">{heading || "امکانات ویژه تست‌هلپر"}</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        {description || "تست‌هلپر مثل یه جعبه‌ابزار کامله؛ هرچی لازم داری اینجاست."}
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                {features.map((feature, index) => (
                    <div key={index} className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                        <div className={cx("max-w-xl flex-1 self-center", feature.imagePosition === "right" ? "lg:order-last" : "")}>
                            {/* <FeaturedIcon icon={MessageChatCircle} size="lg" color="brand" theme="light" /> */}
                            <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">{feature.title}</h2>
                            <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">{feature.description}</p>
                            <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                                {feature.items.map((item) => (
                                    <CheckItemText key={item} size="md" iconStyle="outlined" color="primary" text={item} />
                                ))}
                            </ul>
                        </div>

                        <div className="relative w-full flex-1 lg:h-112">
                            <AlternateImageMockup className={feature.imagePosition === "right" ? "lg:left-0" : "lg:right-0"}>
                                {/* Light mode image (hidden in dark mode) */}
                                <Image
                                    alt={`${feature.title} mockup`}
                                    src={feature.imageLightSrc}
                                    className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                                    width={1200}
                                    height={800}
                                    quality={85}
                                />
                                {/* Dark mode image (hidden in light mode) */}
                                <Image
                                    alt={`${feature.title} mockup`}
                                    src={feature.imageDarkSrc}
                                    className="z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                                    width={1200}
                                    height={800}
                                    quality={85}
                                />
                            </AlternateImageMockup>
                            <div
                                className={cx(
                                    "absolute bottom-0 hidden md:block",
                                    feature.imagePosition === "right"
                                        ? "right-0 translate-x-1/3 translate-y-1/4"
                                        : "left-0 -translate-x-1/3 md:translate-y-12 lg:translate-y-1/4",
                                )}
                            >
                                <FlowPattern className="text-fg-brand-secondary" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
