'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    message: "Leoul's creative vision transformed our brand identity completely. Outstanding work!",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp"
  },
  {
    message: "The attention to detail and strategic thinking in every project is remarkable.",
    author: "Michael Chen",
    role: "CEO, StartupXYZ"
  },
  {
    message: "Working with Leoul was a game-changer for our visual communication strategy.",
    author: "Emily Rodriguez",
    role: "Brand Manager, Fashion Co"
  },
  {
    message: "Exceptional creativity paired with professional execution. Highly recommended!",
    author: "David Thompson",
    role: "Creative Director, Agency Pro"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take my word for it - here&apos;s what clients have to say about working together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">
                                       &ldquo;{testimonial.message}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
