'use client';

import { motion } from 'framer-motion';

const companies = [
  { 
    name: 'Creative Agency Pro', 
    role: 'Senior Art Director', 
    period: '2020-Present',
    description: 'Leading creative direction for major brand campaigns and managing design teams.',
    icon: '🎯'
  },
  { 
    name: 'Digital Design Studio', 
    role: 'Art Director', 
    period: '2018-2020',
    description: 'Developed innovative digital experiences and visual identity systems.',
    icon: '💻'
  },
  { 
    name: 'Brand Solutions Inc', 
    role: 'Visual Designer', 
    period: '2016-2018',
    description: 'Created compelling brand visuals and marketing materials for diverse clients.',
    icon: '🎨'
  },
  { 
    name: 'Freelance', 
    role: 'Creative Consultant', 
    period: '2014-2016',
    description: 'Provided strategic creative solutions for startups and established brands.',
    icon: '🚀'
  },
];

export default function ProfessionalJourney() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Professional Journey - Moving Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12 uppercase tracking-wider">
            Professional Journey
          </h3>
          
          {/* Moving Cards Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -320 * companies.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
              style={{ width: `${640 * companies.length}px` }}
            >
              {/* First set of cards */}
              {companies.map((company, index) => (
                <motion.div
                  key={`first-${company.name}`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                  style={{ minWidth: '320px' }}
                >
                  <div className="text-4xl mb-4">{company.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {company.name}
                  </h4>
                  <p className="text-lg text-green-600 font-semibold mb-2">
                    {company.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {company.period}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {company.description}
                  </p>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <motion.div
                  key={`second-${company.name}`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                  style={{ minWidth: '320px' }}
                >
                  <div className="text-4xl mb-4">{company.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {company.name}
                  </h4>
                  <p className="text-lg text-green-600 font-semibold mb-2">
                    {company.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {company.period}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {company.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
