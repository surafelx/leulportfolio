'use client';

import { motion } from 'framer-motion';

interface ComingSoonCardProps {
  index: number;
  category: string;
  title?: string;
  description?: string;
}

export default function ComingSoonCard({ 
  index, 
  category, 
  title = `${category} Project ${index}`,
  description = "Professional content in development. Stay tuned for updates."
}: ComingSoonCardProps) {
  return (
    <motion.div
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
      {/* Coming Soon Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-[16/10] mb-6 shadow-xl border-2 border-gray-300">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="text-center">
            {/* Animated Icon */}
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
              <span className="text-2xl font-bold text-white">
                {category === 'TVC' ? '🎬' : '🎨'}
              </span>
            </motion.div>
            
            {/* Coming Soon Text */}
            <h3 className="text-2xl font-bold text-gray-700 uppercase tracking-wide mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-500 text-sm">
              Exciting new content in development
            </p>
          </div>
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
          className="absolute top-6 right-6 w-3 h-3 bg-green-400/40 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-6 right-6 w-2 h-2 bg-gray-400/40 rounded-full"
        />
      </div>
      
      {/* Project Info */}
      <div>
        <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wide">
          {title}
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
          {description}
        </p>
      </div>
    </motion.div>
  );
}
