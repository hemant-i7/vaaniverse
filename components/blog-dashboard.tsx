'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit2, Trash2, BarChart2 } from 'lucide-react'
import { mockBlogs } from '@/data/mockBlogs'
import { BlogPost, BlogFilter } from '@/types/blog'

export function BlogDashboard() {
  const [filter, setFilter] = useState<BlogFilter>({})
  const [blogs, setBlogs] = useState<BlogPost[]>()

  console.log(filter)

  useEffect(() =>{
    setFilter({})
    setBlogs(mockBlogs)
  },[])

  

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <button className="bg-[#EB3678] hover:bg-[#FB773C] px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Blog Post
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Language</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Translation Accuracy</th>
                <th className="text-left py-3 px-4">Views</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs && blogs.map((blog) => (
                <tr key={blog.id} className="border-b border-white/10">
                  <td className="py-3 px-4">{blog.title}</td>
                  <td className="py-3 px-4">{blog.language}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      blog.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1">
                      {Object.entries(blog.translationAccuracy).map(([lang, accuracy]) => (
                        <div key={lang} className="flex items-center gap-2">
                          <span className="text-sm">{lang}:</span>
                          <div className="w-24 h-2 bg-white/10 rounded-full">
                            <div
                              className="h-2 bg-[#EB3678] rounded-full"
                              style={{ width: `${accuracy}%` }}
                            />
                          </div>
                          <span className="text-sm">{accuracy}%</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">{blog.analytics.views}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg">
                        <BarChart2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

