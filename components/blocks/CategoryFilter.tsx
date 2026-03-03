"use client";

type CategoryFilterProps = {
    categories: string[];
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
};

const CategoryFilter = ({
    categories,
    selectedCategory,
    onCategorySelect,
}: CategoryFilterProps) => {
    return (
        <div className="mt-5 mb-2 flex flex-wrap gap-3 py-4">
            {["All", ...categories].map((cat) => (
                <button
                    key={cat}
                    onClick={() => onCategorySelect(cat)}
                    className={`col-span-2 flex min-w-24 cursor-pointer items-center justify-center gap-2 rounded-xs p-3 text-xs font-medium uppercase outline-none selection:bg-lime-50 selection:text-lime-900 md:col-span-1 ${
                        selectedCategory === cat
                            ? "bg-lime-900 text-lime-50 dark:bg-white dark:text-[#121212]"
                            : "bg-lime-900/60 text-lime-50 hover:bg-lime-900/90 dark:bg-white/60 dark:text-[#121212] dark:hover:bg-white/90"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
