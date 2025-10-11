import { BlogContent } from "@/components/marketing/content/blog-content";
import { FooterMain } from "@/components/marketing/footers/footer-main";
import { Header } from "@/components/marketing/header-navigation/header";
import { defaultMetadata, strapiBaseUrl } from "@/utils/consts";


export async function generateMetadata({
  params
}:
  {
    params: { slug: string, category: string }
  }
) {
  const { post } = await getPost(params);

  if (!post) {
    return defaultMetadata;
  }

  const ogImage = post.mainimage ? `${strapiBaseUrl}${post?.mainimage.url}` : defaultMetadata.openGraph.images[0]?.url;

  return {
    title: post.title,
    description: post.SeoDescription || defaultMetadata.description,
    keywords: post.SeoKeywords || defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: post.title,
      description: post.SeoDescription || defaultMetadata.description,
      images: [
        {
          url: ogImage,
          width: post.mainimage?.width || 1200,
          height: post.mainimage?.height || 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: post.title,
      description: post.SeoDescription || defaultMetadata.description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${strapiBaseUrl}/api/blog-posts/all/onlylinks`, {
    next: { revalidate: 60 },
  });

  const posts = await res.json()

  return posts.map((post: any) => ({
    slug: post.slug,
    category: post.category ? post?.category?.toLowerCase() : 'all',
  }));
}

async function getPost(params: { slug: string, category: string }) {
  const { slug, category } = params;

  const data = await fetch(`${strapiBaseUrl}/api/blog-posts/slug/${slug}`, {
    next: { revalidate: 60 },
  }).then(res => res.json());

  const { post, relatedPosts } = data
  // const allPostsres = await fetch(`${strapiBaseUrl}/api/blog-posts/category/${category}`)
  //   .then(res => res.json());
  post.publishedAt = new Date(post.updatedAt).toLocaleDateString("fa-IR");
  return {
    post: post,
    allposts: relatedPosts
  };
}


export default async function BlogDetailsPage1({ params }: {
  params: { slug: string, category: string }
}) {
  const { post, allposts } = await getPost(params);
  let headers: any[] = [];
  const findHeaders = (value: string) => {
    const [titles, text] = replaceTitlesWithLinks(value);
    headers = headers.concat(titles);
    return text;
  }

  function replaceTitlesWithLinks(text:string) {
    const titles = [];
    const regex = /##(.*?)##/g;

    const matches = text.matchAll(regex);

    for (const match of matches) {
      titles.push(match[1]);
    }

    // Perform the replacement
    const replacedText = text.replace(regex, '<a href="#" id="$1">$1</a>');

    return [titles, replacedText]
  }

  post.title = findHeaders(post.title);
  post.NewContent = post.NewContent.map((item: any) => {
    if (item.__component.endsWith("faq") || item.__component.endsWith(".banner"))
      return item;
    item.content = findHeaders(item.content)
    return item;
  })
  console.error(post)
  return (
    <>
      <Header />
      <BlogContent
        blogItem={post}
        allPosts={allposts}
        headers={headers}
      />
      <FooterMain />
    </>
  );
};