import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ActionButtonSection = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Card className="w-full max-w-[389px] rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none overflow-hidden">
        <CardContent className="flex flex-col items-center gap-[18px] p-8">
          <div className="flex flex-col items-center gap-3.5">
            <Badge className="h-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-[11px] border-[none] bg-[linear-gradient(90deg,rgba(22,26,49,0.3)_0%,rgba(6,9,31,0.3)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[11px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(90deg,rgba(22,26,49,0.3)_0%,rgba(6,9,31,0.3)_100%)]">
              <span className="text-base leading-[19.2px] [font-family:'Inter',Helvetica] font-normal tracking-[-0.48px] whitespace-nowrap">
                <span className="font-semibold text-[#cbacf9] tracking-[-0.08px]">
                  P
                </span>
                <span className="font-bold text-[#cbacf9] tracking-[-0.08px]">
                  hase 2
                </span>
              </span>
            </Badge>

            <h2 className="w-[278px] [font-family:'Inter',Helvetica] font-bold text-white text-[32px] text-center tracking-[-0.32px] leading-[35.2px]">
              Development &amp; Progress Update
            </h2>
          </div>

          <p className="w-[338px] [font-family:'Inter',Helvetica] font-normal text-[#e4ecff] text-base text-center tracking-[0] leading-6">
            Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
