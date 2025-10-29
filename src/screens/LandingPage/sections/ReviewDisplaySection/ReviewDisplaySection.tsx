import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const ReviewDisplaySection = (): JSX.Element => {
  const reviewData = {
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
    author: {
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
      image: "/switch-2.png",
    },
    backgroundImage: "/image-2.png",
  };

  return (
    <section className="w-full flex justify-center py-8">
      <Card className="relative w-full max-w-[912px] h-auto min-h-[302px] rounded-[23px] overflow-hidden border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="relative p-0 h-full">
          <img
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[300px] object-cover"
            alt="Background"
            src={reviewData.backgroundImage}
          />

          <div className="relative z-10 px-[50px] pt-[50px] pb-[102px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[-0.20px] leading-[30px] max-w-[810px] mx-auto">
              {reviewData.quote}
            </p>
          </div>

          <div className="absolute bottom-[50px] left-[50px] z-10 flex items-center gap-2.5">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarImage
                src={reviewData.author.image}
                alt={reviewData.author.name}
                className="object-cover"
              />
            </Avatar>

            <div className="flex flex-col gap-px">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[-0.18px] leading-[25.2px] whitespace-nowrap">
                {reviewData.author.name}
              </div>

              <div className="[font-family:'Inter',Helvetica] font-normal text-[#c1c2d3] text-sm tracking-[-0.14px] leading-[21px] whitespace-nowrap">
                {reviewData.author.title}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
