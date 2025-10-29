import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectDisplaySection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[602px] flex flex-col rounded-[23px] overflow-hidden border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="p-0 flex flex-col">
        <div className="h-[330px] w-full max-w-[552px] self-center relative mt-9 bg-[#13152c] rounded-[14px] overflow-hidden mx-auto">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Image"
            src="/image-9.png"
          />

          <img
            className="absolute top-[calc(50.00%_-_137px)] left-[calc(50.00%_-_232px)] w-[464px] h-[302px] rounded-[10px] object-cover"
            alt="Image"
            src="/image-6.png"
          />
        </div>

        <h2 className="w-full max-w-[519px] ml-6 mt-9 [font-family:'Inter',Helvetica] font-bold text-white text-[32px] tracking-[-0.64px] leading-9 whitespace-nowrap">
          AI Image SaaS - Canva Application
        </h2>

        <p className="ml-6 w-full max-w-[552px] mt-[18px] [font-family:'Inter',Helvetica] font-normal text-[#bec0dd] text-xl tracking-[0] leading-[26px]">
          A REAL Software-as-a-Service app with AI features and a payments and
          credits system using the latest tech stack.
        </p>

        <div className="flex ml-6 w-full max-w-[552px] relative mt-6 mb-6 items-center justify-between pr-6">
          <img
            className="relative flex-[0_0_auto]"
            alt="Technologies"
            src="/technologies-2.svg"
          />

          <a
            href="#"
            className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-[#cbacf9] text-xl tracking-[-0.48px] leading-[24.0px] whitespace-nowrap">
              Check Live Site
            </span>

            <img
              className="relative w-[13px] h-[13px]"
              alt="Arrow"
              src="/arrow.svg"
            />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
