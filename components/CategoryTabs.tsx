"use client";

import { categories, type Category } from "@/lib/products";

interface CategoryTabsProps {
  selected: "전체" | Category;
  onSelect: (category: "전체" | Category) => void;
}

const allTabs: ("전체" | Category)[] = ["전체", ...categories];

export default function CategoryTabs({
  selected,
  onSelect,
}: CategoryTabsProps) {
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="flex justify-between px-4 py-2">
        {allTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onSelect(tab)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition ${
              selected === tab
                ? "font-bold text-gray-900 underline underline-offset-4"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
