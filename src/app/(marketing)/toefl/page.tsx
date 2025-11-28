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

export const metadata = {
    title: "آزمون تافل (TOEFL) | ماک تافل رایگان، TPO و هوم ادیشن | تست‌هلپر",
    description:
        "آمادگی کامل آزمون تافل (TOEFL): TPO تافل، ماک تافل رایگان، تافل هوم ادیشن، ثبت‌نام، خرید ووچر تافل، TOEFL Listening و Speaking، منابع و کلاس تافل.",
    keywords: [
        "تافل",
        "آزمون تافل",
        "ماک تافل",
        "toefl",
        "tpo تافل",
        "ازمون تافل",
        "آزمون ماک تافل",
        "تست تافل",
        "ماک تافل خاتم",
        "آزمون آزمایشی تافل آنلاین رایگان",
        "neo toefl test",
        "آزمون ماک تافل رایگان",
        "تافل ۳",
        "ماک رایگان تافل",
        "toefl itp",
        "toefl online",
        "toefl ielts",
        "toefl kurs",
        "ثبت نام تافل",
        "toeflbank",
        "toefl listening",
        "toefl 2023",
        "duolingo toefl",
        "toefl b2",
        "ثبت نام آزمون تافل",
        "speaking toefl",
        "هزینه آزمون تافل",
        "toefl kurs online",
        "toefl essential",
        "toefl c1",
        "toefl ibt 80",
        "toefl 100",
        "toefltest",
        "cambridge toefl",
        "قیمت آزمون تافل",
        "ثبت نام تافل هوم ادیشن",
        "قیمت تافل",
        "هزینه تافل",
        "خرید ووچر تافل",
        "تافل هوم ادیشن",
        "قیمت ووچر تافل",
        "هزینه تافل هوم ادیشن",
        "برنامه زبان انگلیسی",
        "هزینه گرفتن مدرک تافل",
        "هزینه امتحان تافل",
        "هزینه آزمون تافل هوم ادیشن",
        "کلاس تافل",
        "نحوه ثبت نام تافل",
        "c2 toefl",
        "cae toefl",
        "itp ibt",
        "itu toefl",
        "on hold در تافل",
        "speaking تافل",
        "امتحان تافل",
        "toefl ibt",
        "آموزش تافل",
        "منابع تافل",
    ],
    alternates: {
        canonical: "/toefl",
    },
    openGraph: {
        title: "آزمون تافل (TOEFL) | ماک تافل رایگان، TPO و هوم ادیشن | تست‌هلپر",
        description: "آمادگی کامل آزمون تافل: TPO تافل، ماک تافل رایگان، تافل هوم ادیشن، خرید ووچر، TOEFL Listening و Speaking، منابع و کلاس تافل.",
        url: "/toefl",
        type: "website",
    },
};

