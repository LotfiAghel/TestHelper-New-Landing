import { Fragment } from "react";
import { About } from "@/components/marketing/about/about";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { Team } from "@/components/marketing/team/team";

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
