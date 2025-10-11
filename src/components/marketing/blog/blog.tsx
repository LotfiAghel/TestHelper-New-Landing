import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { type Article, Simple03Horizontal, Simple03Vertical } from "@/components/marketing/blog/base-components/blog-cards";
import { cx } from "@/utils/cx";

const slice = 6

export const Blog = ({
    articles,
    page = 1 }: {
        articles: Article[];
        page: number;
    }) => {
    const start = (page - 1) * slice, end2 = (page) * slice;
    const end = (start + end2) / 2;
    return (
        <div className="bg-primary">
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="mx-auto flex w-full flex-col items-center text-center">
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">بلاگ</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">مقالات بلاگ بهت کمک می‌کنن مسیر آماده‌سازی رو کوتاه‌تر و مطمئن‌تر طی کنی.</p>
                </div>
            </section>

            <section className="mx-auto flex w-full max-w-container flex-col gap-8 bg-primary px-4 pb-16 md:px-8 md:pb-24">
                <h2 className="text-xl font-semibold text-primary md:text-display-xs">مطالب اخیر</h2>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-8">
                    {articles.slice(start, end).map((article, index) => (
                        <li key={article.id} className={cx(index == 0 ? "xl:row-span-2" : "xl:flex-row xl:gap-6", "flex flex-col gap-6 md:gap-8")}>
                            {index === 0 ? <Simple03Vertical article={article} /> : <Simple03Horizontal article={article} imageClassName="xl:w-80" />}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mx-auto flex w-full max-w-container flex-col gap-8 bg-primary px-4 pb-16 md:px-8 md:pb-24 lg:gap-16">
                <div className="flex flex-col gap-8">
                    <h2 className="text-xl font-semibold text-primary md:text-display-xs">تمام مطالب </h2>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.slice(end, end2).map((article) => (
                            <li key={article.id} className={cx("nth-[n+4]:hidden")}>
                                <Simple03Vertical className="h-full" article={article} />
                            </li>
                        ))}
                    </ul>
                </div>
                <PaginationPageDefault page={page} total={Math.ceil(articles.length / slice)} rounded />
            </section>
        </div>
    );
};
