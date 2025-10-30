'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    role: 'Director of AlphaStream Technologies',
    avatar: '/switch-2.png',
    image: '/image-2.png',
    quote: "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
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

      <div className="max-w-4xl mx-auto flex justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="w-full rounded-[23px] overflow-hidden border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative group">
                <CardContent className="relative p-0">
                  <img
                    className="absolute top-0 right-0 w-[100px] md:w-[146px] h-[200px] md:h-[300px] object-cover opacity-30"
                    alt="Decoration"
                    src={testimonial.image}
                  />

                  <div className="p-8 md:pt-[50px] md:px-[50px] md:pb-[52px]">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="font-['Inter',Helvetica] font-normal text-white text-lg md:text-xl tracking-[-0.20px] leading-relaxed pr-0 md:pr-[156px] mb-12 md:mb-[100px]"
                    >
                      {testimonial.quote}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-center gap-2.5"
                    >
                      <Avatar className="w-[50px] h-[50px]">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </Avatar>

                      <div className="flex flex-col gap-px">
                        <div className="font-['Inter',Helvetica] font-semibold text-white text-lg tracking-[-0.18px] leading-[25.2px]">
                          {testimonial.name}
                        </div>
                        <div className="font-['Inter',Helvetica] font-normal text-[#c1c2d3] text-sm tracking-[-0.14px] leading-[21px]">
                          {testimonial.role}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(600px circle at 50% 50%, rgba(203, 172, 249, 0.1), transparent 40%)',
                  }}
                />
              </Card>
            </motion.div>
          </motion.div>
        ))}
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
