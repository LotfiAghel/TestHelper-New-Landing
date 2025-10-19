// "use client";
// import { Check, Copy01, Link01 } from "@untitledui/icons";
import { Fragment } from "react";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
// import { Badge } from "@/components/base/badges/badges";
// import { Button } from "@/components/base/buttons/button";
// import { Facebook, LinkedIn, Telegram, X } from "@/components/foundations/social-icons";
// import { useClipboard } from "@/hooks/use-clipboard";
import { Article } from "@/components/marketing/blog/base-components/blog-cards";
import { FAQList } from "@/components/marketing/faq/faq-accordion";
import { DetailArticle } from "@/types";
import { strapiBaseUrl } from "@/utils/consts";

export const BlogContent = ({ blogItem, allPosts, headers }: { blogItem: DetailArticle; allPosts: Article[]; headers: any[] }) => {
    // const { copied, copy } = useClipboard();

    return (
        <>
            <meta name="description" content={blogItem.SeoDescription} />
            <meta name="keywords" content={blogItem.SeoKeywords} />
            <div className="bg-primary">
                <div className="mx-auto max-w-container px-4 py-8 sm:py-12 md:px-8 lg:py-16">
                    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
                        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                            <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">{blogItem.title}</h1>
                            <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{blogItem.SeoDescription}</p>
                        </div>
                    </div>
                    <img className="mt-12 h-60 w-full object-cover md:mt-16 md:h-160" src={`${strapiBaseUrl}${blogItem.mainimage.url}`} alt={blogItem.title} />
                </div>

                <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                    <div className="mx-auto flex justify-center gap-12">
                        {headers.length > 0 && (
                            <div className="sticky top-24 hidden h-full lg:flex">
                                <nav className="w-72 space-y-3 rounded-2xl border border-secondary bg-secondary p-5 text-sm shadow-sm">
                                    <h2 className="font-semibold text-secondary">فهرست مطالب</h2>
                                    <ul className="space-y-1">
                                        <>
                                            {headers.map((item) => (
                                                <li key={item} className={`transition-colors`}>
                                                    <Link href={`#${item}`} className={`block truncate text-secondary hover:text-brand-tertiary`}>
                                                        {HTMLReactParser(item)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </>
                                    </ul>
                                </nav>
                            </div>
                        )}
                        <div>
                            <article className="md:prose-md prose mb-12 max-w-container prose-h2:scroll-mt-24 prose-h3:scroll-mt-24 prose-h4:scroll-mt-24 prose-p:text-justify prose-li:text-justify">
                                {blogItem.NewContent.map((item, index) => {
                                    if (item.__component.endsWith("faq")) {
                                        return (
                                            <div key={index} className="prose-slate [&_h3]:m-0! [&_p]:m-0!">
                                                <h2>سؤالات متداول</h2>
                                                <FAQList
                                                    faqs={item.Item.map((item) => ({
                                                        ...item,
                                                        question: item.Question,
                                                        answer: item.Answer,
                                                    }))}
                                                />
                                            </div>
                                        );
                                    }
                                    if (item.__component.endsWith(".banner")) {
                                        // ror(item);
                                        return (
                                            <Link key={index} href={item.URL}>
                                                <Image
                                                    width={item.Image.width}
                                                    height={item.Image.height}
                                                    alt={item.Image.alternativeText}
                                                    src={`${strapiBaseUrl}${item.Image.url}`}
                                                />
                                            </Link>
                                        );
                                    }
                                    return (
                                        <Fragment key={index}>
                                            {HTMLReactParser(item.content ?? "", {
                                                transform(reactNode) {
                                                    if (reactNode.type == "ul") {
                                                        return (
                                                            <ul dir="auto" style={reactNode.props.style} className={reactNode.props?.className}>
                                                                {reactNode.props.children}
                                                            </ul>
                                                        );
                                                    }
                                                    return reactNode;
                                                },
                                            })}
                                            <br />
                                        </Fragment>
                                    );
                                })}
                            </article>
                            <div className="-mt-px flex flex-row items-start justify-between gap-y-8 border-t border-secondary pt-6 md:flex-row">
                                <div className="flex items-center gap-3 md:gap-4">
                                    نویسنده:
                                    <div>
                                        <p className="text-md font-semibold text-primary md:text-lg">{blogItem.author}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">{blogItem.publishedAt}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
