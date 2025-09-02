export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="animate-spin h-12 w-12 rounded-full border-t-2 border-b-2 border-blue-600"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading post...</p>
    </div>
  );
}
