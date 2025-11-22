// @ts-nocheck
import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features";
import { Footer } from "@/components/marketing/footers/footer";
import { Header } from "@/components/marketing/header-navigation/header";
import { HeroSection } from "@/components/marketing/header-section/hero";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Team } from "@/components/marketing/team/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";

export const metadata = {
    title: "آزمون PTE | ماک PTE رایگان، کلاس و ثبت‌نام پی تی ای | تست‌هلپر",
    description:
        "آمادگی کامل آزمون PTE: ماک PTE رایگان، بهترین کلاس PTE، ثبت‌نام پی تی ای، هزینه آزمون، آموزش تضمینی، منابع و کتاب PTE، خرید ووچر و تبدیل نمره PTE به آیلتس.",
    keywords: [
        "pte",
        "آزمون pte",
        "آزمون پی تی ای",
        "پی تی ای",
        "ماک پی تی ای",
        "ماک pte",
        "ثبت نام آزمون pte",
        "هزینه آزمون pte",
        "امتحان pte",
        "ثبت نام pte",
        "pte self study سایت",
        "pte آزمون",
        "pte آموزش",
        "pte تضمینی",
        "pte منابع ازمون",
        "pte چيست",
        "pte کلاس",
        "pte یا ielts",
        "pteچیست",
        "آزمون pte آنلاین",
        "آزمون pte تضمینی",
        "آزمون pte ثبت نام",
        "آزمون pte جنرال",
        "آزمون pte منابع",
        "آزمون pte هزینه",
        "آزمون pte چیست",
        "آزمون pte یا آیلتس",
        "آزمون آزمایشی pte",
        "آزمون ای پی تی",
        "آزمون زبان pte",
        "آزمون زبان pte چیست",
        "آزمون زبان ای پی تی",
        "آزمون ماک pte",
        "آزمون ماک پی تی ای",
        "آزمون پی تی ای چیست",
        "آزمونpte",
        "آمادگی آزمون pte",
        "آمادگی برای آزمون pte",
        "آموزش pte",
        "آموزش تضمینی pte",
        "آموزش زبان pte",
        "آموزش زبان انگلیسی pte",
        "آموزشگاه pte",
        "آیلتس یا pte",
        "ازمون pte چیه",
        "ازمونpte",
        "استاد pte",
        "امتحان pte چیست",
        "امتحان زبان pte",
        "امتحان ماک pte",
        "امتحان پی تی ای",
        "امتحان پی تی ای چیست",
        "برنامه ریزی برای آزمون pte",
        "بهترین آموزشگاه pte",
        "بهترین استاد pte",
        "بهترین کلاس pte",
        "تبدیل نمره pte به آیلتس",
        "تجربه آزمون pte",
        "تدریس pte",
        "تدریس خصوصی pte",
        "تست pte",
        "تفاوت pte و ielts",
        "تور آزمون pte",
        "ثبت نام آزمون ماک pte",
        "ثبت نام آزمون پی تی ای",
        "ثبت نام ماک pte",
        "خرید آزمون pte",
        "خرید آزمون ماک pte",
        "خرید ماک pte",
        "خرید مدرک زبان pte",
        "خرید ووچر pte",
        "خرید ووچر آزمون pte",
        "خرید کتاب pte",
        "خرید مدرک زبان ept",
        "دانلود منابع pte",
        "دانلود منابع آزمون pte",
        "دانلود نمونه سوالات pte",
        "دانلود نمونه سوالات آزمون pte",
        "دانلود کتاب pte",
        "دانلود کتاب the official guide to pte academic",
        "دانلود کتاب های pte",
        "درباره آزمون pte",
        "دوره pte",
        "دوره pte چیست",
        "دوره زبان pte",
        "دوره های pte",
        "زبان pte",
        "سایت pte self study",
        "قیمت آزمون pte",
        "قیمت امتحان pte",
        "ماک رایگان pte",
        "مدرس pte",
    ],
    alternates: {
        canonical: "/pte",
    },
    openGraph: {
        title: "آزمون PTE | ماک PTE رایگان، کلاس و ثبت‌نام پی تی ای | تست‌هلپر",
        description: "آمادگی کامل PTE: ماک PTE رایگان، بهترین کلاس، ثبت‌نام، هزینه، آموزش تضمینی، منابع و کتاب، خرید ووچر و تبدیل نمره PTE به آیلتس.",
        url: "/pte",
        type: "website",
    },
};

// Enable static generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

const PtePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        آزمون PTE: ماک رایگان، کلاس و ثبت‌نام پی تی ای
                        <br />
                        هزینه، منابع، آموزش تضمینی و خرید ووچر PTE
                    </>
                }
                // subtitle={<>pte</>}
            />
            <Testimonial />
            <Features
                heading="امکانات ویژه PTE در تست‌هلپر"
                description="ماک PTE رایگان، بهترین کلاس و منابع، ثبت‌نام پی تی ای، خرید ووچر و تبدیل نمره PTE به آیلتس"
                customFeatures={[
                    {
                        title: "ماک PTE رایگان و آنلاین",
                        description: "آزمون ماک پی تی ای و ماک PTE رایگان در محیط کاملاً شبیه آزمون اصلی PTE Academic. تست PTE آنلاین با نمره‌دهی خودکار.",
                        items: ["ماک رایگان PTE با تصحیح کامپیوتری", "آزمون آزمایشی PTE با زمان‌بندی واقعی", "ثبت‌نام آزمون ماک PTE بدون محدودیت"],
                        imageLightSrc: "/images/features/tests-light.png",
                        imageDarkSrc: "/images/features/tests-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "بهترین کلاس و منابع PTE",
                        description: "بهترین کلاس PTE و بهترین آموزشگاه PTE با دوره PTE تضمینی. منابع آزمون PTE شامل کتاب The Official Guide to PTE Academic.",
                        items: ["کلاس PTE آنلاین با تدریس خصوصی PTE", "دانلود منابع PTE و کتاب‌های PTE", "آموزش PTE و آموزش زبان انگلیسی PTE"],
                        imageLightSrc: "/images/features/exams-light.png",
                        imageDarkSrc: "/images/features/exams-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "ثبت‌نام و خرید ووچر PTE",
                        description: "راهنمای کامل ثبت‌نام آزمون پی تی ای و خرید ووچر PTE. هزینه آزمون PTE و قیمت امتحان PTE با توضیحات کامل.",
                        items: [
                            "ثبت‌نام PTE و آزمون PTE ثبت‌نام گام به گام",
                            "خرید ووچر آزمون PTE با قیمت مناسب",
                            "هزینه PTE و قیمت آزمون PTE (حدود ۲۵۰ دلار)",
                        ],
                        imageLightSrc: "/images/features/vocab-light.png",
                        imageDarkSrc: "/images/features/vocab-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "تبدیل نمره PTE به آیلتس",
                        description: "جدول تبدیل نمره PTE به آیلتس و مقایسه PTE یا IELTS. راهنمای انتخاب بین آیلتس یا PTE بر اساس نیاز شما.",
                        items: ["تبدیل نمره PTE به آیلتس (PTE 50 = IELTS 5.5)", "مقایسه تفاوت PTE و IELTS", "انتخاب بین PTE یا آیلتس یا تافل"],
                        imageLightSrc: "/images/features/charts-light.png",
                        imageDarkSrc: "/images/features/charts-dark.png",
                        imagePosition: "left",
                    },
                ]}
            />
            <Team />
            <SocialProof />
            <FAQ
                customFaqs={[
                    {
                        question: "آزمون PTE چیه و چه تفاوتی با آیلتس داره؟",
                        answer: "PTE (Pearson Test of English) یه آزمون زبان کامپیوتری هست که مثل آیلتس مهارت‌های زبانی رو می‌سنجه. تفاوت اصلیش اینه که PTE کاملاً توسط کامپیوتر تصحیح می‌شه و نتیجه سریع‌تر (۲-۵ روز) اعلام می‌شه.",
                    },
                    {
                        question: "ماک PTE رایگان تست‌هلپر چقدر دقیقه؟",
                        answer: "ماک‌های PTE تست‌هلپر از نظر محتوا، نوع سؤالات و زمان‌بندی کاملاً شبیه آزمون اصلی پی تی ای طراحی شدن. کاربرا معمولاً تفاوت چندانی بین تمرین و آزمون واقعی گزارش نمی‌کنن.",
                    },
                    {
                        question: "بهترین کلاس PTE کجاست؟",
                        answer: "تست‌هلپر بهترین منابع PTE رو داره شامل ماک رایگان، تصحیح هوش مصنوعی و پشتیبانی آنلاین. برای کلاس حضوری یا آنلاین می‌تونی از مشاورین ما راهنمایی بگیری.",
                    },
                    {
                        question: "چطور می‌تونم ثبت‌نام PTE کنم و هزینه‌ش چقدره؟",
                        answer: "برای ثبت‌نام آزمون PTE باید به سایت رسمی Pearson مراجعه کنی. هزینه آزمون PTE حدود ۲۵۰ دلار و در ایران حدود ۱۵ میلیون تومان (بر اساس نرخ روز) هست. می‌تونی از تست‌هلپر ووچر بخری.",
                    },
                    {
                        question: "خرید ووچر PTE از تست‌هلپر ممکنه؟",
                        answer: "بله، می‌تونی ووچر PTE رو از طریق تست‌هلپر خریداری کنی و برای ثبت‌نام استفاده کنی. قیمت بر اساس نرخ روز اعلام می‌شه.",
                    },
                    {
                        question: "نمره PTE چطور به آیلتس تبدیل می‌شه؟",
                        answer: "تبدیل نمره PTE به آیلتس بر اساس جدول رسمی Pearson انجام می‌شه. مثلاً PTE 50 معادل آیلتس 5.5، PTE 65 معادل آیلتس 7.0 و PTE 79 معادل آیلتس 8.0 هست.",
                    },
                    {
                        question: "منابع و کتاب PTE کدوما بهترینه؟",
                        answer: "بهترین منابع PTE شامل کتاب‌های رسمی Pearson (Official Guide)، PTE Academic Testbuilder و Gold Edition هستن که همه در تست‌هلپر موجودن.",
                    },
                    {
                        question: "برای آمادگی PTE چقدر وقت لازمه؟",
                        answer: "بسته به سطح زبانت متفاوته. معمولاً با تمرین روزانه ۲-۳ ساعت، در ۲-۳ ماه می‌تونی آماده بشی. تست‌هلپر با برنامه‌ریزی شخصی‌سازی شده بهت کمک می‌کنه زمانت رو بهینه کنی.",
                    },
                ]}
            />
            <CTA
                startHref="/pte/dashboard"
                heading="ماک PTE رایگان رو امروز شروع کن"
                description="با بهترین کلاس، منابع و خرید ووچر پی تی ای، به نمره دلخواهت برس"
            />
            <Footer />
        </Fragment>
    );
};

export default PtePage;
