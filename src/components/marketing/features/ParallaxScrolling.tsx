import React, { useRef, useEffect, useState, Dispatch, SetStateAction, HTMLAttributes, FC } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowDown, Layers, Zap, Globe, Shield, Rocket, CheckCircle2, Code, Lightbulb, X, Loader2, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { FlowPattern } from '@/components/shared-assets/background-patterns/flow-pattern';
import { cx } from 'class-variance-authority';
import { CheckItemText } from '../pricing/base-components/pricing-tier-card';

const features = [
    {
        id: 0,
        title: "پلتفرم جامع آزمون‌ها",
        category: "Workflow",
        description: "محیط اختصاصی برای تمرین تمامی آزمون‌های بین‌المللی زبان",
        benefits: [
            'آزمون تافل (TOEFL): شامل مجموعه‌های TPO، Neo-TOEFL، Zhenti'
            , 'آزمون آیلتس (IELTS): شامل نمونه‌سوالات Cambridge، Real-IELTS، Makkar، Speaking Assistant App، Official Cambridge Guide'
            , 'آزمون جی‌آرای (GRE): شامل سؤالات PowerPrep، Dalao، Crown، TC، RC و Manhattan'
        ],
        image: "tests-feat-img",
        icon: <Layers className="w-6 h-6" />,
        stats: ["<50ms Latency", "Global Edge"]
    },
    {
        id: 1,
        title: "منابع معتبر و به‌روز",
        category: "Performance",
        description: "                            بیش از 500 آزمون واقعی و شبیه‌سازی شده در محیطی کاملاً مشابه آزمون اصلی",
        benefits: ['بانک سؤال‌های واقعی و استاندارد',
            'uبه‌روزرسانی مداوم براساس آخرین تغییرات آزمون‌ها',
            ',کیفیت و سطح دشواری نزدیک به آزمون اصلی'
        ],
        image: "exams-feat-img",
        icon: <Zap className="w-6 h-6" />,
        stats: ["<50ms Latency", "Global Edge"]
    },
    {
        id: 2,
        title: "سیستم‌های یادگیری لغات",
        category: "Scale",
        description: "مرور زمان‌بندی شده با روش‌های لایتنر و تیک8 برای انتقال کلمات به حافظه بلندمدت.",
        benefits: [
            'مرور هوشمند و خودکار در فواصل زمانی معین'
            , 'امکان اضافه کردن تگ و دسته‌بندی اختصاصی توسط کاربر'
            , 'لیست لغات و فلش‌کارت‌های اختصاصی هر آزمون'
        ],
        image: "vocab-feat-img",
        icon: <Globe className="w-6 h-6" />,
        stats: ["35+ Regions", "Auto-Scaling"]
    },
    {
        id: 3,
        title: "دسته‌بندی موضوعی",
        category: "Protection",
        description: "تمرین دقیق و هدفمند بر اساس موضوع، مهارت یا سطح دشواری",
        image: "subject-feat-img",
        icon: <Shield className="w-6 h-6" />,
        stats: ["SOC2 Type II", "E2E Encryption"],
        benefits: [
            'مرین بر اساس موضوع مثل «تاریخ هنر»، «باستان‌شناسی» و…',
            'تمرکز بر مهارت‌های خاص مثل اسپیکینگ یا ریدینگ',
            'جستجوی پیشرفته بین تمام متن‌ها و فایل‌های صوتی',
        ]
    },
    {
        id: 4,
        title: 'تصحیح هوش مصنوعی',
        category: "Protection",
        description: "تصحیح سریع و دقیق رایتینگ و اسپیکینگ با الگوریتم‌های پیشرفته",
        image: "ai-feat-img",
        benefits: [
            'فیدبک فوری با پرامپت اختصاصی (ChatGPT-Pro)'
            , 'نمره‌دهی مطابق استانداردهای رسمی'
            , 'پیشنهادهای کاربردی برای بهبود گرامر و واژگان'
        ],
        icon: <Shield className="w-6 h-6" />,
        stats: ["SOC2 Type II", "E2E Encryption"]
    },
    {
        id: 5,
        title: 'نمودارهای تحلیلی',
        category: "Protection",
        description: "داشبورد و نمودارهای تحلیلی برای بررسی پیشرفت، نقاط ضعف و بهینه‌سازی یادگیری.",
        image: "charts-feat-img",
        benefits: ["پیگیری روند نمرات در طول زمان", "تحلیل عملکرد در مهارت‌ها و موضوعات", "گزارش‌های آماده برای برنامه‌ریزی مطالعه"],
        icon: <Shield className="w-6 h-6" />,
        stats: ["SOC2 Type II", "E2E Encryption"]
    },
    {
        id: 6,
        title: 'فلش‌کارت‌های ضروری',
        category: "Protection",
        description: "مجموعه لغات مهم هر آزمون و امکان یادگیری با روش‌های لایتنر و تیک8",
        image: "flash-cards-feat-img",
        benefits: [
            'فلش‌کارت‌های آماده با قابلیت شخصی‌سازی',
            'سازگار با سیستم‌های لایتنر و تیک8',
            'مرور سریع در موبایل و دسکتاپ',
        ],
        icon: <Shield className="w-6 h-6" />,
        stats: ["SOC2 Type II", "E2E Encryption"]
    },
    {
        id: 7,
        title: 'اپلیکیشن‌های تخصصی',
        category: "Protection",
        description: "اپلیکیشن اختصاصی برای هر آزمون، با امکان استفاده کاملاً آفلاین",
        image: "app-feat-img",
        benefits: [
            'مناسب سفر، مسیر یا موقعیت‌های بدون اینترنت',
            'طراحی‌شده مخصوص نیازهای هر آزمون (تافل، آیلتس، جی‌آرای و…)',
            'امکان همگام‌سازی با حساب کاربری پس از اتصال اینترنت',
        ],
        icon: <Shield className="w-6 h-6" />,
        stats: ["SOC2 Type II", "E2E Encryption"]
    },
];

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={cx("relative -ml-4 w-full bg-tertiary px-4 py-6 md:ml-0 md:h-140 md:w-auto md:rounded-3xl md:p-10 lg:h-100", props.className)}>
            <div className="relative flex h-full w-full">{props.children}</div>
        </div>
    );
};


