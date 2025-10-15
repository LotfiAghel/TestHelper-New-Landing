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

const IeltsPage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        آزمون آیلتس (IELTS): ماک رایگان و کلاس آنلاین
                        <br />
                        ثبت‌نام، دوره‌های آیلتس و نمرات 6.0 تا 7.5
                    </>
                }
            />
            <Testimonial />
            <Features 
                heading="امکانات ویژه آیلتس در تست‌هلپر"
                description="ماک آیلتس رایگان، کلاس آنلاین، منابع تضمینی و تمرین 4 مهارت برای نمرات 6.0 تا 7.5"
                customFeatures={[
                    {
                        title: "ماک آیلتس رایگان و آنلاین",
                        description: "امتحان ماک آیلتس در محیط کاملاً شبیه آزمون اصلی IELTS. تمرین 4 مهارت Reading، Writing، Listening و Speaking برای نمرات 5.5 تا 7.5.",
                        items: [
                            "بیش از ۲۰۰ ماک آیلتس آنلاین رایگان",
                            "تست آیلتس با زمان‌بندی واقعی آزمون",
                            "ثبت‌نام آزمون ماک آیلتس بدون محدودیت",
                        ],
                        imageLightSrc: "/images/features/tests-light.png",
                        imageDarkSrc: "/images/features/tests-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "کلاس آنلاین آیلتس و منابع تضمینی",
                        description: "بهترین کلاس آنلاین آیلتس با دوره‌های آیلتس تضمینی برای سطوح B2، C1 و C2. آموزش آیلتس آنلاین با کلاس‌های خصوصی و گروهی.",
                        items: [
                            "دوره‌های آیلتس 6.0، 6.5، 7.0 و 7.5",
                            "کلاس زبان آیلتس با اساتید مجرب",
                            "آموزشگاه آیلتس آنلاین با پشتیبانی ۲۴ ساعته",
                        ],
                        imageLightSrc: "/images/features/exams-light.png",
                        imageDarkSrc: "/images/features/exams-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "تمرین 4 مهارت آیلتس",
                        description: "آزمون آزمایشی آیلتس برای هر 4 مهارت با سؤالات واقعی. تمرین مهارت‌های IELTS Speaking، Writing، Reading و Listening.",
                        items: [
                            "نمونه سؤالات IELTS 6.5 و 7.0",
                            "تصحیح رایتینگ و اسپیکینگ آیلتس",
                            "پاسخ‌های تشریحی برای همه سؤالات",
                        ],
                        imageLightSrc: "/images/features/vocab-light.png",
                        imageDarkSrc: "/images/features/vocab-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "نمرات B2، C1 و C2 آیلتس",
                        description: "دوره‌های تخصصی برای رسیدن به نمرات IELTS 5.5، 6.0، 6.5، 7.0 و 7.5. معادل‌سازی نمره آیلتس با سطوح B2 و C1.",
                        items: [
                            "برنامه ریزی برای IELTS 6.5 و بالاتر",
                            "تبدیل نمره TOEFL IELTS و PTE یا IELTS",
                            "تحلیل پیشرفت برای نمره هدف",
                        ],
                        imageLightSrc: "/images/features/charts-light.png",
                        imageDarkSrc: "/images/features/charts-dark.png",
                        imagePosition: "left",
                    },
                ]}
            />
            <Team />
            <SocialProof />
            <FAQ customFaqs={[
                {
                    question: "ماک آیلتس رایگان تست‌هلپر چقدر به آزمون اصلی نزدیکه؟",
                    answer: "ماک‌های آیلتس ما کاملاً شبیه‌سازی شده و از نظر محتوا، زمان‌بندی و سطح دشواری به آزمون اصلی آیلتس بسیار نزدیکه. کاربرا معمولاً تفاوت چندانی بین تمرین‌ها و آزمون واقعی گزارش نمی‌کنن.",
                },
                {
                    question: "آیا می‌تونم با تست‌هلپر به نمره 7.5 آیلتس برسم؟",
                    answer: "بله! خیلی از کاربرا با تمرین منظم روی ماک‌های آیلتس، استفاده از تصحیح هوش مصنوعی و یادگیری لغات تخصصی، نمرات 6.5، 7.0 و حتی 7.5 آیلتس رو کسب کردن.",
                },
                {
                    question: "کلاس آنلاین آیلتس دارید؟",
                    answer: "در حال حاضر کلاس آموزشی مستقیم نداریم، ولی منابع کامل شامل ماک آیلتس رایگان، نمونه رایتینگ و اسپیکینگ، تصحیح هوش مصنوعی و گروه‌های تلگرامی برای پشتیبانی در دسترس هست.",
                },
                {
                    question: "چطور می‌تونم امتحان ماک آیلتس رو شروع کنم؟",
                    answer: "کافیه ثبت‌نام کنی و به بخش آیلتس بری. آزمون‌های ماک آیلتس آنلاین رایگان در دسترس هستن و می‌تونی همین الان شروع کنی.",
                },
                {
                    question: "آیا نمره C1 یا B2 آیلتس رو پوشش می‌دید؟",
                    answer: "بله! آزمون‌ها سطوح مختلف از B2 تا C2 رو پوشش می‌دن. نمرات 5.5 تا 6.0 معادل B2، نمرات 6.5 تا 7.5 معادل C1 و نمرات بالاتر معادل C2 محسوب می‌شن.",
                },
                {
                    question: "تفاوت تست‌هلپر با PTE یا تافل چیه؟",
                    answer: "تست‌هلپر هر سه آزمون آیلتس، تافل و PTE رو پوشش می‌ده. اگه بین آیلتس و PTE یا تافل تردید داری، می‌تونی هر دو رو امتحان کنی و ببینی کدوم بیشتر بهت میاد.",
                },
                {
                    question: "4 مهارت آیلتس چطور تمرین می‌شن؟",
                    answer: "تمام 4 مهارت آیلتس (Reading، Writing، Listening، Speaking) در تست‌هلپر قابل تمرینه. برای هر مهارت سؤالات متنوع، پاسخ‌های تشریحی و تصحیح هوش مصنوعی داریم.",
                },
                {
                    question: "دوره‌های آیلتس تضمینی دارید؟",
                    answer: "ما منابع تضمینی برای آمادگی آیلتس داریم که شامل ماک‌های استاندارد، تصحیح حرفه‌ای و پشتیبانی مستمره. با تمرین منظم، احتمال موفقیتت خیلی بالا میره.",
                },
            ]} />
            <CTA 
                startHref="/ielts/dashboard"
                heading="ماک آیلتس رایگان رو امروز شروع کن"
                description="با کلاس‌های آنلاین و منابع تضمینی به نمره دلخواهت برس"
            />
            <FooterMain />
        </Fragment>
    );
};

export default IeltsPage;
