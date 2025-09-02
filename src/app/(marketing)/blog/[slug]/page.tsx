import { client } from "@/lib/sanity";
import { getPostBySlugQuery, getAllPostsQuery } from "@/lib/queries";
import { Post } from "@/lib/types";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import SanityContent from "@/components/blog/SanityContent";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600; // Revalidate every hour

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: "Not Found",
      description: "This page could not be found."
    };
  }

  return {
    title: `${post.title} | NextAgency Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(getAllPostsQuery);
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

async function getPost(slug: string) {
  const post = await client.fetch<Post>(getPostBySlugQuery, { slug });
  
  if (!post) {
    return null;
  }
  
  return post;
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Link 
            href="/blog"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            &larr; Back to all posts
          </Link>
          <span className="text-gray-400">/</span>
          {post.categories?.map((category) => (
            <span
              key={category._id}
              className="mr-2 rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium"
            >
              {category.title}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            {post.author?.image && (
              <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={urlFor(post.author.image).width(100).height(100).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {post.author?.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {format(new Date(post._createdAt), "MMMM dd, yyyy")}
              </p>
            </div>
          </div>
        </div>

        {post.mainImage && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt || post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="prose prose-blue max-w-none dark:prose-invert">
        <SanityContent content={post.body} />
      </div>
    </article>
  );
}
