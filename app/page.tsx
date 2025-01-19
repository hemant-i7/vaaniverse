"use client";
import Link from 'next/link';
import React from 'react';
import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { Navbar } from '@/components/navbar';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#180161]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FB773C"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              VaaniVerse
            </h1>
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-4xl mx-auto">
              <Cover className="bg-gradient-to-r from-[#EB3678] to-[#FB773C] bg-clip-text text-transparent">
                Awaaz ka Magic, Har Bhasha Fantastic!
              </Cover>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex justify-center gap-6"
          >
             <Link href="/dashboard">
              <Button className="bg-[#EB3678] hover:bg-[#FB773C] text-white text-lg px-8 py-6">
                Start Now
              </Button>
             </Link>
            <Button
              variant="outline"
              className="border-[#4F1787] text-black hover:bg-[#4F1787] text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#180161] to-[#4F1787]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Language Support",
                description: "Seamlessly switch between languages with ease",
                icon: "🌐",
              },
              {
                title: "Voice Recognition",
                description: "Advanced AI-powered voice recognition technology",
                icon: "🎙️",
              },
              {
                title: "Real-time Translation",
                description: "Instant translation across multiple languages",
                icon: "🔄",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-[#FB773C] group-hover:text-[#EB3678] transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/80 group-hover:text-white transition-colors">
                  {feature.description}
                </p>
                <div className="mt-4 overflow-hidden">
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#EB3678] to-[#FB773C] transition-all duration-300 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#180161]">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© 2024 VaaniVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

