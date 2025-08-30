'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showName, setShowName] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowName(true), 800)
    const timer2 = setTimeout(() => setShowTitle(true), 1600)
    const timer3 = setTimeout(() => onComplete(), 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          {/* NB Logo Animation */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              // ease: "easeOutBack",
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="relative w-32 h-32 mx-auto">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-blue-400/30 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Inner NB Text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="text-4xl font-bold">
                  <motion.span
                    className="text-blue-400"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    N
                  </motion.span>
                  <motion.span
                    className="text-purple-400"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                  >
                    B
                  </motion.span>
                </div>
              </motion.div>

              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/50 rounded-full"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.2
                }}
              />
            </div>
          </motion.div>

          {/* Name Animation */}
          <AnimatePresence>
            {showName && (
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Nishchal
                </motion.span>
                {' '}
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Baluni
                </motion.span>
              </motion.h1>
            )}
          </AnimatePresence>

          {/* Title Animation */}
          <AnimatePresence>
            {showTitle && (
              <motion.p
                className="text-xl text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  Software
                </motion.span>
                {' '}
                <motion.span
                  className="inline-block text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  Engineer
                </motion.span>
              </motion.p>
            )}
          </AnimatePresence>

          {/* Loading Bar */}
          <motion.div
            className="mt-8 w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.2, duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
