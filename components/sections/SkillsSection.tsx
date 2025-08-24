'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/ThemeContext'
import { SKILLS_DATA } from '@/constants/data'

export default function SkillsSection() {
  const { isDarkMode } = useTheme()

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'
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
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white shadow-lg'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={`rounded-lg px-4 py-2 text-center font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-gray-200 hover:from-blue-800/50 hover:to-purple-800/50' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 hover:from-blue-100 hover:to-purple-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
