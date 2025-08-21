'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import ManSilhouette from './ManSilhouette';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-green-600">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              'linear-gradient(135deg, #059669 0%, #047857 100%)',
              'linear-gradient(135deg, #047857 0%, #10b981 100%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6"
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-6 uppercase tracking-wider"
                whileHover={{
                  scale: 1.02,
                  textShadow: "0px 0px 20px rgba(255,255,255,0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(255,255,255,0)",
                      "0px 0px 20px rgba(255,255,255,0.3)",
                      "0px 0px 0px rgba(255,255,255,0)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Leoul Solomon
                </motion.span>
              </motion.h1>
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-green-100 mb-2">
                <TypewriterEffect
                  text="ART DIRECTOR"
                  delay={1000}
                  speed={150}
                  className="text-white font-bold uppercase tracking-widest"
                />
              </div>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-xl md:text-2xl lg:text-3xl text-green-100 mb-12 leading-relaxed font-body max-w-4xl"
            >
              Creating compelling visual narratives through innovative design,
              strategic branding, and cutting-edge motion graphics that captivate
              audiences and drive results.
            </motion.p>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12"
            >
              {['Key Visuals', 'Branding', 'TVC', 'Motion Graphics', '3D Design', 'Presentations'].map((specialty, index) => (
                <motion.span
                  key={specialty}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-green-800 border border-white/30 hover:border-white hover:bg-white transition-all duration-200"
                >
                  {specialty}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Link href="/work" className="btn btn-primary group">
                View My Work
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link href="/contact" className="btn btn-accent group">
                Get In Touch
                <Download className="ml-3 h-6 w-6 transition-transform group-hover:translate-y-2" />
              </Link>
            </motion.div>
          </div>

          {/* Silhouette Image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <ManSilhouette />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-white/40 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
