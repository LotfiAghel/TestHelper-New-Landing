import { Fragment } from "react";
import { Blog } from "@/components/marketing/blog/blog";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";

const BlogPage = () => {
    return (
        <Fragment>
            <Header />
            <Blog />
            <FooterMain />
        </Fragment>
    );
};

export default BlogPage;
