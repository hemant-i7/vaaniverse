import { BlogDashboard } from '@/components/blog-dashboard'
import { BlogPortal } from '@/components/blog-portal'
import { Navbar } from '@/components/navbar'
import { VideoDubbing } from '@/components/video-dubbing'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-[#180161] text-white">
      <Navbar/>
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-16">
          <VideoDubbing />
          <BlogDashboard />
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Blog Portal</h2>
            <BlogPortal />
          </section>
        </div>
      </main>
    </div>)
}

export default page