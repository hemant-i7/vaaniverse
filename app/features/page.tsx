'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Video, Mic, Globe, PenTool } from 'lucide-react';

const features = [
  {
    title: "Input Options",
    icon: "📥",
    items: [
      { icon: FileText, text: "Text Input: Direct typing or file upload (.txt, .docx)" },
      { icon: Video, text: "Video Input: Upload videos (.mp4, .mov) for transcription" }
    ]
  },
  {
    title: "Transcription",
    icon: "🎙️",
    items: [
      { icon: Mic, text: "AI-powered Speech-to-Text conversion for video content" },
      { icon: Globe, text: "Automatic transcription to English text" }
    ]
  },
  {
    title: "Translation",
    icon: "🌐",
    items: [
      { icon: Globe, text: "Translate English content into 10 regional languages" },
      { icon: PenTool, text: "Advanced NLP models for accurate translations" }
    ]
  },
  {
    title: "Blog Publishing",
    icon: "📝",
    items: [
      { icon: PenTool, text: "Outputs translations into a blog format for each language" },
      { icon: Globe, text: "SEO-optimized content for better reach" }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#180161] to-[#4F1787] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#EB3678] to-[#FB773C]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          VaaniVerse Features
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the powerful capabilities that make VaaniVerse your ultimate language learning companion.
        </motion.p>
      </section>

      {/* Explore Our Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-none overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold mb-2 text-white group-hover:text-[#FB773C] transition-colors duration-300">
                    <span className="text-4xl mr-2">{feature.icon}</span>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-white">
                        <item.icon className="w-5 h-5 mr-2 mt-1 text-[#EB3678] group-hover:text-[#FB773C] transition-colors duration-300" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#EB3678] to-[#FB773C]">Ready to experience VaaniVerse?</h2>
        <Button className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
          Get Started Now <ArrowRight className="ml-2" />
        </Button>
      </section>
    </div>
  );
}

