import { Fragment } from "react";
import { Contact } from "@/components/marketing/contact/contact";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";

export const ContactUsPage = () => {
    return (
        <Fragment>
            <Header />
            <Contact />
            <FooterMain />
        </Fragment>
    );
};

export default ContactUsPage;
