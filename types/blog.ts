export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  language: string
  originalLanguage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  status: 'draft' | 'published'
  translations: {
    [key: string]: {
      title: string
      content: string
      excerpt: string
      slug: string
    }
  }
  analytics: {
    views: number
    engagement: number
  }
  translationAccuracy: {
    [key: string]: number
  }
}

export interface Category {
  id: string
  name: string
  slug: string
}

export interface BlogFilter {
  category?: string
  language?: string
  tags?: string[]
  status?: 'draft' | 'published'
}

