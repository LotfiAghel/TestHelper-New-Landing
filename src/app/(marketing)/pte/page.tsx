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
    title: "آزمون PTE | ماک PTE رایگان، ثبت‌نام و منابع | تست‌هلپر",
    description:
        "آمادگی آزمون PTE: ماک PTE و پی‌تی‌ای، ثبت‌نام و هزینه، کلاس و آموزش تضمینی، منابع و نمونه‌سؤالات، تبدیل نمره PTE به آیلتس و برنامه‌ریزی مطالعه.",
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
        title: "آزمون PTE | ماک PTE رایگان، ثبت‌نام و منابع | تست‌هلپر",
        description: "ماک PTE رایگان، ثبت‌نام و هزینه، کلاس‌ها و آموزش تضمینی، منابع و نمونه‌سؤالات، و تبدیل نمره PTE به آیلتس برای آمادگی کامل در تست‌هلپر.",
        url: "/pte",
        type: "website",
    },
};

const PtePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        آمادگی آزمون PTE
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
            <CTA startHref="/pte/dashboard" />
            <FooterMain />
        </Fragment>
    );
};

export default PtePage;
