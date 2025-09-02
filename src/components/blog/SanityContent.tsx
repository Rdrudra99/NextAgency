import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8 relative h-80 w-full overflow-hidden rounded-lg">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog post image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <Link 
          href={value.href}
          rel={rel}
          target={target}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="my-4 text-gray-700 dark:text-gray-200 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-6 my-4 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-6 my-4 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-gray-700 dark:text-gray-200">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-700 dark:text-gray-200">{children}</li>
    ),
  },
};

interface SanityContentProps {
  content: any[];
}

export default function SanityContent({ content }: SanityContentProps) {
  return (
    <div className="prose prose-blue dark:prose-invert max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
