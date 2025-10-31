import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  return (
    <Card className="w-full max-w-[912px] h-auto rounded-[23px] overflow-hidden border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
      <CardContent className="relative p-0">
        <img
          className="absolute top-0 right-0 w-[146px] h-[300px] object-cover"
          alt="Image"
          src="/image-2.png"
        />

        <div className="pt-[50px] px-[50px] pb-[52px]">
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[-0.20px] leading-[30px] pr-[156px] mb-[100px]">
            Collaborating with John was an absolute pleasure. His
            professionalism, promptness, and dedication to delivering
            exceptional results were evident throughout our project. John&#39;s
            enthusiasm for every facet of development truly stands out. If
            you&#39;re seeking to elevate your website and elevate your brand,
            John is the ideal partner.
          </p>

          <div className="flex items-center gap-2.5">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarImage
                src="/switch-2.png"
                alt="Switch"
                className="object-cover"
              />
            </Avatar>

            <div className="flex flex-col gap-px">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[-0.18px] leading-[25.2px] whitespace-nowrap">
                Michael Johnson
              </div>

              <div className="[font-family:'Inter',Helvetica] font-normal text-[#c1c2d3] text-sm tracking-[-0.14px] leading-[21px] whitespace-nowrap">
                Director of AlphaStream Technologies
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
