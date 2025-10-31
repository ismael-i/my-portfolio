'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'

interface CTASectionProps {
  onContactClick: () => void
}

export function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-['Inter',Helvetica] font-bold text-3xl md:text-5xl leading-tight px-4"
        >
          <span className="text-white">Ready to take </span>
          <span className="text-[#cbacf9]">your</span>
          <span className="text-white"> digital presence to the next level?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter',Helvetica] font-normal text-[#c1c2d3] text-base md:text-lg leading-relaxed"
        >
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter',Helvetica] font-normal text-[#c1c2d3] text-base md:text-lg leading-relaxed"
        >
          Email: ismaelrazafindramboly@gmail.com
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter',Helvetica] font-normal text-[#c1c2d3] text-base md:text-lg leading-relaxed"
        >
          whatsapp: +261 34 76 895 26
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onContactClick}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 md:px-10 py-5 md:py-[22px] h-auto rounded-[14px] border-none bg-[linear-gradient(90deg,rgba(22,26,49,1)_0%,rgba(6,9,31,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[14px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cbacf9]/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative font-['Inter',Helvetica] font-medium text-white text-base md:text-lg tracking-[-0.48px] leading-[21.6px] whitespace-nowrap">
              Contact Me Now
            </span>
            <motion.img
              className="relative w-[13px] h-[13px]"
              alt="Arrow"
              src="/arrow.svg"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
