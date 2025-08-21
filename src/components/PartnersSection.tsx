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
];

const companies = [
  { name: 'Creative Agency Pro', role: 'Senior Art Director', period: '2020-Present' },
  { name: 'Digital Design Studio', role: 'Art Director', period: '2018-2020' },
  { name: 'Brand Solutions Inc', role: 'Visual Designer', period: '2016-2018' },
  { name: 'Freelance', role: 'Creative Consultant', period: '2014-2016' },
];

export default function PartnersSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-lg font-medium text-gray-600 mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <span className="text-2xl">{partner.logo}</span>
                <span className="font-medium text-sm">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-gray-200 pt-12"
        >
          <h3 className="text-lg font-medium text-gray-600 text-center mb-8">
            Professional Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-1">
                  {company.name}
                </h4>
                <p className="text-sm text-blue-600 mb-2">
                  {company.role}
                </p>
                <p className="text-xs text-gray-500">
                  {company.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
