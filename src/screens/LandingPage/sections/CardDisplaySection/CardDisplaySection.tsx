import React from "react";

const cornerImages = [
  { top: "top-[-18px]", left: "left-[-17px]", alt: "Section input" },
  { top: "top-[593px]", left: "left-[-17px]", alt: "Section input" },
  { top: "top-[593px]", left: "left-[360px]", alt: "Section input" },
  { top: "top-[-18px]", left: "left-[360px]", alt: "Phpluslight" },
];

export const CardDisplaySection = (): JSX.Element => {
  return (
    <div className="relative w-full h-[622px] rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      {cornerImages.map((corner, index) => (
        <img
          key={`corner-${index}`}
          className={`absolute ${corner.top} ${corner.left} w-[46px] h-[46px]`}
          alt={corner.alt}
          src="/section-input.svg"
        />
      ))}

      <div className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[18px] absolute top-[calc(50.00%_-_37px)] left-[calc(50.00%_-_80px)] rounded-[11px] border-[none] bg-[linear-gradient(90deg,rgba(22,26,49,0.3)_0%,rgba(6,9,31,0.3)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[11px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="text-3xl leading-[36.0px] relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-transparent tracking-[-0.48px] whitespace-nowrap">
          <span className="font-semibold text-[#cbacf9] tracking-[-0.14px]">
            P
          </span>

          <span className="font-bold text-[#cbacf9] tracking-[-0.14px]">
            hase 1
          </span>
        </div>
      </div>
    </div>
  );
};
