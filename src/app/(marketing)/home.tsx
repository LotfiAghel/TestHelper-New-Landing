"use client";

import { Fragment } from "react";
import dynamic from "next/dynamic";
import { CTA } from "@/components/marketing/cta/cta";
import { Header } from "@/components/marketing/header-navigation/header";
import { HeroSection } from "@/components/marketing/header-section/hero";
import { LearnBranch } from "@/types";
import { FooterMain } from "@/components/marketing/footers/footer-main";

const Tests = dynamic(() => import("@/components/marketing/supported-tests/tests").then(mod => ({ default: mod.Tests })), {
    loading: () => <div className="py-8 sm:py-12 lg:py-16" />,
});
const Testimonial = dynamic(() => import("@/components/marketing/testimonials/testimonial").then((mod) => ({ default: mod.Testimonial })), {
    loading: () => <div className="py-8 sm:py-12 lg:py-16" />,
});
const Features = dynamic(() => import("@/components/marketing/features/features-alternating-layout").then((mod) => ({ default: mod.Features })), {
    loading: () => <div className="py-8 sm:py-12 lg:py-16" />,
})
const Team = dynamic(() => import("@/components/marketing/team/team").then((mod) => ({ default: mod.Team })), {
    loading: () => <div className="py-8 sm:py-12 lg:py-16" />,
});
const SocialProof = dynamic(() => import("@/components/marketing/social-proof/social-proof").then((mod) => ({ default: mod.SocialProof })), {
    loading: () => <div className="py-8 sm:py-12 lg:py-16" />,
});
const FAQ = dynamic(() => import("@/components/marketing/faq/faq-accordion").then((mod) => ({ default: mod.FAQ })), {
    loading: () => <div className="py-8 sm:py-12 lg:py-16" />,
});
// const CTA = dynamic(() => import("@/components/marketing/cta/cta").then((mod) => ({ default: mod.CTA })), {
//     loading: () => <div className="py-8 sm:py-12 lg:py-16" />,
// });
const Footer = dynamic(() => import("@/components/marketing/footers/footer-brand").then((mod) => ({ default: mod.Footer })), {
    loading: () => <div className="py-8" />,
});

export const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection openModal={true} />
            <Tests />
            <Testimonial />
            <Features />
            <Team />
            <SocialProof />
            <FAQ />
            <CTA />
            <FooterMain type={LearnBranch.None} />
            <Footer />
        </Fragment>
    );
};
