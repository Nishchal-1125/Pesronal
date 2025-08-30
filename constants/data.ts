export const PERSONAL_INFO = {
  name: 'Nishchal Baluni',
  title: ' Software Engineer',
  tagline: 'Building scalable, enterprise-grade solutions that drive business growth',
  email: 'nishchalbaluni25@gmail.com',
  location: 'Pratap Vihar, Ghaziabad, NCR, India',
  linkedin: 'https://linkedin.com/in/nishchal-baluni-0a7438207/',
  github: 'https://github.com/Nishchal-1125',
  resume: '/Nishchal_Resume.pdf',
  yearsOfExperience: 2,
  projectsCompleted: 25,
  technologiesMastered: 20,
  clientsSatisfied: 15
}

export const EXPERIENCE_DATA = [
  {
    id: 'dvertex',
    company: 'Dvertex Info Private Limited',
    position: 'Software Engineer',
    duration: 'Feb 2024 - Present',
    location: 'Greater Noida, Gautam Budh Nagar',
    description: 'Leading full-stack development initiatives for enterprise SaaS platforms, architecting scalable solutions that serve 10,000+ users. Driving technical innovation while collaborating with cross-functional teams to deliver business-critical applications with 99.9% uptime.',
    achievements: [
      'Architected and developed microservices-based backend infrastructure handling 100,000+ daily API requests',
      'Led development of \'SafaiMitra\' SaaS platform generating $500K+ ARR with 95% customer satisfaction',
      'Implemented real-time WebSocket architecture reducing system latency by 60% and improving user experience',
      'Designed efficient caching strategies with Redis, achieving 40% performance improvement across all services',
      'Mentored 3 junior developers and established code review practices resulting in 50% reduction in bugs',
      'Successfully promoted from intern to full-time Software Engineer within 6 months based on exceptional performance'
    ],
    technologies: ['Node.js', 'Express.js', 'React.js', 'TypeScript', 'MongoDB', 'MySQL', 'Redis', 'WebSocket', 'Microservices', 'AWS', 'Docker', 'Git'],
    color: 'blue-purple',
    impact: {
      revenue: '8cr + ARR',
      users: '10,000+',
      performance: '60% latency reduction'
    }
  },
  {
    id: 'siemens',
    company: 'Siemens Energy',
    position: 'Software Engineering Intern',
    duration: '2023 - 2024',
    location: 'Gurugram, Haryana',
    description: 'Contributed to enterprise-level industrial automation systems in a Fortune 500 multinational environment. Gained exposure to advanced software architectures, scalable system design, and international development standards while working on mission-critical energy infrastructure projects.',
    achievements: [
      'Developed automation scripts that reduced manual testing time by 45% for industrial control systems',
      'Collaborated with global teams across 5 countries on enterprise software architecture design',
      'Contributed to documentation and testing protocols for safety-critical energy management systems',
      'Implemented monitoring dashboards using modern web technologies improving system visibility by 30%',
      'Participated in Agile ceremonies and learned enterprise-grade software development methodologies'
    ],
    technologies: ['Enterprise Software', 'Industrial Automation', 'System Design', 'Testing Frameworks', 'Documentation', 'Agile', 'International Collaboration'],
    color: 'green-blue',
    impact: {
      efficiency: '45% time reduction',
      teams: 'Global collaboration',
      systems: 'Safety-critical'
    }
  }
]

export const EDUCATION_DATA = [
  {
    id: 'bca',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Uttar Pradesh Technical University (UPTU)',
    location: 'Noida Sector 62, Gautam Budh Nagar',
    duration: '2019 - 2023',
    grade: 'First Class with Distinction',
    cgpa: '8.2/10.0',
    description: 'Comprehensive study of advanced computer science concepts including algorithms, system design, database architecture, and software engineering principles. Specialized in modern web technologies and data structures with hands-on project experience.',
    subjects: ['Advanced Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management & Design', 'Software Engineering & Architecture', 'Computer Networks & Security', 'Operating Systems', 'Web Development Technologies', 'System Design Patterns'],
    achievements: [
      'Graduated with First Class with Distinction (8.2 CGPA)',
      'Led final year project on "Real-time Web Application Development"',
      'Active member of Computer Science Society and technical events',
      'Completed certification courses in modern web technologies'
    ]
  }
]

