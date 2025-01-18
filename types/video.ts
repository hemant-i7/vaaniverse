export interface VideoDetails {
  url: string;
  duration?: string;
  title?: string;
  thumbnail?: string;
}

export interface TranslationProgress {
  percentage: number;
  status: 'processing' | 'completed' | 'error';
  message?: string;
}


export type SupportedLanguage = "hindi" | "marathi" | "gujarati" | "tamil" | "kannada" | "telugu" | "bengali" | "malayalam" | "punjabi" | "odia";

