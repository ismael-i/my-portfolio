'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'

const projects = [
  {
    id: 1,
    title: 'Video Conferencing App',
    description: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    image: '/image-4.png',
    mockup: '/image-8.png',
    technologies: '/technologies.svg',
    link: '#',
  },
  {
    id: 2,
    title: 'AI Image SaaS - Canva Application',
    description: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    image: '/image-9.png',
    mockup: '/image-6.png',
    technologies: '/technologies-2.svg',
    link: '#',
  },
  {
    id: 3,
    title: 'Animated Apple Iphone 3D Website',
    description: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
    image: '/image-10.png',
    mockup: '/image-11.png',
    technologies: '/technologies-1.svg',
    link: '#',
  },
  {
    id: 4,
    title: 'Horizon - Banking Platform',
    description: 'A modern banking platform with a comprehensive dashboard to manage all your financial needs.',
    image: '/image-12.png',
    mockup: '/image-13.png',
    technologies: '/technologies-3.svg',
    link: '#',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16 md:mb-24"
      >
        <h2 className="font-['Inter',Helvetica] font-bold text-3xl md:text-5xl text-center leading-tight">
          <span className="text-white">A small selection of </span>
          <span className="text-[#cbacf9]">recent projects</span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative h-full rounded-[23px] overflow-hidden border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none group">
                <CardContent className="p-0 flex flex-col">
                  <motion.div
                    className="relative h-[250px] md:h-[330px] w-full bg-[#13152c] rounded-t-[14px] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={project.title}
                      src={project.image}
                    />
                    <motion.img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[464px] h-auto rounded-[10px] object-cover shadow-2xl"
                      alt={`${project.title} mockup`}
                      src={project.mockup}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000319] via-transparent to-transparent opacity-60" />
                  </motion.div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-['Inter',Helvetica] font-bold text-white text-xl md:text-[32px] tracking-[-0.64px] leading-tight mb-4">
                      {project.title}
                    </h3>

                    <p className="font-['Inter',Helvetica] font-normal text-[#bec0dd] text-base md:text-xl leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <img
                        className="h-8 md:h-10"
                        alt="Technologies"
                        src={project.technologies}
                      />

                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1, x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-2.5 cursor-pointer group/link"
                      >
                        <span className="font-['Inter',Helvetica] font-medium text-[#cbacf9] text-base md:text-xl tracking-[-0.48px] group-hover/link:text-white transition-colors">
                          Check Live Site
                        </span>
                        <motion.img
                          className="w-[13px] h-[13px]"
                          alt="Arrow"
                          src="/arrow.svg"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.a>
                    </div>
                  </div>
                </CardContent>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(203, 172, 249, 0.1), transparent 40%)',
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
