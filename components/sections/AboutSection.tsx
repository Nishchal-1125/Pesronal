'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/ThemeContext'
import { ANIMATION_VARIANTS } from '@/constants/animations'
import { Code, Users, Zap, Award, TrendingUp, Shield } from 'lucide-react'

export default function AboutSection() {
  const { isDarkMode } = useTheme()

  const highlights = [
    {
      icon: TrendingUp,
      title: 'Business Impact',
      description: 'Delivered solutions generating 5cr + ARR with 99.9% uptime'
    },
    {
      icon: Users,
      title: 'Scale & Reach',
      description: 'Built applications serving 10,000+ users across multiple industries'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Achieved 60% latency reduction through optimized architecture'
    },
    {
      icon: Shield,
      title: 'Enterprise Grade',
      description: 'Experience with Fortune 50 companies and mission-critical systems'
    }
  ]

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
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
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`text-base md:text-lg lg:text-xl leading-relaxed space-y-4 md:space-y-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p>
                I am a <span className="font-semibold text-blue-600"> Software Engineer</span> with over 
                <span className="font-semibold"> 2 years of professional experience</span> in designing, developing, and optimizing 
                enterprise-grade web applications that deliver real business value.
              </p>
              
              <p>
                My expertise spans <span className="font-semibold">full-stack development</span> with JavaScript/TypeScript, 
                Node.js, React.js, and modern database technologies. I specialize in building 
                <span className="font-semibold"> scalable microservices architectures</span>, implementing 
                <span className="font-semibold"> real-time systems</span>, and optimizing performance for high-traffic applications.
              </p>

              <p>
                Currently at <span className="font-semibold text-blue-600">Dvertex Info</span>, I lead the development of 
                SaaS platforms that serve thousands of users and generate significant revenue. Previously, I gained valuable 
                experience at <span className="font-semibold text-blue-600">Siemens Energy</span>, working on mission-critical 
                industrial automation systems.
              </p>

              <p>
                I'm passionate about <span className="font-semibold">clean code</span>, 
                <span className="font-semibold"> system architecture</span>, and delivering solutions that not only meet 
                technical requirements but also drive business growth and user satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600' 
                    : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDarkMode ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <highlight.icon className={`w-6 h-6 ${
                      isDarkMode ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {highlight.title}
                    </h3>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
