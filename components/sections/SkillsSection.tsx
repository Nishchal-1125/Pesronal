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
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive skill set spanning modern web technologies, cloud platforms, and enterprise development practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600'
                  : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-50 hover:bg-blue-50'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                    <span className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {skill}
                    </span>
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
