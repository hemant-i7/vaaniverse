'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { mockBlogs, mockCategories } from '@/data/mockBlogs'
import { BlogFilter } from '@/types/blog'

export function BlogPortal() {
  const [filter, setFilter] = useState<BlogFilter>({})
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#EB3678]"
          />
        </div>
        <div className="flex gap-4">
          <select
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EB3678]"
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="">All Categories</option>
            {mockCategories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EB3678]"
            onChange={(e) => setFilter({ ...filter, language: e.target.value })}
          >
            <option value="">All Languages</option>
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="tamil">Tamil</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="flex gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-white/60 mb-4 flex-1">{blog.excerpt}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white/60">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex gap-2">
                  {Object.keys(blog.translations).map((lang) => (
                    <a
                      key={lang}
                      href={`/blog/${blog.translations[lang].slug}`}
                      className="text-[#EB3678] hover:text-[#FB773C] text-sm"
                    >
                      {lang}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

