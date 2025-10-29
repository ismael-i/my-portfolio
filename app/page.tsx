'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HeroSection,
  ProjectsSection,
  TestimonialsSection,
  ExperienceSection,
  ApproachSection,
  CTASection
} from '../components/sections'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { ContactModal } from '../components/ContactModal'
import { PortfolioSection } from '@/components/sections/PortfolioSection'

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="bg-[#000319] overflow-hidden w-full relative">
      <div className="fixed top-0 left-0 w-full h-[900px] pointer-events-none z-0">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          alt="Grid pattern"
          src="/grid-pattern.svg"
        />
      </div>

      <img
        className="fixed right-0 top-0 w-[572px] h-[608px] pointer-events-none z-0 opacity-60"
        alt="Spotlight"
        src="/spotlight-1.svg"
      />

      <img
        className="fixed left-0 top-0 w-[572px] h-[608px] pointer-events-none z-0 opacity-60"
        alt="Spotlight"
        src="/spotlight.svg"
      />

      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      <main className="relative z-10">
        <HeroSection onContactClick={() => setIsContactModalOpen(true)} />

        <PortfolioSection />

        <ProjectsSection />
        <TestimonialsSection />
        <ExperienceSection />
        <ApproachSection />
        <CTASection onContactClick={() => setIsContactModalOpen(true)} />
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}
