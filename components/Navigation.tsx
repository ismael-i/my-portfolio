'use client'

import { motion } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

interface NavigationProps {
  onContactClick: () => void
}

export function Navigation({ onContactClick }: NavigationProps) {
  const handleClick = (href: string, label: string) => {
    if (label === 'Contact') {
      onContactClick()
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 md:pt-12"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md mx-4 md:mx-0 md:w-[453px] h-[68px] flex flex-col gap-[19px] rounded-[13px] border-none bg-[linear-gradient(150deg,rgba(4,7,29,0.95)_0%,rgba(12,14,35,0.95)_100%)] backdrop-blur-lg before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[13px] before:[background:linear-gradient(92deg,rgba(105,113,162,0.16)_0%,rgba(39,42,60,0.37)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
      >
        <div className="flex justify-center md:justify-start md:ml-12 w-full h-full items-center px-4 md:px-0 gap-4 md:gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(item.href, item.label)}
              whileHover={{ scale: 1.1, color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center font-['Inter',Helvetica] font-medium text-sm md:text-base tracking-[-0.48px] whitespace-nowrap text-[#c0c2d3] hover:text-white transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 h-[7px] w-[7px] bg-white rounded-full opacity-60" />
      </motion.div>
    </motion.nav>
  )
}
