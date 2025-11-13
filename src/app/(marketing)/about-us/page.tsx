import { Fragment } from "react";
import { About } from "@/components/marketing/about/about";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { Team } from "@/components/marketing/team/team";

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

const AboutUsPage = () => {
    return (
        <Fragment>
            <Header />
            <About />
            <Team />
            <FooterMain />
        </Fragment>
    );
};

export default AboutUsPage;
