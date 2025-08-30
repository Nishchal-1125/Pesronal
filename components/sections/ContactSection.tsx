'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/data'


export default function ContactSection() {
  const { isDarkMode } = useTheme()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to build innovative solutions together? Let's discuss how I can help drive your next project to success with enterprise-grade development expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email",
                      value: PERSONAL_INFO.email,
                      link: `mailto:${PERSONAL_INFO.email}`
                    },
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Phone", 
                      value: "9354983769",
                      link: `mailto:${PERSONAL_INFO.email}`
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Location",
                      value: PERSONAL_INFO.location,
                      link: "#"
                    }
                  ].map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-gray-400">{info.title}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Response Time", value: "24h", icon: "🚀" },
                    { label: "Client Satisfaction", value: "100%", icon: "⭐" },
                    { label: "Years Experience", value: "2+", icon: "💼" },
                    { label: "Projects Done", value: "15+", icon: "🎯" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white/5 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-xl font-bold text-blue-400">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>



                
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Project Discussion
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Download Resume
                </motion.a>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                ✅ Available for new opportunities • ✅ Open to remote/hybrid work • ✅ Enterprise project experience
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
