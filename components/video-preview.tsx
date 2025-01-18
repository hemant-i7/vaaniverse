interface VideoPreviewProps {
  url: string
}

export function VideoPreview({ url }: VideoPreviewProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Video Preview</label>
      <div className="aspect-video rounded-lg bg-black/50 backdrop-blur flex items-center justify-center">
        {url ? (
          <iframe
            src={`https://www.youtube.com/embed/${url.split('v=')[1]}`}
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p className="text-white/60">Please enter a valid YouTube URL to preview the video.</p>
        )}
      </div>
    </div>
  )
}

