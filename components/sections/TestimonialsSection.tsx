'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Card, CardContent } from '../ui/card'

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
        <img className="w-full max-w-5xl h-auto px-4" alt="Client logos" src="/logos.svg" />
      </motion.div>
    </section>
  )
}
