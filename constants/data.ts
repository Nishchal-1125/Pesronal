export const PERSONAL_INFO = {
  name: 'Nishchal Baluni',
  title: 'Software Engineer',
  email: 'nishchalbaluni25@gmail.com',
  location: 'Pratap Vihar, Ghaziabad, UP 201009',
  linkedin: 'https://linkedin.com/in/nishchal-baluni-0a7438207/',
  github: 'https://github.com/Nishchal-1125',
  resume: '/Nishchal_Resume.pdf'
}

export const EXPERIENCE_DATA = [
  {
    id: 'dvertex',
    company: 'Dvertex Info Private Limited',
    position: 'Software Engineer',
    duration: 'Feb 2024 - Present',
    location: 'Greater Noida , Gautam Budh Nagar',
    description: 'Building scalable web applications and delivering innovative solutions with focus on full-stack development, system optimization, and cross-functional collaboration in an agile environment. Previously served as an intern and promoted to full-time Software Engineer role.',
    achievements: [
      'Spearheaded backend services development using Node.js and Express framework with SQL/NoSQL databases',
      'Designed and implemented RESTful APIs for \'SafaiMitra\' SaaS platform with optimized functionality',
      'Enhanced system performance through efficient cache management and WebSocket integration',
      'Coordinated cross-functional collaboration using Git for streamlined development processes',
      'Successfully transitioned from intern to full-time Software Engineer based on performance'
    ],
    technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'MySQL', 'RESTful APIs', 'WebSocket', 'Git', 'Agile'],
    color: 'blue-purple'
  },
  {
    id: 'siemens',
    company: 'Siemens Energy',
    position: 'Software Engineering Intern',
    duration: '2023 - 2024',
    location: 'Gurugram, Hariyana',
    description: 'Gained valuable experience in enterprise-level software development and industrial automation systems. Worked on cutting-edge technologies and learned industry best practices in a multinational environment.',
    achievements: [
      'Gained exposure to enterprise-level software development practices and methodologies',
      'Worked with industrial automation systems and modern software architectures',
      'Collaborated with international teams on complex engineering projects',
      'Developed understanding of scalable system design and software engineering principles'
    ],
    technologies: ['Software Engineering', 'System Design', 'Enterprise Solutions', 'Team Collaboration', 'Agile', 'Documentation'],
    color: 'green-blue'
  }
]

export const EDUCATION_DATA = [
  {
    id: 'bca',
    degree: 'Bachelor of Science in Computer Science',
    institution: ' Uttar Pradesh Technical University',
    location: 'Noida setor 62, Gautam Budh Nagar',
    duration: '2019 - 2023',
    grade: 'First Class',
    description: 'Comprehensive study of computer science fundamentals, programming languages, database management, and software engineering principles. Gained strong foundation in algorithms, data structures, and modern development practices.',
    subjects: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Web Development', 'Software Engineering', 'Operating Systems', 'Computer Networks']
  },
//   {
//     id: 'hsc',
//     degree: 'Higher Secondary Education (12th)',
//     institution: 'Bal Bharti Public School',
//     location: 'Pratap Vihar, Ghaziabad',
//     duration: '2018 - 2020',
//     grade: 'Science Stream',
//     description: 'Completed senior secondary education with focus on Mathematics, Physics, Chemistry and Computer Science. Built strong analytical and problem-solving skills.',
//     subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English', 'Problem Solving']
//   }
]

export const SKILLS_DATA = [
  {
    category: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'WebSocket', 'Server-side Rendering']
  },
  {
    category: 'Database & Storage',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Database Design', 'Query Optimization']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Agile', 'CI/CD', 'Testing', 'Performance Optimization']
  }
]

export const PROJECTS_DATA = [
  {
    id: 'safaimitra',
    title: 'SafaiMitra SaaS Platform',
    description: 'Comprehensive waste management platform with real-time tracking and optimization features.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'MySQL','WebSocket'],
    features: [
      'Real-time waste tracking',
      'Route optimization',
      'Admin dashboard',
      'Mobile responsive design'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 'crm-platform',
    title: 'Global Multi-tenant CRM',
    description: 'Global multi-tenant CRM platform designed for multiple clients with real-time updates, call/email integration, and comprehensive logging.',
    technologies: ['React.js', 'Node.js', 'MySQL', 'WebSocket'],
    features: [
      'Multi-tenant architecture',
      'Real-time updates',
      'Call and email integration',
      'Comprehensive logging',
      'Role-based access control'
    ],
    github: '#',
    demo: '#'
  }
]

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: PERSONAL_INFO.github,
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: PERSONAL_INFO.linkedin,
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: 'Mail'
  }
]
