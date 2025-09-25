import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Team } from "@/components/marketing/team-sections/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";
import { PteHeroSection } from "./pte-hero";

export const metadata = {
    title: "PTE — TestHelper",
    description: "تست‌هلپر — پی‌تی‌ای",
};

const PtePage = () => {
    return (
        <Fragment>
            <Header />
            <PteHeroSection />
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
