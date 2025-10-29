import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const CustomerReviewSection = (): JSX.Element => {
  const testimonialData = {
    text: "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
    author: {
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
      avatar: "/switch-2.png",
      fallback: "MJ",
    },
    decorativeImage: "/image-2.png",
  };

  return (
    <Card className="relative w-full rounded-[23px] overflow-hidden border-none bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="relative p-0 min-h-[302px]">
        <img
          className="absolute top-0 left-[66px] w-[147px] h-[300px] object-cover"
          alt="Decorative"
          src={testimonialData.decorativeImage}
        />

        <div className="absolute top-[50px] left-[50px] right-[50px] pl-[163px] pr-[52px]">
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[-0.20px] leading-[30px]">
            {testimonialData.text}
          </p>
        </div>

        <div className="absolute bottom-[52px] left-[50px] flex items-center gap-2.5">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage
              src={testimonialData.author.avatar}
              alt={testimonialData.author.name}
              className="object-cover"
            />
            <AvatarFallback>{testimonialData.author.fallback}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-px">
            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[-0.18px] leading-[25.2px] whitespace-nowrap">
              {testimonialData.author.name}
            </div>

            <div className="[font-family:'Inter',Helvetica] font-normal text-[#c1c2d3] text-sm tracking-[-0.14px] leading-[21px] whitespace-nowrap">
              {testimonialData.author.title}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
