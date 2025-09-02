import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/types";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { client } from "@/lib/sanity";
import { getRecentPostsQuery } from "@/lib/queries";
import { Calendar, ChevronRight } from "lucide-react";

export const revalidate = 3600; // Revalidate every hour

async function getRecentPosts() {
  const posts = await client.fetch<Post[]>(getRecentPostsQuery);
  return posts;
}

export default async function OptimizedBlogSection() {
  const posts = await getRecentPosts();

  if (!posts?.length) return null;

  // Map your data to the structure needed for the new component
  const blogCards = posts.slice(0, 3).map(post => ({
    id: post._id,
    title: post.title,
    image: post.mainImage ? urlFor(post.mainImage).url() : "https://images.unsplash.com/photo-1536735561749-fc87494598cb",
    category: post.categories?.[0]?.title || "Business",
    date: format(new Date(post._createdAt), "MMMM, dd, yyyy"),
    slug: post.slug.current
  }));

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span 
            data-slot="badge" 
            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
          >
            Articles
          </span>
          <h1 className="text-4xl font-semibold text-balance">Discover the latest trends</h1>
          <p className="text-muted-foreground">
            Explore our blog for insightful articles, personal reflections and ideas that inspire action on the topics you care about.
          </p>
          <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold">
            View All Blogs
            <ChevronRight className="h-full w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogCards.map(card => (
            <div key={card.id} className="flex flex-col">
              <div className="relative">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <span 
                  data-slot="badge" 
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&]:hover:bg-secondary/90 absolute top-4 right-4 bg-background/70 px-3 py-1 text-sm backdrop-blur-sm"
                >
                  {card.category}
                </span>
              </div>
              <div className="flex h-full flex-col justify-between p-4">
                <h2 className="mb-5 text-xl font-semibold">{card.title}</h2>
                <div className="flex justify-between gap-6 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {card.date}
                  </span>
                  <Link href={`/blog/${card.slug}`} className="flex items-center gap-1">
                    Read more
                    <ChevronRight className="h-full w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
