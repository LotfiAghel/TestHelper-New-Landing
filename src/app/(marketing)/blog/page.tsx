import { Fragment } from "react";
import { Blog } from "@/components/marketing/blog/blog";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { strapiBaseUrl } from "@/utils/consts";
import { Article } from "@/components/marketing/blog/base-components/blog-cards";

async function getPost() {
  const res = await fetch(`${strapiBaseUrl}/api/blog-posts/all/onlylinks`, {
    next: {
      revalidate: 300
    }
  });
  return res.json();
}

const BlogPage = async ({ searchParams }) => {
  const articles: Article[] = await getPost();
  const searchResult = await searchParams;
 
  return (
    <Fragment>
      <Header />
      <Blog articles={articles.map((item: Article): Article => {
        return {
          ...item,
          mainimage: {
            ...item.mainimage,
            fullUrl: strapiBaseUrl + item?.mainimage?.url,
          },
          link: `/blog/${item.category}/${encodeURIComponent(item.slug)}`,
          publishedAt: new Date(item.publishedAt).toLocaleDateString("fa-IR"),
        }
      })}
        page={searchResult.page ? parseInt(searchResult.page) : 1}
      />
      <FooterMain />
    </Fragment>
  );
};

export default BlogPage;
