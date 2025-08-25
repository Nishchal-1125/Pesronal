'use client'

import { useState, useEffect } from 'react'
import { getActiveSection } from '@/lib/utils'

const SECTIONS = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const current = getActiveSection(SECTIONS)
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { activeSection, sections: SECTIONS }
}
