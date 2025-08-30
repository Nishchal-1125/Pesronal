'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { PROJECTS_DATA } from '@/constants/data'

export default function ProjectsSection() {
  const { isDarkMode } = useTheme()

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
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
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Enterprise-grade solutions that drive business growth and deliver measurable impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600'
                  : 'bg-gradient-to-br from-blue-50 to-purple-50'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="lg:flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Production' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'Live'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {project.subtitle && (
                    <p className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {project.subtitle}
                    </p>
                  )}
                  
                  <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Metrics & Impact
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className={`p-3 rounded-lg text-center ${
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

                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Key Features & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-start transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <span className="text-blue-500 mr-2 mt-1">●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-blue-900 text-blue-300' 
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {/* <motion.a
                      href={project.github}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a> */}
                    <motion.a
                      href={project.demo}
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
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
