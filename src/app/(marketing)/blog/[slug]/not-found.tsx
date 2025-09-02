import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Blog Post Not Found</h2>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        We couldn't find the blog post you're looking for.
      </p>
      <Link 
        href="/blog" 
        className="rounded-md bg-blue-600 px-5 py-2.5 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Back to Blog
      </Link>
    </div>
  );
}
