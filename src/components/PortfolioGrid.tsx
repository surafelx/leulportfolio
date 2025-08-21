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
}

export default function PortfolioGrid({
  title,
  subtitle,
  category,
  limit = 8,
  showViewAll = true
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Projects Grid with Navigation - Optimized for 1920x1080 */}
        <div className="relative mb-12">
          {/* Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollLeft
                ? 'opacity-100 hover:bg-gray-50 hover:shadow-xl transform hover:scale-110'
                : 'opacity-0 pointer-events-none'
            }`}
            whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
            whileTap={{ scale: canScrollLeft ? 0.95 : 1 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollRight
                ? 'opacity-100 hover:bg-gray-50 hover:shadow-xl transform hover:scale-110'
                : 'opacity-0 pointer-events-none'
            }`}
            whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
            whileTap={{ scale: canScrollRight ? 0.95 : 1 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </motion.button>

          {/* Scrollable Grid Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-12"
            onScroll={checkScrollButtons}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 lg:gap-8 pb-4" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <div key={project.id} className="flex-shrink-0 w-80 lg:w-96">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
              <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[16/10] mb-4">
                {/* Project Image/Video */}
                <div className="relative w-full h-full">
                  {project.imageUrl.endsWith('.mp4') || project.imageUrl.endsWith('.mov') ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <div className="text-center">
                        <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Video Project</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">{project.category}</p>
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end"
                  >
                    <div className="p-6 text-white w-full">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-lg font-semibold mb-2"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-sm text-gray-200 line-clamp-2"
                      >
                        {project.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {project.category} • {new Date(project.createdAt).getFullYear()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

        {/* View All Button */}
        {showViewAll && (
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
