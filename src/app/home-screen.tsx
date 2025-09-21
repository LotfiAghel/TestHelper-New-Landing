"use client";

import { Fragment } from "react";
import { CTA } from "@/components/marketing/cta/cta";
import { Features } from "@/components/marketing/features/features";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { HeroSection } from "@/components/marketing/header-sections/hero";
import { SocialProof } from "@/components/marketing/social-proof/social-proof";
import { Tests } from "@/components/marketing/supported-tests/tests";
import { Team } from "@/components/marketing/team-sections/team";
import { Testimonial } from "@/components/marketing/testimonials/testimonial";

export const HomeScreen = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <Tests />
            <Testimonial />
            <Features />
            <Team />
            <SocialProof />
            <CTA />
            <FooterMain />
        </Fragment>
    );
};
