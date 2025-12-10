'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'

const experiences = [
  {
    id: 1,
    title: 'Freelance Next.js Dev Project',
    description: 'Assisted in the development of a web-based platform using Next.js, enhancing interactivity. ',
    logo: '/Group.svg',
    mask: '/mask-group.png',
  },
  {
    id: 2,
    title: 'Fullstack Developer - AFM ART Oct 2023 - Mars 2024',
    description: 'Developed web app and deploing using PHP and wordpress.',
    logo: '/frame-5.svg',
    mask: '/mask-group-3.png',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    description: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    logo: '/rectangle.png',
    mask: '/mask-group-2.png',
  },
  {
    id: 4,
    title: 'Fullstack Developer - Eden distribution - Mars 2024 - Present',
    description: 'Developed and maintained user-facing features using modern technologies. Deployed applications and ensured their scalability.',
    logo: '/Group2.svg',
    mask: '/mask-group-1.png',
  },
]

export function ExperienceSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16 md:mb-24"
      >
        <h2 className="font-['Inter',Helvetica] font-bold text-3xl md:text-5xl text-center leading-tight">
          <span className="text-white">My </span>
          <span className="text-[#cbacf9]">work experience</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative h-48 rounded-[23px] border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)]  overflow-hidden group">
                <img
                  className="absolute -top-1 left-[-22px] w-full max-w-[622px] h-[172px] opacity-30"
                  alt="Background pattern"
                  src={experience.mask}
                />
                <CardContent className="relative h-full flex items-center justify-center p-6">
                  <div className="flex items-center gap-6 md:gap-8">
                    <motion.img
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 object-contain"
                      alt={`${experience.title} logo`}
                      src={experience.logo}
                    />
                    <div className="flex flex-col gap-3">
                      <h3 className="font-['Inter',Helvetica] font-bold text-white text-md md:text-[20px] tracking-[-0.26px] leading-tight">
                        {experience.title}
                      </h3>
                      <p className="font-['Inter',Helvetica] font-medium text-[#bec0dd] text-sm md:text-base leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </CardContent>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(400px circle at 50% 50%, rgba(203, 172, 249, 0.15), transparent 60%)',
                  }}
                />
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
