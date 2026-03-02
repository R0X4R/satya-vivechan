// components/BlogListSkeleton.tsx
const BlogListSkeleton = () => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className="animate-pulse bg-lime-100 p-4 dark:bg-neutral-800">
                    <div className="h-48 w-full rounded bg-lime-200 dark:bg-neutral-700" />
                    <div className="mt-4 h-4 w-3/4 rounded bg-lime-200 dark:bg-neutral-700" />
                    <div className="mt-2 h-3 w-full rounded bg-lime-200 dark:bg-neutral-700" />
                    <div className="mt-2 h-3 w-1/2 rounded bg-lime-200 dark:bg-neutral-700" />
                </div>
            ))}
        </div>
    )
}

export default BlogListSkeleton
