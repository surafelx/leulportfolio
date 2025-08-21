'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types/project';

interface PortfolioGridProps {
  title: string;
  subtitle?: string;
  category?: string;
  limit?: number;
  showViewAll?: boolean;
  comingSoon?: boolean;
}

export default function PortfolioGrid({
  title,
  subtitle,
  category,
  limit = 8,
  showViewAll = true,
  comingSoon = false
}: PortfolioGridProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchProjects();
  }, [category]);

  useEffect(() => {
    checkScrollButtons();
  }, [projects]);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const fetchProjects = async () => {
    try {
      const url = category ? `/api/projects?category=${category}` : '/api/projects';
      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setProjects(data.data.slice(0, limit));
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 300;
      const scrollAmount = cardWidth + 32; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 300;
      const scrollAmount = cardWidth + 32; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-center mb-20 lg:mb-24"
        >
          <motion.h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-wider"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(0,0,0,0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              {title}
            </motion.span>
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Projects Grid with Navigation - Optimized for 1920x1080 */}
        <div className="relative mb-12">
          {/* Left Arrow - Green Theme */}
          <motion.button
            onClick={scrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? 'opacity-100 hover:from-green-600 hover:to-emerald-700 hover:shadow-3xl transform hover:scale-125'
                : 'opacity-0 pointer-events-none'
            }`}
            whileHover={{
              scale: canScrollLeft ? 1.25 : 1,
              rotate: canScrollLeft ? -5 : 0
            }}
            whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
          >
            <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" />
          </motion.button>

          {/* Right Arrow - Green Theme */}
          <motion.button
            onClick={scrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? 'opacity-100 hover:from-emerald-600 hover:to-teal-700 hover:shadow-3xl transform hover:scale-125'
                : 'opacity-0 pointer-events-none'
            }`}
            whileHover={{
              scale: canScrollRight ? 1.25 : 1,
              rotate: canScrollRight ? 5 : 0
            }}
            whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
          >
            <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" />
          </motion.button>

          {/* Scrollable Grid Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-12"
            onScroll={checkScrollButtons}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-8 lg:gap-10 pb-6" style={{ width: 'max-content' }}>
              {comingSoon ? (
                // Coming Soon Display
                <div className="flex gap-8 lg:gap-10">
                  {[1, 2, 3, 4].map((index) => (
                    <motion.div
                      key={`coming-soon-${index}`}
                      initial={{ opacity: 0, y: 60, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="flex-shrink-0 w-96 lg:w-[420px] xl:w-[480px]"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-[16/10] mb-6 shadow-xl border-2 border-gray-300">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                              <span className="text-2xl font-bold text-white">🎬</span>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-700 uppercase tracking-wide mb-2">
                              Coming Soon
                            </h3>
                            <p className="text-gray-500 text-sm">
                              Exciting new content in development
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wide">
                          TVC Project {index}
                        </h3>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-gray-200 text-gray-500 text-xs font-bold rounded-full uppercase tracking-wider">
                            Coming Soon
                          </span>
                          <span className="text-sm text-gray-400 font-medium">
                            2024
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Professional television commercial in development. Stay tuned for updates.
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Regular Projects Display
                projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="group cursor-pointer flex-shrink-0 w-96 lg:w-[420px] xl:w-[480px]"
                  style={{ perspective: "1000px" }}
                >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 aspect-[16/10] mb-6 shadow-xl group-hover:shadow-3xl transition-all duration-500 border-2 border-green-200 group-hover:border-green-400">
                {/* Project Image/Video with Enhanced Effects */}
                <div className="relative w-full h-full transform-gpu">
                  {project.imageUrl.endsWith('.mp4') || project.imageUrl.endsWith('.mov') ? (
                    <motion.div
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 group-hover:from-green-200 group-hover:via-emerald-200 group-hover:to-teal-200 transition-all duration-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Play className="w-16 h-16 text-green-600 mx-auto mb-3 drop-shadow-lg" />
                        </motion.div>
                        <p className="text-base font-semibold text-gray-700 uppercase tracking-wide">Video Project</p>
                        <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 group-hover:from-lime-200 group-hover:via-green-200 group-hover:to-emerald-200 transition-all duration-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ImageIcon className="w-16 h-16 text-emerald-600 mx-auto mb-3 drop-shadow-lg" />
                        </motion.div>
                        <p className="text-base font-semibold text-gray-700 uppercase tracking-wide">{project.category}</p>
                        <p className="text-sm text-gray-500 mt-1">Creative Work</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Enhanced Overlay with Close-up Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end backdrop-blur-sm"
                  >
                    <div className="p-8 text-white w-full">
                      <motion.h3
                        initial={{ y: 30, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-xl font-bold mb-3 uppercase tracking-wide"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-sm text-gray-200 line-clamp-3 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mt-4 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-medium uppercase tracking-wider">
                          View Project
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Category Badge */}
                <div className="absolute top-6 left-6">
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-2 bg-white/95 backdrop-blur-md text-sm font-bold text-gray-800 rounded-full shadow-lg border-2 border-white/50 uppercase tracking-wide"
                  >
                    {project.category}
                  </motion.span>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-6 right-6 w-3 h-3 bg-blue-400/60 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-6 right-6 w-2 h-2 bg-green-400/60 rounded-full"
                />
              </div>

              {/* Enhanced Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-2 uppercase tracking-wide">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {new Date(project.createdAt).getFullYear()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </motion.div>
            </motion.div>
                ))
              )}
        </div>
      </div>
    </div>

        {/* View All Button */}
        {showViewAll && !comingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link href="/work" className="btn btn-primary group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
