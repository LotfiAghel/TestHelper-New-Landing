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
    title: "آزمون آیلتس (IELTS) | ماک آیلتس رایگان، ثبت‌نام و منابع | تست‌هلپر",
    description:
        "آمادگی آزمون آیلتس: ماک آیلتس آنلاین رایگان، ثبت‌نام آزمون آیلتس، بهترین کلاس‌ها و دوره‌های آیلتس، سطوح B2/C1/C2، هدف نمره 6.0 تا 7.5 و منابع آموزشی کامل.",
    keywords: [
        "قیمت ووچر تافل",
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
        "هزینه آزمون gre",
        "آزمون ماک آیلتس آنلاین",
        "کلاس آیلتس آنلاین",
        "بهترین کلاس آنلاین آیلتس",
        "کلاس زبان آیلتس",
        "کلاس خصوصی آیلتس",
        "خرید ووچر تافل",
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
    ],
    alternates: {
        canonical: "/ielts",
    },
    openGraph: {
        title: "آزمون آیلتس (IELTS) | ماک آیلتس رایگان، ثبت‌نام و منابع | تست‌هلپر",
        description:
            "ماک آیلتس آنلاین رایگان، ثبت‌نام، کلاس‌ها و دوره‌های آیلتس، اهداف نمره 6 تا 7.5، و منابع آموزشی کامل برای سطوح B2/C1/C2 در تست‌هلپر.",
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
                        آمادگی آزمون آیلتس (IELTS)
                        <br />
                        ماک رایگان، ثبت‌نام، کلاس‌ها و منابع کامل
                    </>
                }
            />
            <Testimonial />
            <Features />
            <Team />
            <SocialProof />
            <FAQ />
            <CTA startHref="/ielts/dashboard" />
            <FooterMain />
        </Fragment>
    );
};

export default IeltsPage;
