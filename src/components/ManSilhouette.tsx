'use client';

import { motion } from 'framer-motion';

export default function ManSilhouette() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative flex justify-center items-end"
    >
      {/* Man Silhouette */}
      <div className="w-64 h-80 lg:w-80 lg:h-96 relative">
        <svg
          viewBox="0 0 240 320"
          className="w-full h-full text-white/30 drop-shadow-2xl"
          fill="currentColor"
        >
          {/* Professional man standing sideways silhouette */}
          {/* Head */}
          <ellipse cx="120" cy="40" rx="25" ry="30" />
          
          {/* Neck */}
          <rect x="115" y="65" width="10" height="20" />
          
          {/* Torso/Suit jacket */}
          <path d="M85 85 
                   Q85 80, 90 80 
                   L150 80 
                   Q155 80, 155 85 
                   L160 140 
                   Q160 145, 155 145 
                   L150 200 
                   L155 250 
                   L150 255 
                   L145 250 
                   L140 200 
                   L100 200 
                   L95 250 
                   L90 255 
                   L85 250 
                   L90 200 
                   L85 145 
                   Q80 145, 80 140 
                   Z" />
          
          {/* Arms */}
          {/* Left arm (back) */}
          <path d="M85 100 
                   Q75 105, 70 115 
                   L65 140 
                   Q65 145, 70 145 
                   L75 140 
                   Q80 130, 85 125" />
          
          {/* Right arm (front) */}
          <path d="M155 100 
                   Q165 105, 170 115 
                   L175 140 
                   Q175 145, 170 145 
                   L165 140 
                   Q160 130, 155 125" />
          
          {/* Legs */}
          {/* Left leg */}
          <path d="M95 250 
                   L90 255 
                   L85 290 
                   Q85 295, 90 295 
                   L95 290 
                   L100 255" />
          
          {/* Right leg */}
          <path d="M145 250 
                   L150 255 
                   L155 290 
                   Q155 295, 150 295 
                   L145 290 
                   L140 255" />
          
          {/* Feet */}
          <ellipse cx="87" cy="295" rx="8" ry="4" />
          <ellipse cx="153" cy="295" rx="8" ry="4" />
          
          {/* Suit details */}
          {/* Lapel */}
          <path d="M90 85 Q95 90, 100 95 L110 105 Q115 100, 120 95" fill="white" fillOpacity="0.1" />
          
          {/* Tie */}
          <path d="M115 85 L125 85 L127 120 L123 125 L117 125 L113 120 Z" fill="white" fillOpacity="0.15" />
        </svg>
      </div>
      
      {/* Floating accent elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute top-8 right-8 w-3 h-3 bg-white/40 rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, 12, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: 'easeInOut', 
          delay: 1.5 
        }}
        className="absolute top-16 left-4 w-2 h-2 bg-white/30 rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          ease: 'easeInOut', 
          delay: 0.8 
        }}
        className="absolute bottom-20 right-12 w-4 h-4 bg-white/25 rounded-full"
      />
    </motion.div>
  );
}
