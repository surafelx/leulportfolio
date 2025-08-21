'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Mail, Phone, Calendar, Award, Users } from 'lucide-react';

const profileStats = [
  { icon: Calendar, label: 'Experience', value: '8+ Years' },
  { icon: Users, label: 'Clients', value: '150+' },
  { icon: Award, label: 'Projects', value: '300+' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@leoulsolomon.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Location', value: 'New York, NY' },
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200"
    >
      {/* Profile Image */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-32 h-32 mx-auto mb-4 relative"
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-lg ring-4 ring-white">
            <Image
              src="/images/profile-picture.jpg"
              alt="Leoul Solomon"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
          Leoul Solomon
        </h3>
        <p className="text-blue-600 font-medium">Art Director</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {profileStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            className="text-center"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <stat.icon className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mb-6"
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          Passionate Art Director with 8+ years of experience creating compelling 
          visual narratives. Specialized in key visuals, branding, and motion graphics 
          that drive engagement and deliver results.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="space-y-3"
      >
        {contactInfo.map((contact) => (
          <div key={contact.label} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <contact.icon className="w-4 h-4 text-gray-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {contact.label}
              </div>
              <div className="text-sm font-medium text-gray-900">
                {contact.value}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Skills Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="mt-6 pt-6 border-t border-gray-200"
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Specialties</h4>
        <div className="flex flex-wrap gap-2">
          {['Key Visuals', 'Branding', 'Motion Graphics', '3D Design'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.9 }}
        className="mt-6 pt-6 border-t border-gray-200"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-green-600">Available for Projects</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
