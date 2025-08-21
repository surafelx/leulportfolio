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
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-green-100 mb-4">
                <TypewriterEffect
                  text="ART DIRECTOR"
                  delay={500}
                  speed={150}
                  className="text-white font-bold uppercase tracking-widest"
                />
              </div>
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

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="flex items-center justify-start gap-6 mt-8"
            >
              <motion.a
                href="https://linkedin.com/in/leoulsolomon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-green-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://behance.net/leoulsolomon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-green-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 4.4v15.2A4.4 4.4 0 0 0 4.4 24h15.2a4.4 4.4 0 0 0 4.4-4.4V4.4A4.4 4.4 0 0 0 19.6 0H4.4A4.4 4.4 0 0 0 0 4.4zM8.24 9.2h2.64c1.44 0 2.4.96 2.4 2.16 0 .72-.48 1.44-1.2 1.68v.24c1.2.24 1.92 1.2 1.92 2.4 0 1.68-1.44 2.88-3.36 2.88H8.24V9.2zm1.68 3.36h.96c.72 0 1.2-.48 1.2-1.2s-.48-1.2-1.2-1.2h-.96v2.4zm0 3.36h1.2c.96 0 1.44-.48 1.44-1.44s-.48-1.44-1.44-1.44h-1.2v2.88zm6.24-6.72h1.68v1.2h-1.68v-1.2zm0 2.4h1.68v6h-1.68v-6z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://instagram.com/leoulsolomon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-green-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://twitter.com/leoulsolomon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-green-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://dribbble.com/leoulsolomon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:text-green-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-7.512-1.538-7.512-1.538s-.669-1.417-1.479-3.193c3.409-1.418 6.718.033 6.718.033zM12 2.302c2.207 0 4.22.861 5.72 2.268 0 0-2.85-1.344-6.141-.126-.991-1.836-2.133-3.379-2.133-3.379S10.7 2.302 12 2.302zM8.335 3.678s1.107 1.523 2.108 3.414c-2.638 1.086-4.958 1.072-4.958 1.072S5.956 6.314 8.335 3.678zM2.302 12c0-.024.003-.048.003-.072 0 0 2.71.003 5.869-.126 1.065 2.067 1.497 3.858 1.497 3.858-2.444 1.274-4.73 3.258-4.73 3.258C3.218 17.07 2.302 14.696 2.302 12zm9.644 9.644c-1.904 0-3.684-.555-5.188-1.495 0 0 1.945-1.668 4.512-3.024.555 1.435 1.081 3.519 1.081 3.519s-.405.000-.405.000zm1.081-1.548s-.555-2.309-1.081-3.519c2.729-.378 5.417.252 5.417.252-.378 1.958-1.61 3.63-3.336 4.267z"/>
                </svg>
              </motion.a>
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
