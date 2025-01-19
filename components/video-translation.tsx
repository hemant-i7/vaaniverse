'use client'

import { useState } from 'react'
import { VideoDetails, TranslationProgress, SupportedLanguage } from '@/types/video'

interface VideoTranslationProps {
  videoDetails: VideoDetails
  targetLanguage: SupportedLanguage
  directPost: boolean
  onProgress: (progress: TranslationProgress) => void
  onComplete: (translatedVideoUrl: string) => void
}

export function VideoTranslation({ 
  targetLanguage, 
  directPost, 
  onProgress, 
  onComplete 
}: VideoTranslationProps) {
  const [isTranslating, setIsTranslating] = useState(false)

  const translateVideo = async () => {
    setIsTranslating(true)
    
    // Simulate translation process
    for (let i = 0; i <= 10; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const percentage = i * 10
      onProgress({
        percentage,
        status: 'processing',
        message: directPost 
          ? `Translating and preparing to post (${percentage}%)`
          : `Translating video (${percentage}%)`
      })
    }

    // Simulate post-translation actions
    if (directPost) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      onProgress({
        percentage: 100,
        status: 'completed',
        message: 'Translation completed and posted!'
      })
    } else {
      onProgress({
        percentage: 100,
        status: 'completed',
        message: 'Translation completed!'
      })
    }

    setIsTranslating(false)
    onComplete(`https://example.com/translated-video-${targetLanguage}.mp4`)
  }

  return (
    <button
      onClick={translateVideo}
      disabled={isTranslating}
      className="w-full bg-[#EB3678] hover:bg-[#FB773C] py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isTranslating ? 'Translating...' : 'Start Translation'}
    </button>
  )
}

