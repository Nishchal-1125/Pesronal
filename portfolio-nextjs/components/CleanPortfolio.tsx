'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'
import { 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Star,
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import CountUp from 'react-countup'

export default function CleanPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const NavItem = ({ href, children, isActive }: { href: string, children: React.ReactNode, isActive: boolean }) => (
    <motion.a
      href={href}
      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        isActive 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
          layoutId="activeTab"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.a>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 z-50"
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
              Nishchal Baluni
            </motion.div>
            
            <div className="hidden md:flex space-x-1">
              <NavItem href="#home" isActive={activeSection === 'home'}>Home</NavItem>
              <NavItem href="#about" isActive={activeSection === 'about'}>About</NavItem>
              <NavItem href="#skills" isActive={activeSection === 'skills'}>Skills</NavItem>
              <NavItem href="#experience" isActive={activeSection === 'experience'}>Experience</NavItem>
              <NavItem href="#education" isActive={activeSection === 'education'}>Education</NavItem>
              <NavItem href="#projects" isActive={activeSection === 'projects'}>Projects</NavItem>
              <NavItem href="#contact" isActive={activeSection === 'contact'}>Contact</NavItem>
            </div>

            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-1">
                {['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 capitalize"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
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
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full"
                variants={fadeInUp}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-blue-700 font-medium">Available for new opportunities</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                variants={fadeInUp}
              >
                <span className="text-gray-900">Hi, I'm </span>
                <TypeAnimation
                  sequence={[
                    'Nishchal',
                    2000,
                    'a Software Engineer',
                    2000,
                    'a Problem Solver',
                    2000,
                    'a Full Stack Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </motion.h1>

              <motion.div 
                className="text-xl md:text-2xl text-gray-600 font-medium"
                variants={fadeInUp}
              >
                Software Engineer at <span className="text-blue-600 font-bold">Dvertex Info Private Limited</span>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                variants={fadeInUp}
              >
                Passionate Software Engineer with 2+ years of experience building scalable web applications. 
                Currently working at Dvertex Info Private Limited, specializing in React.js, Node.js, and modern web technologies.
                I love transforming complex problems into elegant, user-friendly solutions.
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={fadeInUp}
              >
                {[
                  { label: "Years Experience", value: 2, suffix: "+" },
                  { label: "Projects Completed", value: 15, suffix: "+" },
                  { label: "Technologies", value: 20, suffix: "+" },
                  { label: "Happy Clients", value: 10, suffix: "+" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">
                      <CountUp end={stat.value} duration={2} delay={index * 0.2} />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View My Work
                  </span>
                </motion.button>

                <motion.button
                  className="group px-8 py-4 border-2 border-blue-600 rounded-xl text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </span>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-6"
                variants={fadeInUp}
              >
                {[
                  { Icon: Github, href: "#", color: "hover:bg-gray-800" },
                  { Icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
                  { Icon: Mail, href: "#", color: "hover:bg-red-500" },
                ].map(({ Icon, href, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 ${color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
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
                className="relative mx-auto w-80 h-96 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl overflow-hidden"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    NB
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Nishchal Baluni</h3>
                  <p className="text-blue-600 font-medium mb-4">Software Engineer</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building innovative solutions at Dvertex Info Private Limited
                  </p>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { name: "React", position: "top-10 right-10", delay: 0 },
                { name: "Node", position: "top-32 left-8", delay: 0.5 },
                { name: "TS", position: "bottom-32 right-8", delay: 1 },
                { name: "JS", position: "bottom-10 left-12", delay: 1.5 },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${tech.position} w-16 h-16 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl flex items-center justify-center text-gray-700 font-bold shadow-lg`}
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
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I'm a passionate Software Engineer with a strong foundation in computer science and 2+ years of hands-on experience. 
              Currently working at Dvertex Info Private Limited, I specialize in creating scalable web applications that solve real-world problems.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full Stack Development",
                description: "Expert in both frontend and backend technologies, creating complete web solutions from concept to deployment using modern frameworks and best practices."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Performance Optimization",
                description: "Implementing efficient caching strategies, database optimization, and modern performance techniques to build scalable applications that handle growth."
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Professional Experience",
                description: "2+ years of professional experience at Dvertex Info Private Limited, working on enterprise-level projects and contributing to multiple successful product launches."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium">Technical Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
              },
              {
                category: "Backend", 
                skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL", "Microservices"]
              },
              {
                category: "Database",
                skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase", "Prisma"]
              },
              {
                category: "Tools & DevOps",
                skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Jest", "Webpack"]
              }
            ].map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-4 py-2 text-center text-gray-700 font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
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

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    D
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Software Engineer</h3>
                      <p className="text-blue-600 font-semibold text-lg">Dvertex Info Private Limited</p>
                    </div>
                    <div className="flex flex-col md:items-end text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Feb 2024 - Present</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Gautam Budh Nagar, UP</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Building scalable web applications and delivering innovative solutions with focus on backend development, 
                    system optimization, and cross-functional collaboration in an agile environment.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      {[
                        "Spearheaded backend services development using Node.js and Express framework with SQL/NoSQL databases",
                        "Designed and implemented RESTful APIs for 'SafaiMitra' SaaS platform with optimized functionality",
                        "Enhanced system performance through efficient cache management and WebSocket integration",
                        "Coordinated cross-functional collaboration using Git for streamlined development processes"
                      ].map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs", "WebSocket", "Git", "Agile"].map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-white rounded-full text-gray-700 text-sm font-medium border hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
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
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium">Academic Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                degree: "Bachelor of Computer Applications (BCA)",
                institution: "University/College Name",
                duration: "2020 - 2023",
                description: "Comprehensive study of computer science fundamentals, programming languages, database management, and software engineering principles.",
                highlights: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Web Development", "Software Engineering"]
              },
              {
                degree: "Higher Secondary (12th)",
                institution: "School Name",
                duration: "2019 - 2020",
                description: "Specialized in Science stream with focus on Mathematics and Computer Science.",
                highlights: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"]
              }
            ].map((education, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{education.degree}</h3>
                        <p className="text-blue-600 font-semibold">{education.institution}</p>
                      </div>
                      <div className="text-gray-600 font-medium">{education.duration}</div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">{education.description}</p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.highlights.map((subject, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 rounded-full text-gray-700 text-sm font-medium border border-green-200"
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium">My Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here are some of the innovative solutions I've contributed to building at Dvertex and personal projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Safaimitra",
                description: "A comprehensive waste management SaaS platform with multiple modules. Worked on backend implementation with Node.js, Redis caching, WebSocket for real-time monitoring.",
                technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "WebSocket", "RESTful APIs"],
                features: [
                  "Real-time waste monitoring with WebSocket",
                  "Redis caching for performance optimization", 
                  "Third-party API integrations",
                  "Multi-module architecture"
                ],
                status: "Production",
                role: "Backend Developer"
              },
              {
                title: "CRM In-House",
                description: "Internal CRM system for company operations including lead management, quotations, invoice generation, and role-based access control.",
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
                features: [
                  "Lead creation and management",
                  "Automated quotation generation",
                  "Invoice generation system",
                  "Role-based access control"
                ],
                status: "Production",
                role: "Full Stack Developer"
              },
              {
                title: "CRM SaaS",
                description: "Global multi-tenant CRM platform designed for multiple clients with real-time updates, call/email integration, and comprehensive logging.",
                technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Webhooks"],
                features: [
                  "Multi-tenant architecture",
                  "Real-time status updates",
                  "Call and email integration",
                  "Webhook implementation"
                ],
                status: "Production",
                role: "Full Stack Developer"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                      <div className="text-xs text-blue-600 font-medium">
                        +{project.features.length - 2} more features
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 15 + (i % 5),
                repeat: Infinity,
                delay: i * 0.8,
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
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-300 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and help turn your vision into reality.
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
                        value: "nishchalbaluni@example.com",
                        link: "mailto:nishchalbaluni@example.com"
                      },
                      {
                        icon: <Phone className="w-6 h-6" />,
                        title: "Phone", 
                        value: "+91 XXX XXX XXXX",
                        link: "tel:+91XXXXXXXXXX"
                      },
                      {
                        icon: <MapPin className="w-6 h-6" />,
                        title: "Location",
                        value: "Gautam Budh Nagar, UP",
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

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
                    <div className="flex space-x-4">
                      {[
                        { Icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
                        { Icon: Github, href: "#", color: "hover:bg-gray-800" },
                        { Icon: Mail, href: "#", color: "hover:bg-red-500" },
                      ].map(({ Icon, href, color }, index) => (
                        <motion.a
                          key={index}
                          href={href}
                          className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${color}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon size={20} />
                        </motion.a>
                      ))}
                    </div>
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
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Get In Touch
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Nishchal Baluni
            </motion.div>
            <p className="text-gray-400 mb-6">
              Building innovative solutions, one project at a time.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "#" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 Nishchal Baluni. All rights reserved. Built with Next.js & TypeScript.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
