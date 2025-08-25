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
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const getActiveSection = (sections: string[]) => {
  return sections.find(section => {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom > 100
    }
    return false
  })
}
