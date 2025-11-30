"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckItemText } from "@/components/marketing/pricing/base-components/pricing-tier-card";
import { FlowPattern } from "@/components/shared-assets/background-patterns/flow-pattern";

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

export const Features = ({
    heading = "امکانات ویژه تست‌هلپر",
    description = "تست‌هلپر مثل یه جعبه‌ابزار کامله؛ هرچی لازم داری اینجاست.",
    customFeatures = defaultFeatures,
}: FeaturesProps = {}) => {
    const features = customFeatures;
    const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
    const activeFeature = features[activeFeatureIndex];

    return (
        <section className="flex flex-col gap-8 overflow-visible py-8 sm:gap-8 sm:py-12 md:gap-12 md:py-16 lg:gap-16 lg:py-16">
            {/* Standard Heading Section (Unchanged) */}
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">{heading}</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">{description}</p>
                </div>
            </div>
            {/* End Standard Heading Section */}

            <div className="mx-auto w-full max-w-container flex-col px-4 md:px-8">
                <div className="grid grid-cols-1 gap-x-24 lg:grid-cols-2">
                    <div className="w-full">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="lg: flex h-screen max-h-[1024px] justify-start py-10 lg:py-20"
                                // Fading Text Animation
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: activeFeatureIndex === index ? 1 : 0.2 }}
                                transition={{ duration: 1 }}
                                // CRITICAL TRIGGER: Fire when the element crosses the center line
                                viewport={{ margin: "-50% 0px -50% 0px" }}
                                onViewportEnter={() => setActiveFeatureIndex(index)}
                            >
                                <div className="max-w-xl flex-1">
                                    <h2 className="text-display-xs font-semibold text-brand-600 md:text-display-sm">{feature.title}</h2>
                                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">{feature.description}</p>
                                    <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                                        {feature.items.map((item) => (
                                            // @ts-ignore
                                            <CheckItemText key={item} size="md" iconStyle="outlined" color="primary" text={item} />
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative hidden w-full flex-1 lg:block">
                        <div className="sticky top-44">
                            <div className="relative -ml-4 w-full bg-tertiary px-4 py-6 md:ml-0 md:h-140 md:w-auto md:rounded-3xl md:p-10 lg:h-100">
                                <div className="relative flex h-full w-full">
                                    <motion.img
                                        key={activeFeatureIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        alt={`${activeFeature.title} mockup`}
                                        src={activeFeature.imageLightSrc}
                                        className="z-10 size-full rounded-md object-cover object-top-left ring-4 ring-screen-mockup-border md:absolute dark:hidden"
                                        width={1200}
                                    />
                                    <Image
                                        alt={`${activeFeature.title} mockup`}
                                        src={activeFeature.imageDarkSrc}
                                        className="z-10 size-full rounded-md object-cover object-top-left ring-4 ring-screen-mockup-border not-dark:hidden md:absolute"
                                        width={1200}
                                        height={800}
                                        quality={85}
                                    />
                                </div>
                            </div>
                            {/* FlowPattern */}
                            <div className="absolute bottom-0 left-0 hidden -translate-x-1/3 md:block md:translate-y-12 lg:translate-y-1/4">
                                <FlowPattern className="text-fg-brand-secondary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --- END CORE STICKY SCROLL SECTION --- */}
        </section>
    );
};
