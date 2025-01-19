'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Youtube, Globe, Clock, Play, PenTool, Send } from 'lucide-react';

const steps = [
  { icon: Youtube, title: "Paste YouTube URL", description: "Start by copying and pasting the URL of the YouTube video you want to translate." },
  { icon: Globe, title: "Select Language", description: "Choose the language you want to listen to the video in from our supported languages." },
  { icon: Clock, title: "Set Duration", description: "Specify the duration of the video you want to translate (optional)." },
  { icon: Play, title: "Start Translation", description: "Click the 'Start Translation' button to begin the AI-powered translation process." },
  { icon: PenTool, title: "Create a Blog", description: "Use the translated content to create an informative blog post." },
  { icon: Send, title: "Publish Your Blog", description: "Share your knowledge by publishing your blog on our portal." },
];

const languages = [
  "Hindi", "Marathi", "Gujarati", "Tamil", "Kannada",
  "Telugu", "Bengali", "Malayalam", "Punjabi", "Odia"
];

export default function Tutorial() {
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
          How to Use VaaniVerse 🚀
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Follow this simple guide to translate, learn, and share knowledge across languages!
        </motion.p>
      </section>

      {/* Step-by-Step Guide */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-none overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <step.icon className="w-12 h-12 mb-4 text-[#EB3678] group-hover:text-[#FB773C] transition-colors duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#FB773C] transition-colors duration-300">{step.title}</h3>
                  <p className="text-center text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Additional Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Do More with VaaniVerse 💡</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
          >
            <PenTool className="w-12 h-12 mb-4 text-[#EB3678]" />
            <h3 className="text-xl font-semibold mb-2 text-white">Create a Blog</h3>
            <p className="text-gray-300">Transform your translated content into an engaging blog post. Share your insights and knowledge with the world!</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
          >
            <Send className="w-12 h-12 mb-4 text-[#FB773C]" />
            <h3 className="text-xl font-semibold mb-2 text-white">Publish on Our Portal</h3>
            <p className="text-gray-300">Join our community of learners and educators. Publish your blog on our portal and reach a wider audience!</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#EB3678] to-[#FB773C]">Ready to Start Your Journey? 🌟</h2>
        <Button className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
          Begin Translating Now <ArrowRight className="ml-2" />
        </Button>
      </section>
    </div>
  );
}

