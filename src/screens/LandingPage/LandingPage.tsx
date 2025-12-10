import React from "react";
import { Button } from "../../components/ui/button";
import { ActionButtonSection } from "./sections/ActionButtonSection";
import { CardDisplaySection } from "./sections/CardDisplaySection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { ContentDisplaySection } from "./sections/ContentDisplaySection";
import { CustomerReviewSection } from "./sections/CustomerReviewSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { GeneralSection } from "./sections/GeneralSection";
import { InfoCardSection } from "./sections/InfoCardSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ProjectDisplaySection } from "./sections/ProjectDisplaySection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";
import { ReviewDisplaySection } from "./sections/ReviewDisplaySection";

const navItems = [
  { label: "About", active: false },
  { label: "Projects", active: true },
  { label: "Testimonials", active: false },
  { label: "Contact", active: false },
];

export const LandingPage = () => {
  return (
    <div className="bg-[#000319] overflow-hidden w-full min-w-[1440px] relative">
      <img
        className="absolute top-0 left-0 w-[1440px] h-[900px] pointer-events-none"
        alt="Grid pattern"
        src="/grid-pattern.svg"
      />

      <img
        className="left-[868px] absolute top-0 w-[572px] h-[608px] pointer-events-none"
        alt="Spotlight"
        src="/spotlight-1.svg"
      />

      <img
        className="left-0 absolute top-0 w-[572px] h-[608px] pointer-events-none"
        alt="Spotlight"
        src="/spotlight.svg"
      />

      <nav className="relative z-10 flex justify-center pt-[49px]">
        <div className="w-[453px] h-[68px] flex flex-col gap-[19px] rounded-[13px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[13px] before:[background:linear-gradient(92deg,rgba(105,113,162,0.16)_0%,rgba(39,42,60,0.37)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="inline-flex ml-[50px] w-[351px] h-[18px] relative mt-6 items-start gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base tracking-[-0.48px] leading-[17.6px] whitespace-nowrap ${item.active ? "text-white" : "text-[#c0c2d3]"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="ml-[-146px] h-[7px] w-[7px] self-center bg-modernwhite-900 rounded-[3.5px]" />
        </div>
      </nav>

      <div className="relative flex flex-col items-center pt-[190px]">
        <div className="[font-family:'Inter',Helvetica] font-normal text-[#e4ecff] text-base text-center tracking-[4.00px] leading-[19.2px] whitespace-nowrap">
          DYNAMIC WEB MAGIC WITH NEXT.JS
        </div>
      </div>

      <GeneralSection />

      <div className="relative flex justify-center pt-[215px]">
        <div className="[font-family:'Inter',Helvetica] font-normal text-[#e4ecff] text-2xl text-center tracking-[0] leading-[28.8px] whitespace-nowrap">
          Hi! I&apos;m John Doe, a Next.js Developer based in Russia
        </div>
      </div>

      <div className="relative flex justify-center pt-[59px]">
        <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-[22px] h-auto rounded-[14px] border-[none] bg-[linear-gradient(90deg,rgba(22,26,49,1)_0%,rgba(6,9,31,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[14px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[-0.48px] leading-[21.6px] whitespace-nowrap">
            See my work
          </div>

          <img
            className="relative w-[13px] h-[13px] mr-[-1.00px]"
            alt="Arrow"
            src="/arrow.svg"
          />
        </Button>
      </div>

      <div className="relative pt-[1000px]">
        <PortfolioSection />
      </div>

      <div className="relative flex justify-center pt-[100px]">
        <div className="h-12 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-2.00px] leading-[48px] whitespace-nowrap">
          <span className="text-white tracking-[-0.96px]">
            A small selection of{" "}
          </span>

          <span className="text-[#cbacf9] tracking-[-0.96px]">
            recent projects
          </span>
        </div>
      </div>

      <div className="relative pt-[100px]">
        <ComponentNodeSection />
      </div>

      <div className="relative pt-[100px]">
        <ContentDisplaySection />
      </div>

      <div className="relative pt-[100px]">
        <ProjectDisplaySection />
      </div>

      <div className="relative pt-[100px]">
        <ProjectOverviewSection />
      </div>

      <div className="relative flex justify-center pt-[100px]">
        <div className="h-12 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-2.00px] leading-[48px] whitespace-nowrap">
          <span className="text-white tracking-[-0.96px]">
            Kind words from{" "}
          </span>

          <span className="text-[#cbacf9] tracking-[-0.96px]">
            satisfied clients
          </span>
        </div>
      </div>

      <div className="relative pt-[100px]">
        <MainContentSection />
      </div>

      <div className="relative pt-[100px]">
        <ReviewDisplaySection />
      </div>

      <div className="relative pt-[100px]">
        <CustomerReviewSection />
      </div>

      <div className="relative flex justify-center pt-[100px]">
        <img className="w-[1240px] h-10" alt="Logos" src="/logos.svg" />
      </div>

      <div className="relative pt-[100px]">
        <ExperienceSection />
      </div>

      <div className="relative flex justify-center pt-[100px]">
        <div className="h-12 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-2.00px] leading-[48px] whitespace-nowrap">
          <span className="text-white tracking-[-0.96px]">My</span>

          <span className="text-[#cbacf9] tracking-[-0.96px]"> approach</span>
        </div>
      </div>

      <div className="relative pt-[100px]">
        <CardDisplaySection />
      </div>

      <div className="relative pt-[100px]">
        <ActionButtonSection />
      </div>

      <div className="relative pt-[100px]">
        <InfoCardSection />
      </div>

      <div className="relative flex justify-center pt-[100px]">
        <div className="w-[720px] h-24 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-2.00px] leading-[48px]">
          <span className="text-white tracking-[-0.96px]">Ready to take </span>

          <span className="text-[#cbacf9] tracking-[-0.96px]">your</span>

          <span className="text-white tracking-[-0.96px]">
            {" "}
            digital presence to the next level?
          </span>
        </div>
      </div>

      <div className="relative flex justify-center pt-[100px]">
        <div className="[font-family:'Inter',Helvetica] font-normal text-[#c1c2d3] text-base tracking-[-0.16px] leading-[22.4px] whitespace-nowrap">
          Reach out to me today and let&#39;s discuss how I can help you achieve
          your goals.
        </div>
      </div>

      <div className="relative flex justify-center pt-[100px]">
        <Button className="inline-flex items-center justify-center gap-2.5 px-10 py-[22px] h-auto rounded-[14px] border-[none] bg-[linear-gradient(90deg,rgba(22,26,49,1)_0%,rgba(6,9,31,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[14px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[-0.48px] leading-[21.6px] whitespace-nowrap">
            Contact Me Now
          </div>

          <img
            className="relative w-[13px] h-[13px] mr-[-1.00px]"
            alt="Arrow"
            src="/arrow.svg"
          />
        </Button>
      </div>

      <img
        className="absolute w-[87.49%] left-[4.86%] bottom-px h-[1113px] pointer-events-none"
        alt="Pattern"
        src="/pattern.png"
      />

      <footer className="relative flex w-[1240px] items-center justify-between mx-auto pt-[100px] pb-[90px] bg-transparent">
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[14.4px] tracking-[0] leading-6 whitespace-nowrap">
          Copyright ©2025 Ismael Razafindramboly - All Rights Reserved
        </div>

        <img
          className="relative w-[264px]"
          alt="Pagination"
          src="/pagination.svg"
        />
      </footer>
    </div>
  );
};
