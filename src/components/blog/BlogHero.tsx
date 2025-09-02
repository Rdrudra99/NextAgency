import { cn } from "@/lib/utils";

interface BlogHeroProps {
  title: string;
  description?: string;
  className?: string;
}

export default function BlogHero({ title, description, className }: BlogHeroProps) {
  return (
    <div className={cn("relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24", className)}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[url('/workprocess-shape2.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-3xl text-xl text-white/80">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
