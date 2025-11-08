// @ts-nocheck
import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features";
import { FooterMain } from "@/components/marketing/footers/footer-main";
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
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function ToeflPage() {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        آزمون تافل (TOEFL): TPO، ماک رایگان و هوم ادیشن
                        <br />
                        ثبت‌نام، خرید ووچر تافل و کلاس‌های تخصصی
                    </>
                }
                subtitle={
                    <>
                        صدها نمونه سؤال واقعی و آزمون شبیه‌ساز (Mock Test) در محیطی مشابه تافل اصلی، با تحلیل پاسخ‌ها، نکات آموزشی و راهنمای کسب نمره بالا در
                        مسیر اپلای و تحصیل بین‌المللی
                    </>
                }
            />
            <Features
                heading="امکانات ویژه تافل در تست‌هلپر"
                description="TPO تافل، ماک رایگان، تافل هوم ادیشن، خرید ووچر و تمرین Listening و Speaking"
                customFeatures={[
                    {
                        title: "TPO تافل و ماک رایگان",
                        description: "دسترسی کامل به TPO تافل و آزمون ماک تافل رایگان. تمرین با سؤالات واقعی TOEFL IBT در محیط Neo TOEFL Test.",
                        items: ["تمام TPO تافل (TPO 1 تا آخرین نسخه)", "ماک رایگان تافل با نمره‌دهی دقیق", "آزمون آزمایشی تافل آنلاین رایگان"],
                        imageLightSrc: "/images/features/tests-light.png",
                        imageDarkSrc: "/images/features/tests-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "تافل هوم ادیشن و ثبت‌نام",
                        description: "آماده‌سازی کامل برای تافل هوم ادیشن و خرید ووچر تافل. ثبت‌نام تافل و نحوه ثبت‌نام تافل هوم ادیشن با راهنمای گام به گام.",
                        items: ["شبیه‌سازی تافل هوم ادیشن در خانه", "خرید ووچر تافل با قیمت مناسب", "راهنمای کامل ثبت‌نام و هزینه تافل"],
                        imageLightSrc: "/images/features/exams-light.png",
                        imageDarkSrc: "/images/features/exams-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "TOEFL Listening و Speaking",
                        description: "تمرین تخصصی TOEFL Listening و Speaking تافل با صدها سؤال واقعی. تصحیح Speaking تافل با هوش مصنوعی.",
                        items: ["TOEFL Listening با پاسخ‌های تشریحی", "Speaking تافل با فیدبک لحظه‌ای", "تمرین TOEFL 2023 با سؤالات به‌روز"],
                        imageLightSrc: "/images/features/AI-light.png",
                        imageDarkSrc: "/images/features/AI-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "منابع تافل و آموزش",
                        description: "بهترین منابع تافل شامل TOEFL ITP، IBT، Essential و Online. آموزش تافل رایگان با کتاب‌ها و ویدیوهای آموزشی.",
                        items: ["تفاوت TOEFL ITP و IBT و ITP IBT", "منابع Cambridge TOEFL و TOEFL Bank", "کلاس تافل آنلاین (TOEFL Kurs Online)"],
                        imageLightSrc: "/images/features/vocab-light.png",
                        imageDarkSrc: "/images/features/vocab-dark.png",
                        imagePosition: "left",
                    },
                ]}
            />
            <Testimonial />
            <Team />
            <SocialProof />
            <FAQ
                customFaqs={[
                    {
                        question: "TPO تافل چیه و تست‌هلپر داره؟",
                        answer: "TPO مخفف TOEFL Practice Online هست که آزمون‌های تمرینی رسمی تافل هستن. تست‌هلپر مجموعه کاملی از TPO ها و سؤالات استاندارد تافل رو داره که می‌تونی رایگان امتحان کنی.",
                    },
                    {
                        question: "ماک تافل رایگان تست‌هلپر چقدر شبیه آزمون اصلیه؟",
                        answer: "ماک‌های تافل ما از نظر محیط، سؤالات و زمان‌بندی عیناً مثل آزمون اصلی تافل IBT طراحی شدن. کاربرا گفتن تفاوتی بین تست‌هلپر و آزمون اصلی ندیدن.",
                    },
                    {
                        question: "تافل هوم ادیشن چیه و هزینه‌ش چقدره؟",
                        answer: "تافل هوم ادیشن همون آزمون TOEFL iBT هست که از خونه برگزار می‌شه. هزینه‌ش معمولاً حدود ۱۸۰ دلاره. در تست‌هلپر می‌تونی برای تافل هوم ادیشن آماده بشی و ووچر خریداری کنی.",
                    },
                    {
                        question: "خرید ووچر تافل از تست‌هلپر ممکنه؟",
                        answer: "بله، می‌تونی ووچر تافل رو از طریق تست‌هلپر خریداری کنی و برای ثبت‌نام تافل استفاده کنی. قیمت ووچر تافل براساس نرخ روز اعلام می‌شه.",
                    },
                    {
                        question: "TOEFL Listening و Speaking چطور تمرین کنم؟",
                        answer: "بخش‌های TOEFL Listening و Speaking در تست‌هلپر کاملاً شبیه‌سازی شدن. می‌تونی با صدها سؤال واقعی تمرین کنی و از تصحیح هوش مصنوعی برای Speaking استفاده کنی.",
                    },
                    {
                        question: "منابع تافل کدوما بهترینه؟",
                        answer: "بهترین منبع تافل TPO ها و کتاب‌های رسمی ETS هستن که همشون در تست‌هلپر در دسترسه. علاوه بر اون، نمونه رایتینگ و اسپیکینگ زیادی داریم.",
                    },
                    {
                        question: "تفاوت TOEFL ITP و IBT چیه؟",
                        answer: "TOEFL ITP فقط شامل Reading، Listening و Grammar هست و بصورت کاغذی برگزار می‌شه. TOEFL IBT شامل 4 مهارت کامل و بصورت آنلاین یا کامپیوتری هست که تست‌هلپر رو براش طراحی کردیم.",
                    },
                    {
                        question: "آموزش تافل رایگان دارید؟",
                        answer: "تست‌هلپر منابع آموزشی متنوع شامل ماک رایگان، نمونه پاسخ‌ها، ویدیوها و گروه‌های تلگرامی برای آموزش تافل داره که بصورت رایگان در دسترسه.",
                    },
                ]}
            />
            <CTA
                startHref="/toefl/dashboard"
                heading="ماک تافل رایگان و TPO رو همین الان شروع کن"
                description="با تمرین تافل هوم ادیشن و خرید ووچر، به نمره دلخواهت برس"
            />
            <FooterMain />
        </Fragment>
    );
}
