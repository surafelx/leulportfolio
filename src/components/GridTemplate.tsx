'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GridTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  backgroundColor?: 'white' | 'gray' | 'green';
  className?: string;
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  green: 'bg-gradient-to-br from-green-50 to-emerald-100'
};

export default function GridTemplate({ 
  title, 
  subtitle, 
  children, 
  backgroundColor = 'white',
  className = ''
}: GridTemplateProps) {
  return (
    <section className={`section-padding ${backgroundClasses[backgroundColor]} ${className}`}>
      <div className="container-custom">
        {/* Enhanced Header Template */}
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

        {/* Grid Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
}
