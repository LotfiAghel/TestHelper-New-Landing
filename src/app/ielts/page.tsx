import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Team } from "@/components/marketing/team-sections/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";
import { IeltsHeroSection } from "./ielts-hero";

export const metadata = {
    title: "IELTS — TestHelper",
    description: "تست‌هلپر — آیلتس",
};

const IeltsPage = () => {
    return (
        <Fragment>
            <Header />
            <IeltsHeroSection />
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
