import { Fragment } from "react";
import { Blog } from "@/components/marketing/blog/blog";
import { Header } from "@/components/marketing/header-navigation/header";

const BlogPage = () => {
    return (
        <Fragment>
            <Header />
            <Blog />
        </Fragment>
    );
};

export default BlogPage;
