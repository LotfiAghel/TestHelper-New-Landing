import { Blog } from "@/components/marketing/blog/blog";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { strapiBaseUrl } from "@/utils/consts";
import { Article } from "@/components/marketing/blog/base-components/blog-cards";
import React from 'react'

export async function generateStaticParams(statParam) {
    const res = await fetch(`${strapiBaseUrl}/api/blog-posts/all/onlylinks`, {
        next: { revalidate: 60 },
    });

    const posts = await res.json()
    // console.error(posts)
    return posts.map((post) => ({
        slug: post.slug,
        category: post.category || '',
    }));
}

async function getPost(category) {
    const res = await fetch(`${strapiBaseUrl}/api/blog-posts/category/${category}`, {
        next: { revalidate: 60 },
    });
    return res.json()
}


export default async function page({ params, searchParams }) {
    const { category } = params || { category: 'all' }
    const articles = await getPost(category);
    const searchResult = await searchParams;

    return <>
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
                }
            })} />
        <FooterMain />
    </>
}
