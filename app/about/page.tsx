'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Mic, PenTool, Users, Lock, BookOpen, Lightbulb, Target } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const languages = [
  "Hindi", "Marathi", "Gujarati", "Tamil", "Kannada",
  "Telugu", "Bengali", "Malayalam", "Punjabi", "Odia"
];

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Rapid transcription and translation" },
  { icon: Globe, title: "Multi-Language", description: "Support for 10 Indian languages" },
  { icon: Mic, title: "Voice Recognition", description: "Advanced AI-powered speech-to-text" },
  { icon: PenTool, title: "Smart Editing", description: "Easy-to-use interface for content refinement" },
  { icon: Users, title: "Collaboration", description: "Team-friendly features for group projects" },
  { icon: Lock, title: "Secure & Private", description: "Your data is protected and confidential" },
];

const missionPoints = [
  { icon: BookOpen, title: "Accessible Education", description: "Breaking language barriers in learning" },
  { icon: Lightbulb, title: "Innovative Technology", description: "Leveraging AI for seamless language processing" },
  { icon: Target, title: "Empowering Students", description: "Enabling knowledge sharing across languages" },
];

export default function About() {
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
          About VaaniVerse
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering students to learn with AI-powered transcription, translation, and publishing in 10 Indian languages.
        </motion.p>
        
        {/* New content about what we do and our motive */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {missionPoints.map((point, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-none overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="flex flex-col items-center p-6">
                <point.icon className="w-12 h-12 mb-4 text-[#EB3678] group-hover:text-[#FB773C] transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FB773C] transition-colors duration-300">{point.title}</h3>
                <p className="text-center text-gray-300">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        
        <motion.p
          className="text-lg mt-12 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          At VaaniVerse, we're on a mission to revolutionize education by breaking down language barriers. Our AI-powered platform enables students to access, create, and share knowledge across multiple Indian languages, fostering a more inclusive and diverse learning environment.
        </motion.p>
      </section>

      {/* Key Features Carousel */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white/10 backdrop-blur-md border-none overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex flex-col items-center p-6">
                      <feature.icon className="w-12 h-12 mb-4 text-[#EB3678] group-hover:text-[#FB773C] transition-colors duration-300" />
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FB773C] transition-colors duration-300">{feature.title}</h3>
                      <p className="text-center text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Language Support */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Supported Languages</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang, index) => (
            <motion.div
              key={lang}
              className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-[#EB3678] hover:to-[#FB773C] transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {lang}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#EB3678] to-[#FB773C]">Ready to get started?</h2>
        <Button className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
          Try VaaniVerse Now <ArrowRight className="ml-2" />
        </Button>
      </section>

      <p>
        Don&apos;t hesitate to reach out if you have any questions!
      </p>
    </div>
  );
}

