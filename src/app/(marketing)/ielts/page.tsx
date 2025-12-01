// @ts-nocheck
import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features-scroll";
import { Footer } from "@/components/marketing/footers/footer-brand";
import { Header } from "@/components/marketing/header-navigation/header";
import { HeroSection } from "@/components/marketing/header-section/hero";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Team } from "@/components/marketing/team/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";
import { LearnBranch } from "@/types";
import { FooterMain } from "@/components/marketing/footers/footer-main";

export const metadata = {
    title: "آزمون آیلتس (IELTS) | ماک آیلتس رایگان، کلاس آنلاین و ثبت‌نام | تست‌هلپر",
    description:
        "آمادگی کامل آزمون آیلتس: ماک آیلتس آنلاین رایگان، بهترین کلاس آنلاین آیلتس، ثبت‌نام آزمون آیلتس، دوره‌های آیلتس تضمینی، نمرات 6.0 تا 7.5 و سطوح B2، C1، C2.",
    keywords: [
        "آیلتس",
        "آزمون آیلتس",
        "ماک آیلتس",
        "ielts",
        "test ielts",
        "ielts 6.5",
        "toefl ielts",
        "ielts 6.0",
        "ielts b2",
        "ielts c1",
        "ielts 5.5",
        "ielts 7.0",
        "ielts kurs online",
        "ثبت نام آزمون آیلتس",
        "ثبت نام آیلتس",
        "کلاس آیلتس",
        "ielts 5.0",
        "دوره آیلتس",
        "ielts 7.5",
        "ielts 4.5",
        "آزمون ماک آیلتس",
        "b2 ielts",
        "کلاس آنلاین آیلتس",
        "دوره های آیلتس",
        "کلاس های آیلتس",
        "ielts c2",
        "امتحان آیلتس",
        "هزینه آزمون آیلتس",
        "آیلتس چیست",
        "آزمون ماک آیلتس آنلاین",
        "کلاس آیلتس آنلاین",
        "بهترین کلاس آنلاین آیلتس",
        "کلاس زبان آیلتس",
        "کلاس خصوصی آیلتس",
        "آزمون آزمایشی آیلتس",
        "آزمون ماک آیلتس آنلاین رایگان",
        "دوره آنلاین آیلتس",
        "6.5 ielts",
        "ثبت نام آزمون ماک آیلتس",
        "ielts test c1",
        "آیلتس تضمینی",
        "آموزش آیلتس آنلاین",
        "آموزشگاه آیلتس",
        "4 مهارت ایلتس",
        "5 5 ielts",
        "5 ielts",
        "6 5 ielts",
        "b2 معادل آیلتس",
        "ماک رایگان آیلتس",
        "امتحان ماک آیلتس",
        "تست آیلتس",
        "آزمون زبان آیلتس",
        "pte یا ielts",
    ],
    alternates: {
        canonical: "/ielts",
    },
    openGraph: {
        title: "آزمون آیلتس (IELTS) | ماک آیلتس رایگان، کلاس آنلاین و ثبت‌نام | تست‌هلپر",
        description: "آمادگی کامل آزمون آیلتس: ماک آیلتس آنلاین رایگان، بهترین کلاس آنلاین آیلتس، دوره‌های تضمینی، نمرات 6.0 تا 7.5 و سطوح B2، C1، C2.",
        url: "/ielts",
        type: "website",
    },
};

// Enable static generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

