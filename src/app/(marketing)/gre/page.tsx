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
import { LearnBranch } from "@/types";

export const metadata = {
    title: "آزمون GRE | ماک GRE، بهترین منابع، نمره و تاریخ آزمون | تست‌هلپر",
    description:
        "آمادگی کامل آزمون GRE: ماک GRE رایگان، بهترین منابع و کتاب GRE، راهنمای نمره و امتیاز، تاریخ آزمون، GRE General و Subject، آموزش تضمینی و بهترین کلاس GRE.",
    keywords: [
        "gre",
        "آزمون gre",
        "آزمون جی آر ای",
        "gre آزمون چیست",
        "gre آموزش",
        "gre تضمینی",
        "gre مخفف چیست",
        "gre مدرک",
        "gre منابع",
        "gre نمره",
        "gre چيست",
        "gre چیه",
        "آزمون gmat یا gre",
        "آزمون gre general",
        "آزمون gre subject",
        "آزمون gre subject چیست",
        "آزمون gre آنلاین",
        "آزمون gre سازمان سنجش",
        "آزمون gre منابع",
        "آزمون gre چيست",
        "آزمون gre چیه",
        "آزمون greچیست",
        "آزمون ماک gre",
        "آزمونgre",
        "آموزش gre",
        "امتحان gre چيست",
        "امتحان جي ار اي چيست",
        "امتحان جی آر ای",
        "امتحان جی آر ای چیست",
        "امتیاز gre چیست",
        "بهترین منابع gre",
        "بهترین منابع آزمون gre",
        "بهترین کتاب برای gre",
        "بهترین کلاس gre",
        "تاریخ آزمون gre",
        "تاریخ آزمون gre 2022",
        "تاریخ امتحان gre",
        "تست gre چیست",
        "ماک gre",
        "کلاس gre",
        "دوره gre",
        "منابع آزمون gre",
        "نمره gre",
        "هزینه آزمون gre",
        "gmat یا gre",
    ],
    alternates: {
        canonical: "/gre",
    },
    openGraph: {
        title: "آزمون GRE | ماک GRE، بهترین منابع، نمره و تاریخ آزمون | تست‌هلپر",
        description: "آمادگی کامل GRE: ماک GRE رایگان، بهترین منابع و کتاب، نمره و امتیاز، تاریخ آزمون، GRE General و Subject، آموزش تضمینی و کلاس GRE.",
        url: "/gre",
        type: "website",
    },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

const GrePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        آزمون GRE: ماک رایگان، بهترین منابع و کلاس
                        <br />
                        GRE General/Subject، نمره، تاریخ آزمون و آموزش
                    </>
                }
                // subtitle={<>gre</>}
            />
            <Testimonial />
            <Features
                heading="امکانات ویژه GRE در تست‌هلپر"
                description="ماک GRE رایگان، بهترین منابع و کتاب، نمره و امتیاز، تاریخ آزمون و کلاس GRE"
                customFeatures={[
                    {
                        title: "ماک GRE رایگان و آنلاین",
                        description: "آزمون ماک GRE آنلاین با شبیه‌سازی کامل محیط آزمون اصلی. تمرین GRE General و GRE Subject با نمره‌دهی دقیق.",
                        items: ["ماک GRE رایگان با بانک سؤال کامل", "آزمون GRE آنلاین با تحلیل نمره", "تمرین Verbal، Quantitative و Analytical Writing"],
                        imageLightSrc: "/images/features/tests-light.png",
                        imageDarkSrc: "/images/features/tests-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "بهترین منابع و کتاب GRE",
                        description: "دسترسی به بهترین منابع آزمون GRE شامل کتاب‌های رسمی ETS، Manhattan Prep و Magoosh. منابع GRE برای General و Subject.",
                        items: [
                            "بهترین کتاب برای GRE (Official Guide)",
                            "منابع GRE تضمینی با آموزش گام به گام",
                            "کتاب‌های GRE Subject (فیزیک، شیمی، روانشناسی)",
                        ],
                        imageLightSrc: "/images/features/exams-light.png",
                        imageDarkSrc: "/images/features/exams-dark.png",
                        imagePosition: "left",
                    },
                    {
                        title: "نمره و امتیاز GRE",
                        description: "تحلیل کامل نمره GRE و امتیاز GRE برای Verbal (130-170) و Quantitative (130-170). راهنمای جامع نمره‌دهی آزمون GRE.",
                        items: ["محاسبه نمره GRE و تبدیل به نمره کل", "تحلیل پیشرفت و پیش‌بینی نمره نهایی", "مقایسه GRE و GMAT برای انتخاب بهتر"],
                        imageLightSrc: "/images/features/charts-light.png",
                        imageDarkSrc: "/images/features/charts-dark.png",
                        imagePosition: "right",
                    },
                    {
                        title: "کلاس GRE و آموزش",
                        description: "بهترین کلاس GRE با دوره GRE تضمینی. آموزش GRE برای آزمون جی آر ای با اساتید مجرب و راهنمای تاریخ آزمون GRE.",
                        items: ["کلاس GRE آنلاین با پشتیبانی ۲۴ ساعته", "راهنمای ثبت‌نام و تاریخ آزمون GRE 2022 و بعد", "مشاوره برای انتخاب GMAT یا GRE"],
                        imageLightSrc: "/images/features/vocab-light.png",
                        imageDarkSrc: "/images/features/vocab-dark.png",
                        imagePosition: "left",
                    },
                ]}
            />
            <Team />
            <SocialProof />
            <FAQ
                customFaqs={[
                    {
                        question: "آزمون GRE چیست و چه کسانی باید بدن؟",
                        answer: "GRE (Graduate Record Examination) یه آزمون استانداردیه که برای پذیرش در دوره‌های کارشناسی ارشد و دکتری در آمریکا و کانادا مورد نیازه. شامل بخش‌های Verbal، Quantitative و Analytical Writing هست.",
                    },
                    {
                        question: "تفاوت GRE General و GRE Subject چیه؟",
                        answer: "GRE General یه آزمون عمومی برای همه رشته‌ها هست و مهارت‌های کلی ریاضی، زبان و نوشتار رو می‌سنجه. GRE Subject مخصوص رشته‌های خاص مثل فیزیک، شیمی، روانشناسی هست و تخصصی‌تره.",
                    },
                    {
                        question: "ماک GRE رایگان دارید؟",
                        answer: "بله! تست‌هلپر ماک‌های GRE رایگان زیادی داره که می‌تونی بصورت آنلاین تمرین کنی و نمره و عملکردت رو بسنجی.",
                    },
                    {
                        question: "بهترین منابع GRE کدوما هستن؟",
                        answer: "بهترین منابع GRE شامل کتاب‌های رسمی ETS (Official Guide)، Manhattan Prep، Magoosh و Kaplan هستن. تمام این منابع در تست‌هلپر گردآوری و قابل دسترسی هستن.",
                    },
                    {
                        question: "نمره GRE چطور حساب می‌شه؟",
                        answer: "نمره GRE از سه بخش تشکیل شده: Verbal (130-170)، Quantitative (130-170) و Analytical Writing (0-6). نمره کل از 260 تا 340 متغیره و امتیاز Writing جداگانه گزارش می‌شه.",
                    },
                    {
                        question: "تاریخ آزمون GRE کیه و چطور ثبت‌نام کنم؟",
                        answer: "آزمون GRE تقریباً هر روز در مراکز آزمون برگزار می‌شه. برای دیدن تاریخ آزمون GRE و ثبت‌نام باید به سایت رسمی ETS مراجعه کنی. هزینه آزمون GRE حدود ۲۲۰ دلاره.",
                    },
                    {
                        question: "بهترین کلاس GRE کجاست؟",
                        answer: "تست‌هلپر منابع جامعی برای آمادگی GRE داره که شامل ماک‌های رایگان، تصحیح رایتینگ، و پشتیبانی آنلاین هست. برای کلاس حضوری یا آنلاین می‌تونی از مشاورین ما راهنمایی بگیری.",
                    },
                    {
                        question: "تفاوت GRE و GMAT چیه؟",
                        answer: "GRE برای اکثر رشته‌های تحصیلات تکمیلی مورد نیازه، ولی GMAT مخصوص MBA و کسب‌وکاره. GRE از نظر ریاضی راحت‌تر ولی Verbal سخت‌تره. اکثر دانشگاه‌ها هر دو رو قبول می‌کنن.",
                    },
                ]}
            />
            <CTA
                startHref="/gre/dashboard"
                heading="ماک GRE رایگان رو امروز شروع کن"
                description="با بهترین منابع و کلاس GRE، نمره و امتیاز دلخواهت رو کسب کن"
            />
            <FooterMain type={LearnBranch.GRE} />
        </Fragment>
    );
};

export default GrePage;
