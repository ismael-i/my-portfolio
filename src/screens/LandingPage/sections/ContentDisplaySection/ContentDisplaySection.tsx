import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentDisplaySection = () => {
  return (
    <Card className="w-full max-w-[602px] h-auto flex flex-col rounded-[23px] overflow-hidden border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="p-0 flex flex-col">
        <div className="h-[330px] w-full max-w-[552px] self-center relative mt-9 bg-[#13152c] rounded-[14px] overflow-hidden mx-auto">
          <img
            className="top-0 left-0 w-full h-[330px] absolute object-cover"
            alt="Image"
            src="/image-9.png"
          />

          <img
            className="top-[calc(50.00%_-_137px)] left-[calc(50.00%_-_232px)] w-[465px] h-[302px] absolute object-cover"
            alt="Image"
            src="/image-8.png"
          />
        </div>

        <h2 className="w-full max-w-[485px] ml-6 h-auto mt-9 [font-family:'Inter',Helvetica] font-bold text-white text-[32px] tracking-[-0.64px] leading-9 whitespace-nowrap">
          Yoom - Video Conferencing App
        </h2>

        <p className="ml-6 w-full max-w-[552px] h-auto mt-[18px] [font-family:'Inter',Helvetica] font-normal text-[#bec0dd] text-xl tracking-[0] leading-[26px]">
          Simplify your video conferencing experience with Yoom. Seamlessly
          connect with colleagues and friends.
        </p>

        <div className="flex ml-6 mr-6 w-auto h-auto relative mt-6 mb-6 items-center justify-between">
          <img
            className="relative flex-[0_0_auto]"
            alt="Technologies"
            src="/technologies-1.svg"
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
