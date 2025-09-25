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
    title: "PTE — TestHelper",
    description: "تست‌هلپر — پی‌تی‌ای",
};

const PtePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection
                title={
                    <>
                        با تست‌هلپر، <br />
                        پی‌تی‌ای خیلی راحته
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
