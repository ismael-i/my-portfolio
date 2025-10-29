'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative mt-20 md:mt-32 px-4 md:px-8 pb-12 md:pb-20">
      <img
        className="absolute bottom-0 left-0 w-full h-[600px] md:h-[1113px] pointer-events-none opacity-30 object-cover"
        alt="Pattern"
        src="/pattern.png"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-12"
      >
        <div className="font-['Inter',Helvetica] font-normal text-white text-sm md:text-[14.4px] leading-6">
          Copyright © 2024 John Doe
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="w-[200px] md:w-[264px] h-auto"
            alt="Social links"
            src="/pagination.svg"
          />
        </motion.div>
      </motion.div>
    </footer>
  )
}
