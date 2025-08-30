import { PERSONAL_INFO } from '@/constants/data'

export const downloadResume = () => {
  const link = document.createElement('a')
  link.href = PERSONAL_INFO.resume
  link.download = 'Nishchal_Baluni_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Get navigation height for proper offset
    const navHeight = 80 // Fixed nav height + padding
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const getActiveSection = (sections: string[]) => {
  return sections.find(section => {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      // Adjust for mobile devices with different navigation heights
      const navOffset = window.innerWidth < 768 ? 80 : 100
      return rect.top <= navOffset && rect.bottom > navOffset
    }
    return false
  })
}
