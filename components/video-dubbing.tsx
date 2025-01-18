"use client";

import { useState } from "react";
import { Youtube } from "lucide-react";
import { VideoPreview } from "./video-preview";
import { VideoTranslation } from "./video-translation";
import { Switch } from "@/components/ui/switch";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import { VideoDetails, TranslationProgress, SupportedLanguage } from "@/types/video";

// Removed local declaration of SupportedLanguage to avoid conflict with imported declaration

export function VideoDubbing() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [progress, setProgress] = useState<TranslationProgress | null>(null);
  const [directPost, setDirectPost] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>("hindi");

  const languages: { code: SupportedLanguage; label: string }[] = [
    { code: "hindi", label: "Hindi" },
    { code: "marathi", label: "Marathi" },
    { code: "gujarati", label: "Gujarati" },
    { code: "tamil", label: "Tamil" },
    { code: "kannada", label: "Kannada" },
    { code: "telugu", label: "Telugu" },
    { code: "bengali", label: "Bengali" },
    { code: "malayalam", label: "Malayalam" },
    { code: "punjabi", label: "Punjabi" },
    { code: "odia", label: "Odia" },
  ];

  const handleTranslationProgress = (progress: TranslationProgress) => {
    setProgress(progress);
  };

  const handleTranslationComplete = (translatedVideoUrl: string) => {
    console.log("Translated video URL:", translatedVideoUrl);
  };

  return (
    <div>
    

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="videoUrl" className="block text-sm font-medium">
                YouTube Video URL
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="videoUrl"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtu.be/..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#EB3678] transition-all"
                />
                <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Language</label>
                <Select onValueChange={(value: string) => setSelectedLanguage(value as SupportedLanguage)} value={selectedLanguage}>
                  <SelectTrigger className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Duration</label>
                <input
                  type="text"
                  value={videoDetails?.duration || "N/A"}
                  readOnly
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none transition-all"
                />
              </div>
            </div>

            <VideoPreview url={videoUrl} />

            {progress && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{progress.message}</span>
                  <span>{progress.percentage}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-[#EB3678] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <label htmlFor="direct-post" className="text-sm font-medium">
                Direct Post After Translation
              </label>
              <Switch
                id="direct-post"
                checked={directPost}
                onCheckedChange={setDirectPost}
              />
            </div>

            <VideoTranslation
              videoDetails={{
                url: videoUrl,
                duration: videoDetails?.duration || "N/A",
                title: videoDetails?.title || "Untitled Video",
              }}
              targetLanguage={selectedLanguage}
              directPost={directPost}
              onProgress={handleTranslationProgress}
              onComplete={handleTranslationComplete}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
