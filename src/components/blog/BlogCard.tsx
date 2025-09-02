import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/types";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: Post;
  className?: string;
}

export default function BlogCard({ post, className }: BlogCardProps) {
  return (
    <div 
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-900",
        className
      )}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute bottom-4 left-4 z-10">
          {post.categories?.map((category) => (
            <span
              key={category._id}
              className="mr-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"
            >
              {category.title}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-900 dark:text-white line-clamp-2">
          <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            {post.author.image && (
              <div className="relative mr-3 h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={urlFor(post.author.image).width(100).height(100).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {post.author.name}
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {format(new Date(post._createdAt), "MMM dd, yyyy")}
          </span>
        </div>
      </div>
    </div>
  );
}
