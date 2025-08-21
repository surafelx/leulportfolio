'use client';

import { motion } from 'framer-motion';
import { Award, Users, Coffee, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '8+' },
  { icon: Users, label: 'Happy Clients', value: '150+' },
  { icon: Coffee, label: 'Projects Completed', value: '300+' },
  { icon: Lightbulb, label: 'Creative Solutions', value: '∞' },
];

const values = [
  {
    title: 'Creative Excellence',
    description: 'Pushing boundaries and exploring new creative territories to deliver exceptional visual experiences.',
    icon: '🎨'
  },
  {
    title: 'Strategic Thinking',
    description: 'Every design decision is backed by strategic thinking and deep understanding of brand objectives.',
    icon: '🧠'
  },
  {
    title: 'Collaborative Spirit',
    description: 'Working closely with clients and teams to bring visions to life through effective collaboration.',
    icon: '🤝'
  },
  {
    title: 'Innovation Focus',
    description: 'Staying ahead of trends and technologies to deliver cutting-edge creative solutions.',
    icon: '🚀'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm Leoul Solomon, an Art Director passionate about creating 
                compelling visual narratives that connect brands with their audiences. 
                With over 8 years of experience in the creative industry, I specialize 
                in transforming ideas into powerful visual experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in design began with a fascination for storytelling 
                through visuals. Today, I work across multiple disciplines including 
                key visuals, branding, motion graphics, and 3D design, always 
                striving to push creative boundaries while delivering strategic solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍🎨</div>
                  <h3 className="text-2xl font-bold mb-2">Leoul Solomon</h3>
                  <p className="text-blue-100">Art Director & Creative Strategist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              My Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every project I work on and every creative 
              decision I make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                My Background
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  My creative journey started with a degree in Visual Communication Design, 
                  where I discovered my passion for combining artistic vision with strategic 
                  communication. This foundation led me to explore various creative disciplines 
                  and develop a comprehensive skill set.
                </p>
                <p>
                  Over the years, I've had the privilege of working with diverse clients 
                  ranging from startups to Fortune 500 companies. Each project has taught 
                  me something new and helped me refine my approach to creative problem-solving.
                </p>
                <p>
                  Today, I continue to push the boundaries of visual communication, 
                  staying current with emerging technologies and design trends while 
                  maintaining a focus on timeless design principles that create lasting impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p>Bachelor of Fine Arts in Visual Communication Design</p>
                <p className="text-blue-100">School of Visual Arts</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specializations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Key Visual Design & Campaign Development</li>
                  <li>• Brand Identity & Visual Systems</li>
                  <li>• Motion Graphics & Animation</li>
                  <li>• 3D Design & Visualization</li>
                  <li>• TV Commercial Production</li>
                  <li>• Presentation Design & Storytelling</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
