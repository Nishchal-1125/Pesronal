'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ExternalLink, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/data'
import { ANIMATION_VARIANTS } from '@/constants/animations'
import { downloadResume, scrollToSection } from '@/lib/utils'
import CountUp from 'react-countup'

export default function HeroSection() {
  const { isDarkMode } = useTheme()

  const iconMap = {
    Github,
    Linkedin,
    Mail
  }

  return (
    <section id="home" className={`pt-16 min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
    }`}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDarkMode ? 'bg-blue-400/10' : 'bg-blue-400/20'
            }`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 10 + (i % 5),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={`inline-flex items-center px-4 py-2 rounded-full transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800' 
                  : 'bg-gradient-to-r from-blue-100 to-purple-100'
              }`}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className={`font-medium ${
                isDarkMode ? 'text-blue-400' : 'text-blue-700'
              }`}>
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1 
              className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 leading-tight`}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
              <TypeAnimation
                sequence={[
                  'Nishchal Baluni',
                  4000,
                  'a  Software Engineer',
                  3000,
                  'a Full-Stack Developer',
                  3000,
                  'a Problem Solver',
                  3000,
                ]}
                wrapper="span"
                speed={75}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent"
                repeat={Infinity}
              />
            </motion.h1>

            <motion.div 
              className={`text-lg md:text-xl lg:text-2xl font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {PERSONAL_INFO.title} at <span className="text-blue-600 font-bold">Dvertex Info Private Limited</span>
            </motion.div>

            <motion.div
              className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {PERSONAL_INFO.tagline}
            </motion.div>

            <motion.p 
              className={`text-base md:text-lg leading-relaxed max-w-2xl transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              Results-driven Software Engineer with <span className="font-semibold text-blue-600">2+ years</span> of experience 
              building <span className="font-semibold">enterprise-grade web applications</span> that serve <span className="font-semibold">10,000+ users</span>. 
              Currently leading technical initiatives at Dvertex Info, with prior experience at <span className="font-semibold">Siemens Energy</span>. 
              Specialized in creating scalable solutions that deliver measurable business impact and drive revenue growth.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {[
                { label: "Years Experience", value: PERSONAL_INFO.yearsOfExperience, suffix: "+" },
                { label: "Projects Delivered", value: PERSONAL_INFO.projectsCompleted, suffix: "+" },
                { label: "Technologies", value: PERSONAL_INFO.technologiesMastered, suffix: "+" },
                { label: "Satisfied Clients", value: PERSONAL_INFO.clientsSatisfied, suffix: "+" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
                    <CountUp end={stat.value} duration={2.5} delay={index * 0.3} />
                    {stat.suffix}
                  </div>
                  <div className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View My Work
                </span>
              </motion.button>

              <motion.button
                onClick={downloadResume}
                className={`group px-6 py-3 sm:px-8 sm:py-4 border-2 rounded-xl font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-6"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {SOCIAL_LINKS.map(({ name, url, icon }, index) => {
                const IconComponent = iconMap[icon as keyof typeof iconMap]
                const colorMap = {
                  Github: isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-800",
                  Linkedin: "hover:bg-blue-600",
                  Mail: "hover:bg-red-500"
                }
                
                return (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center hover:text-white transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-400' 
                        : 'bg-gray-100 text-gray-600'
                    } ${colorMap[icon as keyof typeof colorMap]}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className={`relative mx-auto w-80 h-96 rounded-3xl shadow-xl overflow-hidden transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700' 
                  : 'bg-gradient-to-br from-white to-blue-50'
              }`}
              whileHover={{ y: -10, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
                  : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
              }`} />
              <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  NB
                </motion.div>
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{PERSONAL_INFO.title}</p>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Building innovative solutions that drive success and deliver value.
                </p>
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            {[
              { name: "React", position: "top-8 right-8", delay: 0 },
              { name: "Node", position: "top-24 left-6", delay: 0.5 },
              { name: "TS", position: "bottom-24 right-6", delay: 1 },
              { name: "JS", position: "bottom-8 left-8", delay: 1.5 },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`absolute ${tech.position} w-14 h-14 backdrop-blur-sm border rounded-xl flex items-center justify-center text-sm font-bold shadow-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800/80 border-gray-600 text-gray-200' 
                    : 'bg-white/80 border-gray-200 text-gray-700'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: tech.delay }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className={`w-8 h-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
      </motion.div>
    </section>
  )
}
