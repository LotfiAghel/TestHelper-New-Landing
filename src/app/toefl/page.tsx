// @ts-nocheck
import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { HeroSection } from "@/components/marketing/header-sections/hero";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Team } from "@/components/marketing/team-sections/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";

export const metadata = {
    title: "آزمون تافل (TOEFL) | ماک تافل رایگان، منابع و ثبت‌نام | تست‌هلپر",
    description:
        "آمادگی آزمون تافل (TOEFL): TPO تافل، آزمون ماک تافل رایگان، منابع و کلاس‌ها، ثبت‌نام تافل و هوم ادیشن، هزینه و قیمت ووچر تافل، تمرین Listening و Speaking.",
    keywords: [
        "tpo تافل",
        "ازمون تافل",
        "تافل",
        "آزمون تافل",
        "آزمون ماک تافل",
        "تست تافل",
        "ماک تافل خاتم",
        "آزمون آزمایشی تافل آنلاین رایگان",
        "neo toefl test",
        "آزمون ماک تافل رایگان",
        "تافل ۳",
        "ماک تافل",
        "toefl",
        "toefl itp",
        "toefl online",
        "toefl ielts",
        "toefl kurs",
        "ثبت نام تافل",
        "toeflbank",
        "toefl listening",
        "toefl 2023",
        "duolingo toefl",
        "آموزش زبان انگلیسی از صفر",
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
    ],
    alternates: {
        canonical: "/toefl",
    },
    openGraph: {
        title: "آزمون تافل (TOEFL) | ماک تافل رایگان، منابع و ثبت‌نام | تست‌هلپر",
        description:
            "TPO تافل، آزمون ماک تافل رایگان، منابع و کلاس‌ها، ثبت‌نام تافل و هوم ادیشن، هزینه و قیمت ووچر تافل، تمرین Listening و Speaking در تست‌هلپر.",
        url: "/toefl",
        type: "website",
    },
};

export default function ToeflPage() {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        آمادگی کامل آزمون تافل (TOEFL)
                        <br />
                        ماک رایگان، TPO، منابع و ثبت‌نام هوم ادیشن
                    </>
                }
            />
            <Features />
            <Testimonial />
            <Team />
            <SocialProof />
            <FAQ />
            <CTA startHref="/toefl/dashboard" />
            <FooterMain />
        </Fragment>
    );
}
