'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

const approaches = [
  {
    id: 1,
    phase: 'Phase 1',
    title: 'Planning & Strategy',
    description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    id: 2,
    phase: 'Phase 2',
    title: 'Development & Progress Update',
    description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    id: 3,
    phase: 'Phase 3',
    title: 'Development & Launch',
    description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
]

export function ApproachSection() {
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
          <span className="text-white">My</span>
          <span className="text-[#cbacf9]"> approach</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
        {approaches.map((approach, index) => (
          <motion.div
            key={approach.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative rounded-[23px] overflow-hidden border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none group">
                <CardContent className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge className="bg-[#cbacf9]/20 text-[#cbacf9] border-[#cbacf9]/30 px-6 py-2 text-base md:text-lg font-semibold rounded-full">
                        {approach.phase}
                      </Badge>
                    </motion.div>

                    <div className="flex-1 space-y-3">
                      <h3 className="font-['Inter',Helvetica] font-bold text-white text-xl md:text-2xl tracking-tight">
                        {approach.title}
                      </h3>
                      <p className="font-['Inter',Helvetica] font-normal text-[#bec0dd] text-base md:text-lg leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
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
    </section>
  )
}