const IeltsPage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        پلتفرم جامع آزمون آیلتس <br />
                        شامل آزمون‌های کمبریج، ماکار، اپ اسیستنت و...
                    </>
                }
                subtitle={<>آمادگی کامل برای آزمون IELTS | منابع، نکات طلایی و آزمون‌های شبیه‌سازی‌شده برای کسب Band Score بالا </>}
                href="./ielts/dashboard"
            />
            <Testimonial />
            <Features
                heading="امکانات ویژه آیلتس در تست‌هلپر"
                description="کامل‌ترین مجموعه منابع و ابزارها برای آمادگی آیلتس، با دقت بالای شبیه‌سازی آزمون و تحلیل هوش مصنوعی"
                customFeatures={[
                    {
                        title: "منابع کامل، معتبر و به‌روز",
                        description: "تمرین با معتبرترین منابع آیلتس برای کسب نمره 7 به بالا",
                        items: [
                            "آزمون‌های کمبریج (Cambridge) آکادمیک و جنرال",
                            "آزمون‌های واقعی آیلتس (Real IELTS) و آفیشال گاید (Official Cambridge Guide)",
                            "سؤالات ماکار 2025 (Makkar) و اپ اسیستنت (Speaking Assistant)",
                        ],
                        imageLightSrc: "/images/features/tests-light.png",
                        imageDarkSrc: "/images/features/tests-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "Reading و Listening با تحلیل هوش مصنوعی",
                        description: "تحلیل سؤالات با هوش مصنوعی به همراه ابزارها و امکانات کمک‌آموزشی برای یادگیری سریع‌تر و راحت‌تر",
                        items: [
                            "استفاده از 5 دیکشنری معتبر انگلیسی و فارسی (Cambridge, Longman و…) با یک کلیک",
                            "امکان گذاشتن Highlight و Note و تعریف تگ اختصاصی با دسترسی در یک لیست مجزا",
                            "ترنسکریپت کامل برای همه فایل‌های صوتی",
                        ],
                        imageLightSrc: "/images/features/ielts-reading-dictionary-light.png",
                        imageDarkSrc: "/images/features/ielts-reading-dictionary-light.png",
                        imagePosition: "left",
                    },
                    {
                        title: "Speaking و Writing رو متفاوت تمرین کن",
                        description: "تمرین اسپیکینگ و رایتینگ با فیدبک استاندارد و پرامپت اختصاصی برای تحلیل عمیق‌تر",
                        items: [
                            "تصحیح هوش مصنوعی بر اساس معیارهای رسمی آیلتس و تحلیل اشتباهات از نظر گرامری، ساختاری و بیان مطلب",
                            "دریافت ترنسکریپت (Transcript) لحظه‌ای اسپیکینگ",
                            "امکان تمرین اسپیکینگ با زمان آزاد",
                        ],
                        imageLightSrc: "/images/features/ielts-AI-light.png",
                        imageDarkSrc: "/images/features/ielts-AI-light.png",
                        imagePosition: "right",
                    },
                    {
                        title: "انجام آزمون‌ها در حالت Test و Practice",
                        description:
                            "حالت تست کاملاً مشابه آزمون واقعی و حالت پرکتیس برای تمرین آزاد جهت تحلیل سوالات، یادگیری بیشتر و استفاده از امکانات کمک آموزشی",
                        items: [
                            "تمرین یک مهارت خاص یا انتخاب بخش‌های دلخواه از یک آزمون",
                            "حالت Test با زمان‌بندی و محدودیت‌های رسمی و محیط کاملاً مشابه آزمون اصلی",
                            "دریافت نمره و گزارش کامل Reading و Listening بلافاصله بعد از آزمون",
                        ],
                        imageLightSrc: "/images/features/ielts-practice-light.png",
                        imageDarkSrc: "/images/features/ielts-practice-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "فلش‌کارت‌های اختصاصی آیلتس و مرور با لایتنر و تیک8",
                        description: "مجموعه کامل لغات ضروری و امکانات کمک‌آموزشی آیلتس، برای تمامی سطوح",
                        items: [
                            "لایتنر شخصی خودت رو با اضافه کردن کلمات دلخواه بساز",
                            "دسترسی به لیست و فایل کلمات لایتنر و تیک8",
                            "دسترسی به مجوعه لغات ضروری بارونز برای آیلتس، لغات کمبریج و مجموعه‌های مهم دیگر",
                        ],
                        imageLightSrc: "/images/features/ielts-flash-cards-light.png",
                        imageDarkSrc: "/images/features/ielts-flash-cards-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "ابزارهای پیشرفته برای Reading",
                        description: "ابزارهای تکمیلی برای افزایش سرعت خواندن، دقت و درک مطلب در ریدینگ",
                        items: ["تمرین Skimming و افزایش سرعت خواندن", "درخت گرامری متن برای درک ساختار جمله", "تحلیل تمام سؤالات با هوش مصنوعی"],
                        imageLightSrc: "/images/features/ielts-skimming-light.png",
                        imageDarkSrc: "/images/features/ielts-skimming-light.png",
                        imagePosition: "left",
                    },
                    {
                        title: "اپلیکیشن اختصاصی آیلتس",
                        description: "تمرین آیلتس بدون محدودیت زمان و مکان، بدون نیاز به اینترنت (مترو، اتوبوس، سفر و...)",
                        items: [
                            "دسترسی به امکانات سایت به صورت آفلاین",
                            "ساخت پلی‌لیست اختصاصی از فایل‌های آزمون‌ها و گوش دادن پشت‌سرهم",
                            "همگام‌سازی خودکار اپلیکیشن و سایت بعد از اتصال اینترنت",
                        ],
                        imageLightSrc: "/images/features/application-light.png",
                        imageDarkSrc: "/images/features/application-dark.png",
                        imagePosition: "right",
                    },
                ]}
            />
            <Team />
            <SocialProof />
            <FAQ
                customFaqs={[
                    {
                        question: "آیا می‌تونم با تست‌هلپر به نمره 7.5 آیلتس برسم؟",
                        answer: "بله! خیلی از کاربرا با تمرین منظم روی ماک‌های آیلتس، استفاده از تصحیح هوش مصنوعی و یادگیری لغات تخصصی، نمرات 6.5، 7.0 و حتی 7.5 آیلتس رو کسب کردن.",
                    },
                    {
                        question: "چطور می‌تونم امتحان ماک آیلتس رو شروع کنم؟",
                        answer: "کافیه ثبت‌نام کنی و به بخش آیلتس بری. آزمون‌های ماک آیلتس آنلاین رایگان در دسترس هستن و می‌تونی همین الان شروع کنی.",
                    },
                    {
                        question: "آیا نمره C1 یا B2 آیلتس رو پوشش می‌دید؟",
                        answer: "بله! آزمون‌ها سطوح مختلف از B2 تا C2 رو پوشش می‌دن. معمولاً نمرات 5.5 تا 6.5 در محدوده B2، نمرات 7.0 تا 8.0 در محدوده C1 و نمرات 8.5 به بالا معادل C2 در نظر گرفته می‌شن.",
                    },
                    {
                        question: "با تست‌هلپر میشه آزمون‌های دیگه رو هم تمرین کرد؟",
                        answer: "آره. تست‌هلپر آزمون‌های آیلتس، تافل و PTE رو پوشش می‌ده. اگه بین آیلتس و تافل و PTE تردید داری، می‌تونی هر کدوم رو امتحان کنی و ببینی کدوم بیشتر برات مناسبه. حتی اگه لازمه آزمون GRE هم بدی، می‌تونی رو تست‌هلپر حساب کنی.",
                    },
                    {
                        question: "4 مهارت آیلتس چطور تمرین می‌شن؟",
                        answer: "تمام 4 مهارت آیلتس (Reading، Writing، Listening، Speaking) در تست‌هلپر قابل تمرینه. برای هر مهارت سؤالات متنوع، پاسخ‌های تشریحی و تصحیح هوش مصنوعی داریم.",
                    },
                    {
                        question: "ماک آیلتس رایگان تست‌هلپر چقدر به آزمون اصلی نزدیکه؟",
                        answer: "ماک‌های آیلتس ما کاملاً شبیه‌سازی شده و از نظر محتوا، زمان‌بندی و سطح دشواری به آزمون اصلی آیلتس بسیار نزدیکه. کاربرا معمولاً تفاوت چندانی بین تمرین‌ها و آزمون واقعی گزارش نمی‌کنن.",
                    },
                    {
                        question: "کلاس آنلاین آیلتس دارید؟",
                        answer: "در حال حاضر کلاس آموزشی مستقیم نداریم، ولی منابع کامل شامل ماک آیلتس رایگان، نمونه رایتینگ و اسپیکینگ، تصحیح هوش مصنوعی و گروه‌های تلگرامی برای پشتیبانی در دسترس هست.",
                    },
                    {
                        question: "دوره‌های آیلتس تضمینی دارید؟",
                        answer: "ما منابع تضمینی برای آمادگی آیلتس داریم که شامل ماک‌های استاندارد، تصحیح حرفه‌ای و پشتیبانی مستمره. با تمرین منظم، احتمال موفقیتت خیلی بالا میره.",
                    },
                ]}
            />
            <CTA
                startHref="/ielts/dashboard"
                heading="برای نمره‌ آیلتس، فقط کافیه شروع کنی؛ مسیرش روشنه…"
                description="وقتشه یک قدم جدی برای رسیدن به نمره هدفت برداری."
            />
            <FooterMain type={LearnBranch.IELTS} />

            <Footer />
        </Fragment>
    );
};

export default IeltsPage;
