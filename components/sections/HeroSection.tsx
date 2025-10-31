'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Card } from '@/src/components/ui/card'
import { CardContent } from '@/src/components/ui/card'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const texts = [
    "Transforming Concepts into Seamless User Experiences",
    "Building Scalable Modern Web Applications",
    "Empowering Businesses through Digital Innovation",
  ];

  const [index, setIndex] = useState(0); // index du texte actuel
  const [subIndex, setSubIndex] = useState(0); // index du caractère actuel
  const [deleting, setDeleting] = useState(false); // si on efface
  const [blink, setBlink] = useState(true); // curseur clignotant

  // vitesse de frappe / effacement
  const typingSpeed = deleting ? 40 : 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[index];

      if (!deleting && subIndex === currentText.length) {
        // pause avant effacement
        setTimeout(() => setDeleting(true), 1200);
        return;
      }

      if (deleting && subIndex === 0) {
        // passer au texte suivant
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      // avancer ou reculer selon l'état
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  // clignotement du curseur "|"
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 800);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="relative flex flex-col items-center pt-32 md:pt-48 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-['Inter',Helvetica] font-normal text-[#e4ecff] text-xs md:text-base text-center tracking-[4.00px] leading-[19.2px] mb-8 md:mb-12"
      >
        DYNAMIC WEB MAGIC
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <motion.h1
          className="font-['Inter',Helvetica] font-bold text-2xl md:text-2xl lg:text-6xl text-center leading-tight max-w-4xl px-4"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            background: 'linear-gradient(90deg, #ffffff 0%, #e4ecff 25%, #cbacf9 50%, #e4ecff 75%, #ffffff 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {texts[index].substring(0, subIndex)}
          <motion.span
            animate={{ opacity: blink ? 1 : 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 text-[#cbacf9] text-2xl"
          >
            |
          </motion.span>
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 md:mt-16 font-['Inter',Helvetica] font-normal text-[#e4ecff] text-lg md:text-2xl text-center max-w-2xl px-4"
      >
        Hi! I'm Ismael Razafindramboly, Developer fullstack JS based in Madagascar
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 md:mt-12 md:mb-15"
      >
        <Button
          onClick={onContactClick}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 md:px-10 py-5 md:py-[22px] h-auto rounded-[14px] border-none bg-[linear-gradient(90deg,rgba(22,26,49,1)_0%,rgba(6,9,31,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[14px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative font-['Inter',Helvetica] font-medium text-white text-base md:text-lg tracking-[-0.48px] leading-[21.6px] whitespace-nowrap">
            See my work
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

      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 md:mt-24 w-full max-w-5xl px-4"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/section-input-container.png"
            alt="Portfolio showcase"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000319] via-transparent to-transparent" >
          </div>

        </motion.div>
      </motion.div> */}
    </section>
  )
}
