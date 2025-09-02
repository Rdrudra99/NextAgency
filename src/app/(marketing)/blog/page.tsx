import { client } from "@/lib/sanity";
import { getAllPostsQuery } from "@/lib/queries";
import { Post } from "@/lib/types";
import BlogList from "@/components/blog/BlogList";
import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { Bricolage_Grotesque } from "next/font/google";

export const revalidate = 3600; // Revalidate every hour
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Improve font loading performance
  variable: "--font-bricolage", // For CSS variable usage
});
async function getData() {
  const posts = await client.fetch<Post[]>(getAllPostsQuery);
  return posts;
}

export default async function BlogPage() {
  const posts = await getData();

  return (
    <section
      className={`lg:pt-48 pt-28 container mx-auto ${bricolage.className}`}
    >
    {/* header title for this blog page */}
    <div className="mx-auto w-full max-w-3xl text-center">
      <h1 className="text-4xl font-bold">
        Read Our Latest Articles and Insights
      </h1>
      <p className='text-muted-foreground mt-4 text-lg max-w-3xl mx-auto'>
        Stay updated with our latest blog posts and articles, designed to provide you with valuable insights and information.
      </p>
    </div>
      <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>{" "}
      c
    </section>
  );
}
