import { BlogPost } from '@/types/blog'

export const mockBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI Technology',
    slug: 'future-of-ai-technology',
    content: 'Artificial Intelligence is revolutionizing every industry...',
    excerpt: 'Explore how AI is changing the technological landscape...',
    language: 'en',
    originalLanguage: 'en',
    category: 'technology',
    tags: ['AI', 'technology', 'future'],
    author: 'John Doe',
    publishedAt: '2025-01-19T00:00:00Z',
    status: 'published',
    translations: {
      hindi: {
        title: 'एआई तकनीक का भविष्य',
        slug: 'future-of-ai-technology-hindi',
        content: 'कृत्रिम बुद्धिमत्ता हर उद्योग में क्रांति ला रही है...',
        excerpt: 'जानें कैसे एआई तकनीकी परिदृश्य को बदल रही है...',
      },
      tamil: {
        title: 'AI தொழில்நுட்பத்தின் எதிர்காலம்',
        slug: 'future-of-ai-technology-tamil',
        content: 'செயற்கை நுண்ணறிவு ஒவ்வொரு தொழிலையும் புரட்சிகரமாக மாற்றி வருகிறது...',
        excerpt: 'AI எவ்வாறு தொழில்நுட்ப நிலப்பரப்பை மாற்றுகிறது...',
      }
    },
    analytics: {
      views: 1200,
      engagement: 85
    },
    translationAccuracy: {
      hindi: 95,
      tamil: 92
    }
  }
]

export const mockCategories = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Science', slug: 'science' },
  { id: '3', name: 'Culture', slug: 'culture' }
]

