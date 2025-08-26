'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Star } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { EXPERIENCE_DATA } from '@/constants/data'

export default function ExperienceSection() {
  const { isDarkMode } = useTheme()

  return (
    <section id="experience" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
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
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Delivering enterprise solutions with measurable business impact across Fortune 50+ companies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600' 
                  : experience.color === 'blue-purple' 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50'
                    : 'bg-gradient-to-br from-green-50 to-blue-50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl ${
                      experience.color === 'blue-purple' 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                        : 'bg-gradient-to-br from-green-500 to-blue-600'
                    }`}>
                      {experience.company.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {experience.position}
                        </h3>
                        <p className={`font-semibold text-lg ${
                          experience.color === 'blue-purple' ? 'text-blue-600' : 'text-green-600'
                        }`}>
                          {experience.company}
                        </p>
                      </div>
                      <div className={`flex flex-col md:items-end transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className={`leading-relaxed mb-6 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Star className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                              experience.color === 'blue-purple' ? 'text-yellow-500' : 'text-green-500'
                            }`} />
                            <span className={`transition-colors duration-300 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Metrics */}
                    {experience.impact && (
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Business Impact
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {Object.entries(experience.impact).map(([key, value], impactIndex) => (
                            <div key={impactIndex} className={`p-4 rounded-lg text-center ${
                              isDarkMode ? 'bg-gray-600' : 'bg-white/70'
                            }`}>
                              <div className="text-xl font-bold text-blue-600">{value}</div>
                              <div className={`text-sm capitalize ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
                              isDarkMode 
                                ? 'bg-gray-600 text-gray-200 border-gray-500 hover:bg-gray-500' 
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
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
