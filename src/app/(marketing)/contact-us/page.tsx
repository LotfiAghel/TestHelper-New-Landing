import { Fragment } from "react";
import { Contact } from "@/components/marketing/contact/contact";
import { Footer } from "@/components/marketing/footers/footer";
import { Header } from "@/components/marketing/header-navigation/header";

// Enable static generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

const ContactUsPage = () => {
    return (
        <Fragment>
            <Header />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default ContactUsPage;
