import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[602px] h-auto flex flex-col rounded-[23px] overflow-hidden border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
      <CardContent className="p-0 flex flex-col">
        <div className="h-[330px] w-full max-w-[552px] self-center relative mt-9 bg-[#13152c] rounded-[14px] overflow-hidden mx-auto">
          <img
            className="top-0 left-0 w-full h-[330px] absolute object-cover"
            alt="Image"
            src="/image-9.png"
          />

          <img
            className="top-[31px] left-[calc(50.00%_-_230px)] w-[463px] h-[299px] rounded-[10px] absolute object-cover"
            alt="Image"
            src="/image-10.png"
          />
        </div>

        <h2 className="w-full max-w-[527px] px-6 h-auto mt-9 [font-family:'Inter',Helvetica] font-bold text-white text-[32px] tracking-[-0.64px] leading-9 whitespace-nowrap">
          3D Solar System Planets to Explore
        </h2>

        <p className="px-6 w-full max-w-[552px] h-auto mt-[18px] [font-family:'Inter',Helvetica] font-normal text-[#bec0dd] text-xl tracking-[0] leading-[26px]">
          Explore the wonders of our solar system with this captivating 3D
          simulation of the planets using Three.js.
        </p>

        <div className="flex px-6 w-full max-w-[552px] h-auto relative mt-6 mb-6 items-center justify-between">
          <img
            className="relative flex-[0_0_auto]"
            alt="Technologies"
            src="/technologies.svg"
          />

          <Button
            variant="link"
            className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] p-0 h-auto"
          >
            <span className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-medium text-[#cbacf9] text-xl tracking-[-0.48px] leading-[24.0px] whitespace-nowrap">
              Check Live Site
            </span>

            <img
              className="relative w-[13px] h-[13px]"
              alt="Arrow"
              src="/arrow.svg"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
