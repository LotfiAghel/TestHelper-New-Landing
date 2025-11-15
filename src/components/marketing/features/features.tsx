"use client";

import type { FC, HTMLAttributes } from "react";
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
// import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing/base-components/pricing-tier-card";
import { cx } from "@/utils/cx";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
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
            "تافل (TOEFL): شامل مجموعه‌های TPO، Neo-TOEFL، Zhenti",
            "دسترسی به پاسخ‌های تشریحی و نکات کلیدی",
            "پوشش کامل مهارت‌های شنیداری، گفتاری، خواندن و نوشتن",
        ],
        imageLightSrc: "/images/features/tests-light.png",
        imageDarkSrc: "/images/features/tests-dark.png",
        imagePosition: "right",
    },
    {
        title: "منابع معتبر و به‌روز",
        description: "بیش از ۵۰۰ آزمون واقعی و اصلی در محیط کاملاً مشابه آزمون اصلی برای تمرین دقیق.",
        items: ["بانک سؤال‌های واقعی و استاندارد", "به‌روزرسانی مستمر بر اساس تغییرات آزمون‌ها", "کیفیت و سطح دشواری نزدیک به آزمون واقعی"],
        imageLightSrc: "/images/features/exams-light.png",
        imageDarkSrc: "/images/features/exams-dark.png",
        imagePosition: "left",
    },
    {
        title: "سیستم‌های یادگیری لغات",
        description: "مرور زمان‌بندی شده با روش‌های لایتنر و تیک8 برای انتقال کلمات به حافظه بلندمدت.",
        items: ["مرور هوشمند با فاصله‌های زمانی", "لیست لغات اختصاصی هر آزمون", "پیگیری پیشرفت و نرخ یادگیری"],
        imageLightSrc: "/images/features/vocab-light.png",
        imageDarkSrc: "/images/features/vocab-dark.png",
        imagePosition: "right",
    },
    {
        title: "دسته‌بندی موضوعی",
        description: "امکان تمرین بر اساس موضوع و مهارت خاص، مثل متن‌ها یا فایل‌های صوتی مرتبط با «تاریخ هنر».",
        items: ["فیلتر بر اساس موضوع و مهارت", "تمرین هدفمند روی نقاط ضعف", "یافتن سریع محتوای مرتبط"],
        imageLightSrc: "/images/features/subject-light.png",
        imageDarkSrc: "/images/features/subject-dark.png",
        imagePosition: "left",
    },
    {
        title: "تصحیح هوش مصنوعی",
        description: "تصحیح سریع و دقیق رایتینگ و اسپیکینگ.",
        items: ["فیدبک فوری با پرامپت اختصاصی (ChatGPT-Pro)", "نمره‌دهی منطبق با معیارهای رسمی", "پیشنهاد بهبود واژگان و گرامر"],
        imageLightSrc: "/images/features/AI-light.png",
        imageDarkSrc: "/images/features/AI-dark.png",
        imagePosition: "right",
    },
    {
        title: "نمودارهای تحلیلی",
        description: "داشبورد و نمودارهای تحلیلی برای بررسی پیشرفت، نقاط ضعف و بهینه‌سازی یادگیری.",
        items: ["پیگیری روند نمرات در طول زمان", "تحلیل عملکرد در مهارت‌ها و موضوعات", "گزارش‌های آماده برای برنامه‌ریزی مطالعه"],
        imageLightSrc: "/images/features/charts-light.png",
        imageDarkSrc: "/images/features/charts-dark.png",
        imagePosition: "left",
    },
    {
        title: "فلش‌کارت‌های ضروری",
        description: "مجموعه لغات مهم هر آزمون و امکان یادگیری با روش‌های لایتنر و تیک8.",
        items: ["فلش‌کارت‌های از پیش آماده", "هماهنگ با سیستم‌های لایتنر و تیک8", "مرور سریع روی موبایل و دسکتاپ"],
        imageLightSrc: "/images/features/flash-cards-light.png",
        imageDarkSrc: "/images/features/flash-cards-dark.png",
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
                        <div className={`max-w-xl flex-1 self-center ${feature.imagePosition === "left" ? "lg:order-last" : ""}`}>
                            <h3 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">{feature.title}</h3>
                            <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">{feature.description}</p>
                            <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                                {feature.items.map((item) => (
                                    <CheckItemText key={item} size="md" iconStyle="outlined" color="primary" text={item} />
                                ))}
                            </ul>
                        </div>

                        <div className="relative w-full flex-1 lg:h-112">
                            <AlternateImageMockup className={feature.imagePosition === "right" ? "lg:right-0" : "lg:left-0"}>
                                <img
                                    alt={`${feature.title} mockup`}
                                    src={feature.imageLightSrc}
                                    className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                                />
                                <img
                                    alt={`${feature.title} mockup`}
                                    src={feature.imageDarkSrc}
                                    className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                                />
                            </AlternateImageMockup>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