const StickyImageSidebar = ({ activeFeature }) => {
    return (
        <div className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden bg-transparent">
            <AnimatePresence mode="popLayout">
                {features.map((feature, index) => (
                    index === activeFeature && (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className="absolute inset-0 w-full h-full flex items-center"
                        >
                            <div className="relative w-full flex-1 lg:h-112">
                                <AlternateImageMockup className="lg:right-0">
                                    <motion.img
                                        alt={`Dashboard mockup showing application interface`}
                                        className={`${feature.image} z-10 size-full rounded-md object-cover object-left-top ring-4 ring-screen-mockup-border md:absolute`}
                                        width={1200}
                                        height={800}
                                    />
                                </AlternateImageMockup>
                                <div className="absolute bottom-0 left-0 hidden -translate-x-1/3 md:block md:translate-y-12 lg:translate-y-1/4">
                                    <FlowPattern className="text-fg-brand-secondary" />
                                </div>
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
};

const MobileImage = ({ src, alt }) => (
    <div className="md:hidden w-full h-64 rounded-xl overflow-hidden mt-8 relative shadow-lg">
        <img alt={alt} className={` ${src} w-full h-full object-cover`} />
    </div>
);



const TextSection = ({ feature, index, setActiveFeature, }: {
    feature: {
        id: number;
        title: string;
        category: string;
        description: string;
        benefits: string[];
        image: string;
        icon: React.JSX.Element;
        stats: string[];
    },
    index: number;
    setActiveFeature: Dispatch<SetStateAction<number>>;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveFeature(index);
        }
    }, [isInView, index, setActiveFeature]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        restDelta: 0.001
    });

    const opacity = useTransform(smoothProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
    const y = useTransform(smoothProgress, [0.2, 0.4, 0.6, 0.8], [50, 0, 0, -50]);

    return (
        <section
            ref={ref}
            className="flex flex-col justify-center py-12 md:py-20 md:min-h-screen max-w-2xl mx-auto md:mx-0 px-6 md:px-20 bg-transparent"
        >

            <motion.div
                style={{ opacity, y }}
                className="space-y-8"
            >

                <h2 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 leading-tight">
                    {feature.title}
                </h2>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                    {feature.description}
                </p>

                <ul className="mt-8 flex flex-col gap-4 ps-2 md:gap-5 md:ps-4">
                    {
                        feature.benefits.map((feat) => (
                            <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                        ))}
                </ul>

            </motion.div>
            <MobileImage src={feature.image} alt={feature.title} />
        </section>
    );
};



export default function ParallaxSrolling() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (

        <div className='flex flex-row'>
            <div className="md:w-1/2 w-full bg-transparent">
                {features.map((feature, index) => (
                    <TextSection
                        key={feature.id}
                        feature={feature}
                        index={index}
                        setActiveFeature={setActiveFeature}
                    />
                ))}
            </div>
            <StickyImageSidebar activeFeature={activeFeature} />
        </div>
    );
}