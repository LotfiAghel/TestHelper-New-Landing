import React from "react";
import { Article } from "@/components/marketing/blog/base-components/blog-cards";
import { Blog } from "@/components/marketing/blog/blog";
import { Footer } from "@/components/marketing/footers/footer";
import { Header } from "@/components/marketing/header-navigation/header";
import { strapiBaseUrl } from "@/utils/consts";

type PageParams = {
    category: string;
};

type SearchParams = {
    page?: string;
};

export async function generateStaticParams() {
    const res = await fetch(`${strapiBaseUrl}/api/blog-posts/all/onlylinks`, {
        next: { revalidate: 60 },
    });

    const posts = await res.json();
    // console.error(posts)
    return posts.map((post: any) => ({
        slug: post.slug,
        category: post.category || "",
    }));
}

async function getPost(category: string) {
    const res = await fetch(`${strapiBaseUrl}/api/blog-posts/category/${category}`, {
        next: { revalidate: 60 },
    });
    return res.json();
}

export default async function page({ params, searchParams }: { params: Promise<PageParams>; searchParams: Promise<SearchParams> }) {
    const resolvedParams = await params;
    const { category } = resolvedParams || { category: "all" };
    const articles = await getPost(category);
    const searchResult = await searchParams;

    return (
        <>
            <Header />
            <Blog
                page={searchResult.page ? parseInt(searchResult.page) : 1}
                articles={articles.map((item: Article): Article => {
                    return {
                        ...item,
                        mainimage: {
                            ...item.mainimage,
                            fullUrl: strapiBaseUrl + item?.mainimage?.url,
                        },
                        link: `/blog/${item.category}/${encodeURIComponent(item.slug)}`,
                        publishedAt: new Date(item.publishedAt).toLocaleDateString("fa-IR"),
                    };
                })}
            />
            <Footer />
        </>
    );
}
