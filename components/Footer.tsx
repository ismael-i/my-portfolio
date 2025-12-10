'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Globe, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const socials = [
    {
      id: "github",
      icon: <Github className="w-5 h-5 text-white" />,
      url: "https://github.com/ismael-i",
      label: "GitHub",
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-5 h-5 text-white" />,
      url: "https://www.linkedin.com/in/ismael-razafindramboly-6a3091194/",
      label: "LinkedIn",
    },
    {
      id: "portfolio",
      icon: <Globe className="w-5 h-5 text-white" />,
      url: "https://tonsite.com",
      label: "Portfolio",
    },
    {
      id: "facebook",
      icon: <Facebook className="w-5 h-5 text-white" />,
      url: "https://www.facebook.com/nian.razparker",
      label: "facebook",
    },
    // {
    //   id: "whatsapp",
    //   icon: <MessageCircle className="w-5 h-5 text-white" />,
    //   url: "https://www.facebook.com/nian.razparker",
    //   label: "whatsapp",
    // },
  ];
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
          Copyright © 2025 Ismael Razafindramboly - All Rights Reserved
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-row items-center justify-center gap-4 mt-6">
            {socials.map((social) => (
              <motion.div
                key={social.id}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-white/10 border border-white/20 hover:bg-[#cbacf9]/20 hover:border-[#cbacf9]/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
