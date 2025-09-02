import { client } from "@/lib/sanity";
import { getRecentPostsQuery } from "@/lib/queries";
import { Post } from "@/lib/types";
import Link from "next/link";
import BlogCard from "./BlogCard";

export const revalidate = 3600; // Revalidate every hour

async function getRecentPosts() {
  const posts = await client.fetch<Post[]>(getRecentPostsQuery);
  return posts;
}

export default async function RecentBlogPosts() {
  const posts = await getRecentPosts();

  if (!posts.length) return null;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest From Our Blog
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Stay updated with our latest insights, tips, and industry news
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