// Enable static generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export default function ToeflPage() {
    return (
        <Fragment>
            <Header />

            <HeroSection
                title={
                    <>
                        کامل‌ترین پلتفرم آزمون تافل
                        <br />
                        با نمونه سؤالات Neo, Zhenti, TPO و TOEFL2026
                    </>
                }
                subtitle={
                    <>
                        صدها نمونه سؤال واقعی و آزمون شبیه‌ساز (Mock Test) در محیطی مشابه تافل اصلی، با تحلیل پاسخ‌ها، نکات آموزشی و راهنمای کسب نمره بالا در
                        مسیر اپلای و تحصیل بین‌المللی
                    </>
                }
                href="./toefl/dashboard"
            />
            <Testimonial />
            <Features
                heading="امکانات ویژه تافل در تست‌هلپر"
                description="آزمون‌های تافل 2026، TPO، نئو (Neo)، ماک و تمرین Listening و Speaking با هوش مصنوعی"
                customFeatures={[
                    {
                        title: "منابع کامل، معتبر و به‌روز",
                        description: "تمرین با معتبرترین منابع تافل با به‌روزرسانی مستمر",
                        items: ["بیش از ۱۷۰ آزمون واقعی Neo-TOEFL (نئو)", "تمام 75 آزمون TPO به صورت رایگان", "نمونه‌سؤالات تافل 2026"],
                        imageLightSrc: "/images/features/exams-light.png",
                        imageDarkSrc: "/images/features/exams-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "Reading و Listening با تحلیل هوشمند",
                        description: "پاسخنامه و آنالیز هوش مصنوعی برای همه سؤالات و همچنین ابزارهای کمک‌آموزشی برای یادگیری سریع‌تر و راحت‌تر",
                        items: [
                            "دسترس آنی به 5 دیکشنری معتبر انگلیسی و فارسی (Cambridge, Longman و…)",
                            "امکان گذاشتن Highlight و Note و تعریف تگ اختصاصی با دسترسی در یک لیست مجزا",
                            "شناسایی تیپ سؤال و الگوی اشتباهات",
                        ],
                        imageLightSrc: "/images/features/toefl-reading-dictionary-light.png",
                        imageDarkSrc: "/images/features/toefl-reading-dictionary-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "Speaking و Writing حرفه‌ای",
                        description: "تمرین اسپیکینگ و رایتینگ با نمونه‌جواب‌های نمره کامل و فیدبک تخصصی هوش مصنوعی",
                        items: [
                            "تصحیح هوش مصنوعی مطابق Rubric رسمی ETS و تحلیل اشتباهات از نظر گرامری، ساختاری و بیان مطلب",
                            "دریافت ترنسکریپت (Transcript) لحظه‌ای اسپیکینگ",
                            "امکان تمرین اسپیکینگ با زمان آزاد + حالت نویز برای شبیه‌سازی سالن آزمون",
                        ],
                        imageLightSrc: "/images/features/toefl-speaking-sample-light.png",
                        imageDarkSrc: "/images/features/toefl-speaking-sample-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "انجام آزمون‌ها در حالت Test واقعی (کاملاً مشابه آزمون اصلی) و همچنین Practice",
                        description: "دو حالت استاندارد برای تمرین با شرایط آزمون واقعی یا به صورت Practice برای یادگیری و استفاده از امکانات کمک آموزشی",
                        items: [
                            "تمرین یک مهارت خاص یا انتخاب بخش‌های دلخواه از یک آزمون",
                            "حالت Test با محیط کاملاً مشابه آزمون اصلی",
                            "دریافت نمره و گزارش کامل Reading و Listening بلافاصله بعد از آزمون",
                        ],
                        imageLightSrc: "/images/features/toefl-practice-light.png",
                        imageDarkSrc: "/images/features/toefl-practice-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "فلش‌کارت‌های اختصاصی تافل و مرور با لایتنر و تیک8",
                        description: "مجموعه کامل لغات ضروری و امکانات کمک‌آموزشی برای کسب نمره بالا",
                        items: [
                            "امکان اضافه کردن کلمات دلخواه و ساخت لایتنر شخصی",
                            "دسترسی به لیست و فایل کلمات لایتنر و تیک8",
                            "دسترسی به مجوعه 1212 واژه مورد نیاز برای آزمون تافل، لغات موضوع‌بندی‌شده و مجموعه‌های مهم دیگر",
                        ],
                        imageLightSrc: "/images/features/flash-cards-light.png",
                        imageDarkSrc: "/images/features/flash-cards-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "نمودارهای تحلیلی",
                        description: "تحلیل کامل عملکرد و پیگیری روند پیشرفت",
                        items: ["پیگیری روند نمرات در طول زمان", "مقایسه نمره‌ ریدینگ و لیسنینگ با سایر کاربران", "نمودار درصد درستی پاسخ‌ها بر اساس موضوع"],
                        imageLightSrc: "/images/features/toefl-charts-light.png",
                        imageDarkSrc: "/images/features/toefl-charts-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "اپلیکیشن اختصاصی تافل",
                        description: "تمرین تافل بدون محدودیت زمان و مکان، بدون نیاز به اینترنت (مترو، اتوبوس، سفر و...)",
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
                        question: "بهترین منابع برای آمادگی تافل چیه؟",
                        answer: "نئوها آزمون‌های واقعی و جدید تافل هستن که توسط چینی‌ها از جلسه امتحان ضبط شدن و احتمال تکرارشون در آزمون اصلی هم وجود داره. TPOها و کتاب‌های رسمی ETS هم منابع استاندارد و قابل اعتمادن. همه اینا تو تست‌هلپر موجوده و کنار‌شون کلی نمونه رایتینگ و اسپیکینگ هم داریم که کمک می‌کنه مطمئن تمرین کنی.",
                    },
                    {
                        question: "TPO تافل چیه و تست‌هلپر داره؟",
                        answer: "TPO مخفف TOEFL Practice Online هست که آزمون‌های تمرینی رسمی تافل هستن. تست‌هلپر مجموعه کاملی از TPO ها و سؤالات استاندارد تافل رو داره که می‌تونی رایگان امتحان کنی.",
                    },
                    {
                        question: "ماک تافل رایگان تست‌هلپر چقدر شبیه آزمون اصلیه؟",
                        answer: "ماک‌های تافل ما از نظر محیط، سؤالات و زمان‌بندی عیناً مثل آزمون اصلی تافل iBT طراحی شدن. کاربرا گفتن تفاوتی بین تست‌هلپر و آزمون اصلی ندیدن.",
                    },
                    {
                        question: "تافل هوم ادیشن چیه و هزینه‌ش چقدره؟",
                        answer: "تافل Home Edition نسخه آنلاین و رسمی تافل هست که دقیقاً مثل آزمون حضوریه، فقط از خونه برگزار میشه و نظارت زنده (پروکتور) و ابزار امنیتی آنلاین داره. هزینه‌اش فرقی با آزمون اصلی نداره (در حال حاضر ۳۰۰ دلاره).",
                    },
                    {
                        question: "چطور می‌تونم Writin و Speaking تمرین کنم؟",
                        answer: "بخش‌های Writing و Speaking در تست‌هلپر کاملاً شبیه‌سازی شدن. می‌تونی با صدها سؤال واقعی تمرین کنی و از تصحیح هوش مصنوعی برای دریافت فیدبک استفاده کنی.",
                    },
                    {
                        question: "آموزش تافل رایگان دارید؟",
                        answer: "تست‌هلپر منابع آموزشی متنوع شامل ماک رایگان، نمونه پاسخ‌ها، ویدیوها و گروه‌های تلگرامی برای آموزش تافل داره که بصورت رایگان در دسترسه.",
                    },
                ]}
            />
            <CTA
                startHref="/toefl/dashboard"
                heading="برای تمرین تافل همه‌چیز مهیاست؛ فقط کافیه شروع کنی…"
                description="آماده‌ای برای رسیدن به نمره دلخواهت تلاش کنی؟"
            />
            <Footer />
        </Fragment>
    );
}
