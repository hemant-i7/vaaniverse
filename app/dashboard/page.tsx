'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Loader2, Pencil, Trash2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Navbar } from '@/components/navbar'

// Available languages
const LANGUAGES = [
  { value: 'hindi', label: 'Hindi' },
  { value: 'marathi', label: 'Marathi' },
  { value: 'gujarati', label: 'Gujarati' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'kannada', label: 'Kannada' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'malayalam', label: 'Malayalam' },
  { value: 'punjabi', label: 'Punjabi' },
  { value: 'odia', label: 'Odia' }
]

// Blog content remains the same
const BLOG_CONTENT = {
  title: "Break Free from Mindless Scrolling: A Guide to a Healthier, Happier Life",
  content: `In today's digital age, it's easy to lose hours scrolling mindlessly on your phone or computer. While this habit might feel harmless, it can lead to missed opportunities and a decline in overall well-being. Here's how you can transform your routine and live a more productive, fulfilling life:

1. Set Clear Goals
Start by defining what you want to achieve. Use the SMART method (Specific, Measurable, Achievable, Relevant, and Time-bound) to create actionable goals. For instance, decide to exercise 4 times a week or read 2 books a month.

2. Reduce Screen Time
Excessive screen time eats away at valuable hours. Use tools to track and limit your device usage. Replace screen time with hobbies, sports, or quality time with family and friends.

3. Adopt Healthy Habits
Stay Active: Incorporate regular exercise, whether it's yoga, jogging, or your favorite sport.
Eat Right: Maintain a balanced diet rich in fruits, vegetables, and whole grains.
Quit Harmful Habits: Let go of smoking and drinking to improve your health and save money.

4. Take Care of Your Appearance
A skincare routine can boost your confidence. Choose products suited to your skin type and stick to a simple daily regimen.

5. Pursue Continuous Learning
Expand your mind by reading books, listening to podcasts, or enrolling in online courses. Lifelong learning keeps you competitive and sharp.

6. Build Passive Income Streams
Explore ways to earn money online, such as blogging, freelancing, or investing. Passive income can provide financial stability and reduce stress.`
}

export default function Dashboard() {
  const [videoUrl, setVideoUrl] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Future of AI Technology',
      language: 'en',
      status: 'published',
      accuracy: 95,
      views: 1200
    }
  ])

  // Validate YouTube URL
  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
    return youtubeRegex.test(url)
  }

  // Handle video submission
  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidYouTubeUrl(videoUrl)) {
      alert('Please enter a valid YouTube URL')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 20000)
  }

  // Handle blog generation
  const handleGenerateBlog = () => {
    setIsLoading(true)
    setTimeout(() => {
      setShowBlog(true)
      setIsLoading(false)
    }, 7500)
  }

  // Handle blog deletion
  const handleDeleteBlog = (id: number) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      setBlogs(blogs.filter(blog => blog.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-[#180161]">
  <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-16">
          {/* Video Dubbing Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Video Dubbing</h2>
            <Card className="p-6">
              <form onSubmit={handleVideoSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter YouTube video URL..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                          {language.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="text"
                    placeholder="Duration (N/A)"
                    disabled
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !videoUrl}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Start Translation'
                  )}
                </Button>
              </form>

              {/* Video Player */}
              {!isLoading && videoUrl && (
                <div className="mt-4">
                  <video
                    src="${videoUrl}"
                    controls
                    className="w-full rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </Card>
          </section>

          {/* Blog Management Section */}
          <section className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Blog Management</h2>
              <Button onClick={handleGenerateBlog} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Blog'
                )}
              </Button>
            </div>
            <Card className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 text-gray-900">Title</th>
                      <th className="text-left p-4 text-gray-900">Language</th>
                      <th className="text-left p-4 text-gray-900">Status</th>
                      <th className="text-left p-4 text-gray-900">Translation Accuracy</th>
                      <th className="text-left p-4 text-gray-900">Views</th>
                      <th className="text-left p-4 text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr key={blog.id} className="border-b">
                        <td className="p-4 text-gray-700">{blog.title}</td>
                        <td className="p-4 text-gray-700">{blog.language}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                            {blog.status}
                          </span>
                        </td>
                        <td className="p-4 text-gray-700">{blog.accuracy}%</td>
                        <td className="p-4 text-gray-700">{blog.views}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleDeleteBlog(blog.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* Blog Content Section */}
          {showBlog && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Generated Blog</h2>
              <Card className="p-6">
                <article className="prose max-w-none">
                  <h1>{BLOG_CONTENT.title}</h1>
                  <div className="whitespace-pre-wrap">{BLOG_CONTENT.content}</div>
                </article>
              </Card>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}

