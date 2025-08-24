'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/lib/ThemeContext'
import SplashScreen from '@/components/ui/SplashScreen'
import Navigation from '@/components/ui/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import EducationSection from '@/components/sections/EducationSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

function PortfolioContent() {
  const [showSplash, setShowSplash] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (!mounted) return null

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}
