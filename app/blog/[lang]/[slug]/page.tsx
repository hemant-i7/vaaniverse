import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { mockBlogs } from '@/data/mockBlogs'

interface BlogPostPageProps {
  params: {
    lang: string
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blog = mockBlogs.find(blog => {
    if (params.lang === 'en') {
      return blog.slug === params.slug
    }
    return blog.translations[params.lang]?.slug === params.slug
  })

  if (!blog) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  const title = params.lang === 'en' ? blog.title : blog.translations[params.lang].title
  const description = params.lang === 'en' ? blog.excerpt : blog.translations[params.lang].excerpt

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: [blog.author]
    },
    alternates: {
      canonical: `/blog/${params.lang}/${params.slug}`,
      languages: {
        'en': `/blog/en/${blog.slug}`,
        ...Object.entries(blog.translations).reduce((acc, [lang, translation]) => ({
          ...acc,
          [lang]: `/blog/${lang}/${translation.slug}`
        }), {})
      }
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = mockBlogs.find(blog => {
    if (params.lang === 'en') {
      return blog.slug === params.slug
    }
    return blog.translations[params.lang]?.slug === params.slug
  })

  if (!blog) {
    notFound()
  }

  const content = params.lang === 'en' ? blog.content : blog.translations[params.lang].content
  const title = params.lang === 'en' ? blog.title : blog.translations[params.lang].title

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex gap-4 text-white/60">
          <time dateTime={blog.publishedAt}>
            {new Date(blog.publishedAt).toLocaleDateString()}
          </time>
          <span>•</span>
          <span>{blog.author}</span>
        </div>
      </header>
      <div className="prose prose-invert max-w-none">
        {content}
      </div>
      <footer className="mt-8 pt-8 border-t border-white/10">
        <div className="flex flex-wrap gap-4">
          {Object.entries(blog.translations).map(([lang, translation]) => (
            <a
              key={lang}
              href={`/blog/${lang}/${translation.slug}`}
              className="text-[#EB3678] hover:text-[#FB773C]"
            >
              Read in {lang}
            </a>
          ))}
        </div>
      </footer>
    </article>
  )
}

