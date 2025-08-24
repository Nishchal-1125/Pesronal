'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { useActiveSection } from '@/hooks/useActiveSection'
import { PERSONAL_INFO } from '@/constants/data'
import { scrollToSection } from '@/lib/utils'

interface NavItemProps {
  href: string
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

function NavItem({ href, children, isActive, onClick }: NavItemProps) {
  const { isDarkMode } = useTheme()
  
  return (
    <motion.button
      onClick={() => {
        scrollToSection(href.replace('#', ''))
        onClick()
      }}
      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        isActive 
          ? isDarkMode 
            ? 'text-blue-400 bg-blue-900/20' 
            : 'text-blue-600 bg-blue-50'
          : isDarkMode
            ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-0.5 ${
            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          layoutId="activeTab"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  )
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()
  const { activeSection, sections } = useActiveSection()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 backdrop-blur-lg shadow-lg z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/90 border-b border-gray-800' 
          : 'bg-white/90 border-b border-gray-200/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {PERSONAL_INFO.name}
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <NavItem 
                key={section}
                href={`#${section}`} 
                isActive={activeSection === section}
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavItem>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`ml-4 p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X size={24} className={isDarkMode ? 'text-white' : 'text-gray-900'} />
              ) : (
                <Menu size={24} className={isDarkMode ? 'text-white' : 'text-gray-900'} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`md:hidden absolute top-16 left-0 right-0 border-b shadow-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white'
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section)
                    closeMenu()
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
