import { Fragment } from "react";
import { BlogContent } from "@/components/marketing/content/blog-content";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";

const BlogPage = () => {
    return (
        <Fragment>
            <Header />
            <BlogContent />
            <FooterMain />
        </Fragment>
    );
};

export default BlogPage;
