import React from "react";
import { Badge } from "../../../../components/ui/badge";

const cornerIcons = [
  { top: "top-[-18px]", left: "left-[-17px]", alt: "Section input" },
  { top: "top-[593px]", left: "left-[-17px]", alt: "Section input" },
  { top: "top-[593px]", left: "left-[360px]", alt: "Section input" },
  { top: "top-[-18px]", left: "left-[360px]", alt: "Phpluslight" },
];

export const InfoCardSection = (): JSX.Element => {
  return (
    <section className="relative w-full max-w-[389px] h-[622px] mx-auto">
      <div className="relative w-full h-full rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Badge className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[18px] h-auto rounded-[11px] border-[none] bg-[linear-gradient(90deg,rgba(22,26,49,0.3)_0%,rgba(6,9,31,0.3)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[11px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(90deg,rgba(22,26,49,0.3)_0%,rgba(6,9,31,0.3)_100%)]">
            <span className="text-3xl leading-[36.0px] relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-normal text-transparent tracking-[-0.48px] whitespace-nowrap">
              <span className="font-semibold text-[#cbacf9] tracking-[-0.14px]">
                P
              </span>
              <span className="font-bold text-[#cbacf9] tracking-[-0.14px]">
                hase 3
              </span>
            </span>
          </Badge>
        </div>

        {cornerIcons.map((icon, index) => (
          <img
            key={`corner-icon-${index}`}
            className={`absolute w-[46px] h-[46px] ${icon.top} ${icon.left}`}
            alt={icon.alt}
            src="/section-input.svg"
          />
        ))}
      </div>
    </section>
  );
};
