import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { FAQ } from "@/components/marketing/faq/faq-accordion";
import { Features } from "@/components/marketing/features/features";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Team } from "@/components/marketing/team-sections/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";
import { GreHeroSection } from "./gre-hero";

export const metadata = {
    title: "GRE — TestHelper",
    description: "تست‌هلپر — جی‌آر‌ای",
};

const GrePage = () => {
    return (
        <Fragment>
            <Header />
            <GreHeroSection />
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
