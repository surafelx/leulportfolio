'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Adobe', logo: '🎨' },
  { name: 'Nike', logo: '✓' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Google', logo: '🔍' },
  { name: 'Microsoft', logo: '⊞' },
  { name: 'Meta', logo: '📘' },
  { name: 'Netflix', logo: '🎬' },
  { name: 'Spotify', logo: '🎵' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Tesla', logo: '⚡' },
  { name: 'Airbnb', logo: '🏠' },
  { name: 'Uber', logo: '🚗' },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Partners - Moving Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
            Trusted by Leading Brands
          </h3>

          {/* Moving Logo Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-16"
              animate={{
                x: [0, -100 * partners.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: `${200 * partners.length}px` }}
            >
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`first-${partner.name}`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="flex-shrink-0 text-5xl lg:text-6xl opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  style={{ minWidth: '100px' }}
                >
                  {partner.logo}
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`second-${partner.name}`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="flex-shrink-0 text-5xl lg:text-6xl opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  style={{ minWidth: '100px' }}
                >
                  {partner.logo}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