export const SKILLS_DATA = [
  {
    category: 'Frontend Technologies',
    icon: '💻',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI', 'Responsive Design', 'PWA Development']
  },
  {
    category: 'Backend & APIs',
    icon: '⚡',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'WebSocket', 'Microservices', 'Server-side Rendering', 'API Security', 'Rate Limiting']
  },
  {
    category: 'Database & Caching',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Database Design', 'Query Optimization', 'Indexing Strategies', 'Data Modeling']
  },
  // {
  //   category: 'DevOps & Cloud',
  //   icon: '☁️',
  //   skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Docker Compose', 'CI/CD Pipelines', 'Git/GitHub', 'Linux/Unix', 'Nginx', 'PM2']
  // },
  // {
  //   category: 'Tools & Methodologies',
  //   icon: '🛠️',
  //   skills: ['Agile/Scrum', 'Test-Driven Development', 'Code Reviews', 'Performance Optimization', 'Security Best Practices', 'System Architecture', 'Technical Documentation']
  // }
]

export const PROJECTS_DATA = [
  {
    id: 'safaimitra',
    title: 'SafaiMitra SaaS Platform',
    subtitle: 'Enterprise Waste Management Solution',
    description: 'Comprehensive SaaS platform revolutionizing municipal waste management with real-time tracking, AI-powered route optimization, and citizen engagement features. Serving 10+ municipalities with 99.9% uptime.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'MySQL', 'WebSocket', 'Redis'],
    features: [
      'Real-time GPS tracking system managing 500+ vehicles with AI-powered route optimization',
      'Dynamic route assignment with ML algorithms reducing fuel costs by 30%',
      'Automated KYC verification system processing 1000+ registrations daily',
      'Smart billing engine with automated UCC charge calculation and collection',
      'Advanced complaint management system with SLA tracking and auto-escalation',
      'High-performance caching with Redis achieving 99.9% uptime and sub-200ms response times',
      'Comprehensive admin dashboard with real-time analytics and business intelligence',
      // 'Mobile-first PWA design supporting offline functionality for field operations'
    ],
    metrics: {
      users: '10,000+',
      uptime: '99.9%',
      costReduction: '30%',
      responseTime: '<200ms'
    },
    github: '#',
    demo: '#',
    status: 'Production'
  },
  {
    id: 'crm-platform',
    title: 'Global Multi-tenant CRM',
    subtitle: 'Enterprise Customer Relationship Management',
    description: 'Scalable, enterprise-grade CRM platform designed for global operations with advanced multi-tenancy, real-time collaboration, and integrated business tools. Serving Fortune 500 clients worldwide.',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'Redis', 'OAuth'],
    features: [
      'Advanced multi-tenant architecture with enterprise-grade security and data isolation',
      'Complete sales pipeline management with AI-powered lead scoring and conversion prediction',
      'Real-time collaboration tools with integrated video conferencing and document sharing',
      'Advanced analytics engine with custom dashboards and automated reporting',
      'Seamless Google Workspace integration with Calendar, Drive, and Gmail synchronization',
      // 'Sophisticated ticketing system with AI-powered categorization and SLA management',
      // 'High-performance architecture with microservices handling millions of transactions daily'
    ],
    metrics: {
      clients: 'Fortune 10',
      transactions: '1000+ daily',
      tenants: '100+',
      availability: '99.99%'
    },
    github: '#',
    demo: '#',
    status: 'Production'
  }
  // {
  //   id: 'portfolio-next',
  //   title: 'Personal Portfolio Website',
  //   subtitle: 'Modern Developer Portfolio',
  //   description: 'A modern, responsive portfolio website built with Next.js 14, featuring advanced animations, dark mode, and optimized performance. Designed to showcase professional work and technical expertise.',
  //   technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  //   features: [
  //     'Server-side rendering with Next.js 14 for optimal SEO and performance',
  //     'Advanced animations using Framer Motion with smooth page transitions',
  //     'Responsive design with mobile-first approach and cross-browser compatibility',
  //     'Dark/Light theme toggle with system preference detection',
  //     'Performance optimized with 90+ Lighthouse scores across all metrics',
  //     'Accessible design following WCAG guidelines and semantic HTML structure'
  //   ],
  //   metrics: {
  //     lighthouse: '95+',
  //     loadTime: '<1s',
  //     accessibility: '100%',
  //     seo: '100%'
  //   },
  //   github: 'https://github.com/Nishchal-1125/portfolio',
  //   demo: 'https://nishchal-baluni.vercel.app',
  //   status: 'Live'
  // }
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
