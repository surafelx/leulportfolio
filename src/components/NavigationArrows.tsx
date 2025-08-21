'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationArrowsProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

export default function NavigationArrows({
  canScrollLeft,
  canScrollRight,
  onScrollLeft,
  onScrollRight
}: NavigationArrowsProps) {
  return (
    <>
      {/* Left Arrow - Green Theme */}
      <motion.button
        onClick={onScrollLeft}
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
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" />
      </motion.button>

      {/* Right Arrow - Green Theme */}
      <motion.button
        onClick={onScrollRight}
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
        aria-label="Scroll right"
      >
        <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" />
      </motion.button>
    </>
  );
}
