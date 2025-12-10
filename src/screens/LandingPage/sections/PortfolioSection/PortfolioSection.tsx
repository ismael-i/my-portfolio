import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const techStackColumn1 = [
  { name: "ReactJS" },
  { name: "Express" },
  { name: "Typescript" },
  { name: "NextJS" },
];

const techStackColumn2 = [
  { name: "ReactJS" },
  { name: "VueJS" },
  { name: "NuxtJS" },
  { name: "GraphQL" },
];

const locationBadges = [
  {
    name: "USA",
    position: "top-[calc(50.00%_-_24px)] left-[calc(50.00%_-_220px)]",
  },
  {
    name: "Germany",
    position: "top-[calc(50.00%_+_18px)] left-[calc(50.00%_-_34px)]",
  },
  {
    name: "Russia",
    position: "top-[calc(50.00%_-_40px)] left-[calc(50.00%_+_151px)]",
  },
];

export const PortfolioSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "tonemail@example.com"; // Remplace par ton email réel
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <section className="relative w-full bg-[#000319] rounded-3xl overflow-hidden py-[65px] px-[100px]">
      <img
        className="absolute top-0 left-0 w-full h-[900px] object-cover"
        alt="Background"
        src="/bg.svg"
      />

      <div className="relative flex flex-col w-full max-w-[1240px] mx-auto items-start gap-[39px]">
        <div className="flex items-start gap-[30px] w-full">
          <Card className="flex-1 h-[541px] rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <CardContent className="relative p-0 h-full">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Collaboration"
                src="/image-11.png"
              />

              <div className="absolute top-[-78px] -left-1.5 w-[696px] h-[697px] rounded-[23px] border-[none] bg-[linear-gradient(230deg,rgba(4,7,29,1)_100%,rgba(12,14,35,0)_0%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />

              <h3 className="absolute top-[367px] left-10 w-[393px] [font-family:'Inter',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[38.4px]">
                I prioritize client collaboration, fostering open communication
              </h3>

              <img
                className="absolute top-[343px] left-[506px] w-[140px] h-[49px]"
                alt="Group illustration"
                src="/group.png"
              />

              <div className="absolute top-[69px] left-[53px] w-[152px] h-[59px] rotate-180">
                <img
                  className="w-[19.56%] h-[41.40%] top-[46.92%] left-[6.92%] absolute -rotate-180"
                  alt="Speech bubble tail"
                  src="/vector.svg"
                />

                <img
                  className="w-[75.22%] h-[49.68%] top-0 left-[23.47%] absolute -rotate-180"
                  alt="Speech bubble"
                  src="/vector-1.svg"
                />

                <div className="absolute top-11 left-[calc(50.00%_-_76px)] w-[30px] h-[15px] flex items-center justify-center rotate-180 [font-family:'Inter',Helvetica] font-medium text-[#0c0e23] text-[10px] tracking-[-0.48px] leading-[12.0px]">
                  Me
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col w-[521px] items-start gap-[30px] h-[541px]">
            <Card className="flex-1 w-full rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <CardContent className="relative p-0 h-full">
                <img
                  className="absolute top-0 left-0 w-full h-64 object-cover"
                  alt="World map"
                  src="/image-12.png"
                />

                <div className="absolute left-[calc(50.00%_-_304px)] -bottom-1.5 w-[593px] h-[164px]">
                  <img
                    className="absolute w-full h-full top-0 left-[7.08%]"
                    alt="Location markers"
                    src="/section-input-container.png"
                  />

                  {locationBadges.map((location, index) => (
                    <Badge
                      key={index}
                      className={`absolute ${location.position} inline-flex items-center justify-center gap-2.5 px-[15px] py-2 h-auto rounded-[11px] border-[none] bg-[linear-gradient(90deg,rgba(22,26,49,0.3)_0%,rgba(6,9,31,0.3)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[11px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
                    >
                      <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#e4ecff] text-[13px] tracking-[-0.48px] leading-[15.6px] whitespace-nowrap">
                        {location.name}
                      </span>
                    </Badge>
                  ))}
                </div>

                <h3 className="absolute top-10 left-[35px] w-[411px] [font-family:'Inter',Helvetica] font-bold text-white text-3xl tracking-[-0.30px] leading-[36.0px]">
                  I&apos;m very flexible with time zone communications
                </h3>
              </CardContent>
            </Card>

            <Card className="flex-1 w-full rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <CardContent className="relative p-0 h-full">
                <div className="absolute -top-5 left-[211px] w-[290px] h-[295px] flex gap-[9.6px]">
                  <div className="w-[140.17px] h-[295.01px] flex">
                    <div className="inline-flex w-[140.17px] h-[268.29px] relative flex-col items-start gap-[12.19px]">
                      {techStackColumn1.map((tech, index) => (
                        <div
                          key={index}
                          className="relative w-[140.17px] h-[72.35px]"
                        >
                          <div className="relative w-[142px] h-[72px]">
                            <div className="absolute top-0 left-0 w-[140px] h-[72px] bg-[#10132e] rounded-[6.97px]" />
                            <div className="absolute top-[27px] left-1/2 -translate-x-1/2 [font-family:'Inter',Helvetica] font-semibold text-white text-[13.9px] text-center tracking-[0] leading-[18.6px] whitespace-nowrap">
                              {tech.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-[140.17px] h-[295.01px] flex overflow-hidden">
                    <div className="inline-flex mt-[-36.0px] w-[140.17px] h-[268.29px] ml-0 relative flex-col items-start gap-[12.19px]">
                      {techStackColumn2.map((tech, index) => (
                        <div
                          key={index}
                          className="relative w-[140.17px] h-[72.35px]"
                        >
                          <div className="relative w-[142px] h-[72px]">
                            <div className="absolute top-0 left-0 w-[140px] h-[72px] bg-[#10132e] rounded-[6.97px]" />
                            <div className="absolute top-[27px] left-1/2 -translate-x-1/2 [font-family:'Inter',Helvetica] font-semibold text-white text-[13.9px] text-center tracking-[0] leading-[18.6px] whitespace-nowrap">
                              {tech.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-2.5 absolute top-[calc(50.00%_-_38px)] left-[21px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#c1c2d3] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                    I constantly try to improve
                  </p>
                  <h3 className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[38.4px] whitespace-nowrap">
                    My tech stack
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-[390px]">
          <div className="flex flex-col w-[351px] items-start gap-[30px] h-full">
            <Card className="flex-1 w-full rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <CardContent className="relative p-0 h-full">
                <img
                  className="w-full h-[180px] absolute top-0 left-0 object-cover"
                  alt="Background pattern"
                  src="/background-1.png"
                />

                <h3 className="absolute top-[29px] left-[calc(50.00%_-_148px)] w-[301px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[-0.24px] leading-[28.8px]">
                  Tech enthusiast with a passion for development.
                </h3>

                <img
                  className="absolute top-[84px] left-[calc(50.00%_-_34px)] w-52 h-24"
                  alt="Decorative element"
                  src="/section-input-1.svg"
                />
              </CardContent>
            </Card>

            <Card className="flex flex-col w-full items-center justify-center gap-2.5 px-[19px] py-0 flex-1 bg-[#06091f] rounded-[20px] overflow-hidden">
              <CardContent className="relative p-0 w-full h-full flex items-center justify-center">
                <img
                  className="absolute top-0 left-0 w-[290px] h-[180px]"
                  alt="Background blob"
                  src="/backgroundblobservicepng.png"
                />

                <div className="gap-3 rotate-180 inline-flex flex-col items-center relative z-10">
                  <h3 className="relative w-[241px] rotate-180 [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[-0.24px] leading-[28.8px]">
                    Do you want to start a project together?
                  </h3>

                  <Button className="inline-flex items-center justify-center gap-[5px] px-4 py-3 h-auto rounded-[7px] border-[none] rotate-180 bg-[linear-gradient(90deg,rgba(22,26,49,1)_0%,rgba(6,9,31,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[7px] before:[background:linear-gradient(180deg,rgba(105,113,162,0.4)_0%,rgba(39,42,60,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative z-[2] hover:opacity-90 cursor-pointer" onClick={handleCopyEmail}>
                    <img
                      className="relative w-3.5 h-3.5 -rotate-180"
                      alt="Email icon"
                      src="/card.svg"
                    />
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#e4ecff] text-sm tracking-[-0.48px] leading-[16.8px] whitespace-nowrap">
                      {isCopied ? "Email copied! ✓" : "Copy my email address"}
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="h-full w-[861px] rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <CardContent className="relative p-0 h-full">
              <img
                className="w-[811px] h-full absolute top-0 left-0 object-cover"
                alt="Background pattern"
                src="/background-1.png"
              />

              <img
                className="absolute top-[calc(50.00%_-_192px)] right-[-84px] w-[500px] h-[383px] object-cover"
                alt="Laptop with animation"
                src="/image-13.png"
              />

              <div className="inline-flex flex-col items-start gap-[15px] absolute top-[calc(50.00%_-_56px)] left-[43px]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e4ecff] text-base tracking-[2.40px] leading-[19.2px] whitespace-nowrap">
                  THE INSIDE SCOOP
                </p>
                <h3 className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-[32px] tracking-[-0.32px] leading-[38.4px]">
                  Currently building a<br />
                  JS Animation library
                </h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
