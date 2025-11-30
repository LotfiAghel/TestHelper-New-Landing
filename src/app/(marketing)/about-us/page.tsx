import { Fragment } from "react";
import { About } from "@/components/marketing/about/about";
import { Footer } from "@/components/marketing/footers/footer-brand";
import { Header } from "@/components/marketing/header-navigation/header";
import { Team } from "@/components/marketing/team/team";

// Enable static generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

const AboutUsPage = () => {
    return (
        <Fragment>
            <Header />
            <About />
            <Team />
            <Footer />
        </Fragment>
    );
};

export default AboutUsPage;
