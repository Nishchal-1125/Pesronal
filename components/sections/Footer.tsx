'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/data'

export default function Footer() {
  const { isDarkMode } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'email':
        return <Mail className="w-5 h-5" />
      default:
        return <Mail className="w-5 h-5" />
    }
  }

  return (
    <footer className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">NB</span>
              </div>
              <span className={`ml-3 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
              {PERSONAL_INFO.title} passionate about creating innovative solutions and delivering exceptional user experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300 text-sm`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect
            </h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>
              {PERSONAL_INFO.location}
            </p>
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS.map(({ name, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(name)}
                </motion.a>
              ))}
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
            >
              {PERSONAL_INFO.email}
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center`}>
          <motion.p
            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 md:mb-0`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
            }`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-gray-900/50 to-transparent' : 'bg-gradient-to-t from-gray-50/50 to-transparent'}`} />
      </div>
    </footer>
  )
}
