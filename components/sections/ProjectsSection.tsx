'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Grand urban hotel',
    description: 'This project demonstrates my ability to transform a brand vision into a high-performing and aesthetically successful digital experience, essential for the luxury hospitality sector.',
    image: '/image.png',
    mockup: '/ghu-image.png',
    technologies: [
      { src: '/react-svgrepo-com.svg', alt: 'React Native', id: 'react' },
      { src: '/tailwind.svg', alt: 'Tailwind css', id: 'taiwlind' },
      { src: '/typescript.svg', alt: 'TypeScript', id: 'typescript' },
      { src: '/nodejs.svg', alt: 'Node js', id: 'Node' },
    ],
    link: 'https://ghu-tana.com',
  },
  {
    id: 2,
    title: 'Msomo wa mali - Android & IOS Application',
    description: 'A native financial education mobile app built on the latest React Native stack. Interactive courses and savings/loan simulations ensure complete mastery.',
    image: '/image.png',
    mockup: '/iphone-image.png',
    technologies: [
      { src: '/react-svgrepo-com.svg', alt: 'React Native', id: 'react' },
      { src: '/tailwind.svg', alt: 'Tailwind css', id: 'taiwlind' },
      { src: '/typescript.svg', alt: 'TypeScript', id: 'typescript' },
      { src: '/firebase.svg', alt: 'Firebase', id: 'Firebase' },
    ],
    link: '#',
  },
  {
    id: 3,
    title: 'MINUCIA, The communications agency',
    description: 'Your responsible communication agency. Built with Next.js for sustainable success. See our work, blog, and team.',
    image: '/image.png',
    mockup: '/minucia.jpg',
    technologies: [
      { src: '/next.svg', alt: 'Next JS', id: 'Next' },
      { src: '/tailwind.svg', alt: 'Tailwind css', id: 'taiwlind' },
      { src: '/typescript.svg', alt: 'TypeScript', id: 'typescript' },
      { src: '/firebase.svg', alt: 'Firebase', id: 'Firebase' }

    ],
    link: 'https://minucia-website.vercel.app/',
  },
  {
    id: 4,
    title: 'Elevating Business Operations',
    description: ' These projects highlight my expertise in building sophisticated enterprise-level applications with Next.js, demonstrating my ability to translate complex business requirements into efficient.',
    image: '/image.png',
    mockup: '/edens.png',
    technologies: [
      { src: '/react-svgrepo-com.svg', alt: 'React Native', id: 'react' },
      { src: '/tailwind.svg', alt: 'Tailwind css', id: 'taiwlind' },
      { src: '/typescript.svg', alt: 'TypeScript', id: 'typescript' },
      { src: '/next.svg', alt: 'Next JS', id: 'Next' },
    ],
    link: '#',
  },
]

export function ProjectsSection() {
  const logos = [
    { src: '/react-svgrepo-com.svg', alt: 'React Native', id: 'react' },
    { src: '/firebase.svg', alt: 'Tailwind CSS', id: 'tailwind' }, // Supposons que c'est un "tilde" pour TypeScript
    { src: '/typescript.svg', alt: 'TypeScript', id: 'typescript' },
    { src: '/next.svg', alt: 'Next JS', id: 'Next' },
    { src: '/tailwind.svg', alt: 'tailwind', id: 'github' }, // Ou n'importe quel autre logo pour le 5ème
  ];
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
              <Card className="relative h-full rounded-[23px] overflow-hidden border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)]  group">
                <CardContent className="p-0 flex flex-col">
                  <motion.div
                    className="relative h-[250px] md:h-[330px] w-140 bg-[#13152c] rounded-t-[14px] overflow-hidden m-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={project.title}
                      src={project.image}
                    />
                    <motion.img
                      className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-5 w-[80%] max-w-[464px] h-auto rounded-[10px] object-cover shadow-2xl"
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
                      {/* <img
                        className="h-8 md:h-10"
                        alt="Technologies"
                        src={project.technologies}
                      /> */}
                      <div className='flex items-center gap-2.5 mt-5'>
                        {project.technologies.map((logo) => (
                          <div
                            key={logo.id}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 flex-shrink-0"
                          >
                            {/* Si vous utilisez Next.js, utilisez <Image /> */}
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              width={24} // Ces props sont pour l'optimisation de Next.js
                              height={24} // La taille visuelle est gérée par le className
                              className="max-w-[60%] max-h-[60%] object-contain"
                            />
                          </div>
                        ))}
                      </div>

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
