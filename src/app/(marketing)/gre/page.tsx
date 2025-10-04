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
    title: "آزمون GRE | ماک GRE، منابع، تاریخ آزمون و نمره | تست‌هلپر",
    description: "آمادگی آزمون GRE: ماک GRE، بهترین منابع و کتاب‌ها، راهنمای نمره‌دهی، تاریخ و ثبت‌نام، آشنایی با GRE General و Subject، آموزش و نکات مهم.",
    keywords: [
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
    ],
    alternates: {
        canonical: "/gre",
    },
    openGraph: {
        title: "آزمون GRE | ماک GRE، منابع، تاریخ آزمون و نمره | تست‌هلپر",
        description: "ماک GRE، منابع و کتاب‌ها، راهنمای نمره‌دهی، تاریخ و ثبت‌نام، و معرفی GRE General و Subject برای آمادگی کامل در تست‌هلپر.",
        url: "/gre",
        type: "website",
    },
};

const GrePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        آمادگی آزمون GRE (General/Subject)
                        <br />
                        ماک، منابع برتر و راهنمای نمره‌دهی
                    </>
                }
            />
            <Testimonial />
            <Features />
            <Team />
            <SocialProof />
            <FAQ />
            <CTA startHref="/gre/dashboard" />
            <FooterMain />
        </Fragment>
    );
};

export default GrePage;
