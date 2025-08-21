'use client';
import Image from "next/image"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { Play, Image as ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isVideo = project.imageUrl.endsWith('.mp4') || project.imageUrl.endsWith('.mov');

  const handleClick = () => {
    onClick(project);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
        {/* Image/Video Container */}
        <div className="relative w-full h-full">
          {!imageError ? (
            <>
              {isVideo ? (
                <video
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                >
                  <source src={project.imageUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  
                />
              )}
            </>
          ) : (
            // Placeholder when image fails to load
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
              <ImageIcon className="w-16 h-16 text-gray-400" />
            </div>
          )}

          {/* Loading State */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Video Play Icon */}
          {isVideo && imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
              >
                <Play className="w-6 h-6 text-gray-800 ml-1" />
              </motion.div>
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
                className="text-xl font-semibold mb-2"
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

      {/* Project Info (Always Visible) */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{project.category}</p>
        <p className="text-xs text-gray-500 mt-2">
          {new Date(project.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </motion.div>
  );
}
