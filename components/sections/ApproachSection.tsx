"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";

// Hook pour détecter si on est sur mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const approaches = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Planning & Strategy",
    description:
      "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Development & Launch",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

export function ApproachSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 bg-[#04071d] flex flex-col items-center">
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16 md:mb-24"
      >
        <h2 className="font-['Inter',Helvetica] font-bold text-3xl md:text-5xl text-center leading-tight">
          <span className="text-white">My</span>
          <span className="text-[#cbacf9]"> approach</span>
        </h2>
      </motion.div>

      {/* Liste des phases */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {approaches.map((approach, index) => (
          <motion.div
            key={approach.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative w-[357px] h-[520px] perspective-[1200px]"
          >
            <motion.div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${!isMobile ? "group hover:[transform:rotateY(180deg)]" : ""
                }`}
            >
              {/* Face avant (desktop uniquement) */}
              {!isMobile && (
                <Card className="absolute inset-0 flex items-center justify-center rounded-[23px] border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] [backface-visibility:hidden] shadow-[0_0_40px_rgba(203,172,249,0.2)]">
                  <CardContent className="flex items-center justify-center h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex flex-col items-center justify-center space-y-6"
                    >
                      <Badge className="bg-[#161A31]/10 text-[#cbacf9] border-[#cbacf9]/30 px-8 py-3 text-lg font-semibold rounded-[10px]">
                        {approach.phase}
                      </Badge>
                    </motion.div>
                  </CardContent>
                </Card>
              )}

              {/* Face arrière */}
              <Card
                className={`absolute inset-0 rounded-[23px] border-none bg-[linear-gradient(150deg,rgba(12,14,35,1)_0%,rgba(22,25,55,1)_100%)] flex flex-col justify-center items-center text-center p-10 ${!isMobile
                  ? "[transform:rotateY(180deg)] [backface-visibility:hidden]"
                  : ""
                  } shadow-[0_0_50px_rgba(203,172,249,0.15)]`}
              >
                <CardContent className="space-y-6 flex flex-col items-center justify-center">
                  <Badge className="bg-[#161A31]/10 text-[#cbacf9] border-[#cbacf9]/30 px-6 py-2 text-base font-semibold rounded-[10px]">
                    {approach.phase}
                  </Badge>
                  <h3 className="text-white text-2xl font-bold">
                    {approach.title}
                  </h3>
                  <p className="text-[#bec0dd] text-base leading-relaxed max-w-[280px]">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
