'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award } from 'lucide-react';

const skills = [
  { name: 'Adobe Creative Suite', level: 95 },
  { name: 'Motion Graphics', level: 90 },
  { name: 'Brand Design', level: 92 },
  { name: '3D Design & Rendering', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Video Production', level: 88 },
  { name: 'Typography', level: 93 },
  { name: 'Art Direction', level: 96 },
];

const experience = [
  {
    title: 'Senior Art Director',
    company: 'Creative Agency Pro',
    location: 'New York, NY',
    period: '2020 - Present',
    description: 'Lead creative direction for major brand campaigns, managing a team of 8 designers and overseeing projects from concept to execution.',
    achievements: [
      'Increased client satisfaction by 40% through strategic creative solutions',
      'Led rebranding projects for 15+ Fortune 500 companies',
      'Developed award-winning campaigns that generated $2M+ in client revenue'
    ]
  },
  {
    title: 'Art Director',
    company: 'Digital Design Studio',
    location: 'Los Angeles, CA',
    period: '2018 - 2020',
    description: 'Specialized in digital campaigns and motion graphics for entertainment and tech clients.',
    achievements: [
      'Created key visuals for 50+ digital campaigns',
      'Reduced project turnaround time by 30% through process optimization',
      'Mentored junior designers and established design system standards'
    ]
  },
  {
    title: 'Visual Designer',
    company: 'Brand Solutions Inc',
    location: 'Chicago, IL',
    period: '2016 - 2018',
    description: 'Focused on brand identity design and print materials for small to medium businesses.',
    achievements: [
      'Designed complete brand identities for 30+ startups',
      'Increased team productivity by implementing new design workflows',
      'Won "Best Brand Identity" award at Regional Design Awards 2017'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor of Fine Arts',
    field: 'Visual Communication Design',
    school: 'School of Visual Arts',
    location: 'New York, NY',
    period: '2012 - 2016',
    honors: 'Magna Cum Laude'
  }
];

const certifications = [
  'Adobe Certified Expert (ACE) - After Effects',
  'Google UX Design Professional Certificate',
  'Motion Graphics Specialist - LinkedIn Learning',
  'Brand Strategy Fundamentals - AIGA'
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive overview of my professional experience, skills, 
              and achievements in the creative industry.
            </p>
            <button className="btn btn-primary group">
              <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-1" />
              Download PDF
            </button>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Skills & Education */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 font-medium">{edu.field}</p>
                  <p className="text-gray-600">{edu.school}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                  </div>
                  {edu.honors && (
                    <div className="flex items-center gap-1 mt-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">
                        {edu.honors}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Certifications
              </h2>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Professional Experience
              </h2>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 text-sm text-gray-500">
                        <div className="flex items-center gap-1 mb-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
