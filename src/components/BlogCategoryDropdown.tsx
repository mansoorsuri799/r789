'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS, CORE_ROUTES } from '@/lib/appFacts';

const BlogCategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = BLOG_POSTS.map((post) => ({
    name: post.category,
    href: `${CORE_ROUTES.blog}/${post.slug}`,
    label: post.title,
  }));

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-2 bg-secondary text-white rounded-md"
      >
        <span>Select Category</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full md:w-80 mt-1 bg-secondary rounded-md shadow-lg">
          <ul className="py-1">
            {categories.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="block px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-semibold text-accent">{cat.name}: </span>
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogCategoryDropdown;
