'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, Users, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    number: '8+',
    label: 'Years Experience',
    description: 'Creating compelling visual narratives'
  },
  {
    icon: Users,
    number: '150+',
    label: 'Happy Clients',
    description: 'From startups to Fortune 500'
  },
  {
    icon: Lightbulb,
    number: '300+',
    label: 'Projects Delivered',
    description: 'Across multiple creative disciplines'
  }
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              Crafting Visual Stories That
              <span className="gradient-text-vibrant"> Inspire & Engage</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I&apos;m Leoul Solomon, an Art Director with a passion for transforming ideas
              into powerful visual experiences. With over 8 years in the creative industry, 
              I specialize in creating compelling narratives that connect brands with their audiences.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My approach combines strategic thinking with artistic vision, ensuring every 
              project not only looks exceptional but also drives meaningful results. From 
              key visuals to comprehensive brand campaigns, I bring stories to life through design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/about" className="btn btn-primary group">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/work" className="btn btn-secondary">
                View My Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {highlight.number}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {highlight.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
