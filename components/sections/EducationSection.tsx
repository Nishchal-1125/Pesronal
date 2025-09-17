'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { EDUCATION_DATA } from '@/constants/data'

export default function EducationSection() {
  const { isDarkMode } = useTheme()

  return (
    <section id="education" className={`py-20 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION_DATA.map((education, index) => (
            <motion.div
              key={education.id}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 border border-gray-600' 
                  : 'bg-white'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30' 
                      : 'bg-gradient-to-br from-green-100 to-blue-100'
                  }`}>
                    <GraduationCap className={`w-8 h-8 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {education.degree}
                      </h3>
                      <p className="text-blue-600 font-semibold">{education.institution}</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {education.location}
                      </p>
                    </div>
                    <div className={`text-right transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className="font-medium">{education.duration}</div>
                      <div className="text-sm font-semibold text-blue-600">{education.grade}</div>
                      {education.cgpa && (
                        <div className="text-sm">CGPA: {education.cgpa}</div>
                      )}
                    </div>
                  </div>

                  <p className={`leading-relaxed mb-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {education.description}
                  </p>

                  {education.achievements && (
                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Academic Achievements
                      </h4>
                      <ul className="space-y-2">
                        {education.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className={`flex items-start transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Core Subjects & Specialization
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.subjects.map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 text-gray-200 border-green-700' 
                              : 'bg-gradient-to-r from-green-50 to-blue-50 text-gray-700 border-green-200'
                          }`}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
