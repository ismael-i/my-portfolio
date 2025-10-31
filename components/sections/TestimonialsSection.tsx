'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const testimonials = [

  {
    id: 1,
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: " Bakary Hakim",
    role: "Cultivision",
    avatar: "/switch-2.png",
    image: "/image-2.png",
  },
  {
    id: 2,
    quote:
      "Working with John exceeded all expectations. He turned complex ideas into elegant solutions with efficiency and creativity.",
    name: "Asmina Saïd Ahmed",
    role: "Kinvest",
    avatar: "/switch-2.png",
    image: "/image-2.png",
  },
  {
    id: 3,
    quote:
      "Ismael’s eye for design and attention to detail truly elevate the final product. He’s a fantastic developer to collaborate with.",
    name: "David Kim",
    role: "CTO at HOTEL GHU",
    avatar: "/switch-2.png",
    image: "/image-2.png",
  },
]


const logo = [
  { src: '/next.svg', alt: 'Next JS', id: 'Next' },
  { src: '/tailwind.svg', alt: 'Tailwind css', id: 'taiwlind' },
  { src: '/typescript.svg', alt: 'TypeScript', id: 'typescript' },
  { src: '/firebase.svg', alt: 'Firebase', id: 'Firebase' },
  { src: '/react-svgrepo-com.svg', alt: 'React Native', id: 'react' },
  { src: '/nodejs.svg', alt: 'Node js', id: 'Node' },
  { src: 'tech/Socket-io.svg', alt: 'Socket io', id: 'Socket io' },
  { src: 'tech/Express.svg', alt: 'Express', id: 'Express' },

]
const logo2 = [
  { src: '/tech/n8n-color.svg', alt: 'n8n', id: 'n8n' },
  { src: '/tech/rails.svg', alt: 'rails', id: 'rails' },
  { src: '/tech/python.svg', alt: 'Python', id: 'python' },
  { src: '/tech/mysql.svg', alt: 'mysql', id: 'mysql' },
  { src: '/tech/mongodb.svg', alt: 'Mongo DB', id: 'Mongo' },
  { src: '/tech/prisma.svg', alt: 'Prisma', id: 'prisma' },
  { src: '/tech/postgresql.svg', alt: 'Postgres', id: 'postegres' },
  { src: '/tech/wordpress.svg', alt: 'worpress', id: 'wordpress' },

]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Changement auto toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section id="testimonials" className="relative py-20 md:py-32 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16 md:mb-24"
      >
        <h2 className="font-['Inter',Helvetica] font-bold text-3xl md:text-5xl text-center leading-tight">
          <span className="text-white">Kind words from </span>
          <span className="text-[#cbacf9]">satisfied clients</span>
        </h2>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex justify-center"
          >
            <Card className="relative w-[387px] h-[620px] md:w-[700px] md:h-[300px] rounded-[23px] overflow-hidden border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] group">
              <CardContent className="relative p-8 md:p-10">
                <img
                  className="absolute top-0 right-0 w-[100px] md:w-[146px] h-[200px] md:h-[300px] object-cover opacity-30"
                  alt="Decoration"
                  src={testimonials[currentIndex].image}
                />

                <p className="font-['Inter',Helvetica] font-normal text-white text-base md:text-lg leading-relaxed mb-12">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                    />
                  </Avatar>

                  <div className="flex flex-col">
                    <span className="font-semibold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </span>
                    <span className="text-[#c1c2d3] text-sm">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-16 md:mt-24"
      >
        <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-[#04071d] to-[#0c0e23]">
          <motion.div
            className="flex items-center gap-12"
            animate={{
              x: ["0%", "-50%"], // déplacement gauche
            }}
            transition={{
              duration: 15, // vitesse
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {/* On duplique les logos pour boucler sans coupure */}
            {[...logo, ...logo2, ...logo].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={60}
                  height={60}
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>

          {/* Dégradés sur les bords (effet fondu) */}
          <div className="pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#04071d] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#04071d] to-transparent" />
        </div>

      </motion.div>
      {/* carouselle party two  */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-2 md:mt-2"
      >
        <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-[#04071d] to-[#0c0e23]">
          <motion.div
            className="flex items-center gap-12"
            animate={{
              x: ["-50%", "0%"], // déplacement gauche
            }}
            transition={{
              duration: 15, // vitesse
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {/* On duplique les logos pour boucler sans coupure */}
            {[...logo2, ...logo, ...logo2].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={60}
                  height={60}
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>

          {/* Dégradés sur les bords (effet fondu) */}
          <div className="pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#04071d] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#04071d] to-transparent" />
        </div>

      </motion.div>
    </section>
  )
}
