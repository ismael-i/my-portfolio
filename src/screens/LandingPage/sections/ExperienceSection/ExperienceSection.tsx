import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const experienceData = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    logo: "/-group-.png",
    logoWidth: "w-[94.4px]",
    logoHeight: "h-[87px]",
    maskImage: "/mask-group.png",
    descriptionWidth: "w-[371px]",
    gap: "gap-[30px]",
    logoClass: "relative",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    description:
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    logo: "/frame-5.svg",
    logoWidth: "w-[98px]",
    logoHeight: "h-[96.44px]",
    maskImage: "/mask-group-3.png",
    descriptionWidth: "w-[360px]",
    gap: "gap-[30px]",
    logoClass: "relative mb-[-0.44px]",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    description:
      "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    logo: "/rectangle.png",
    logoWidth: "w-[103px]",
    logoHeight: "h-[98px]",
    maskImage: "/mask-group-2.png",
    descriptionWidth: "w-[343px]",
    gap: "gap-[30px]",
    logoClass: "relative object-cover",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    description:
      "Developed and maintained user-facing features using modern frontend technologies.",
    logo: "/-group--1.png",
    logoWidth: "w-[122.13px]",
    logoHeight: "h-[87px]",
    maskImage: "/mask-group-1.png",
    descriptionWidth: "w-[353px]",
    gap: "gap-[30px]",
    logoClass: "relative",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="relative w-full bg-[#000319] py-[70px] px-[99px]">
      <div className="flex flex-col items-center gap-[69px]">
        <h2 className="flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-transparent text-5xl text-center leading-[48px] whitespace-nowrap">
          <span className="font-bold text-white tracking-[-0.96px]">My </span>
          <span className="font-bold text-[#cbacf9] tracking-[-0.96px]">
            work experince
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-x-[38px] gap-y-[32px] w-full max-w-[1242px]">
          {experienceData.map((experience) => (
            <Card
              key={experience.id}
              className="relative h-48 rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[23px] before:[background:linear-gradient(180deg,rgba(54,55,73,0.43)_0%,rgba(54,55,73,0.49)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none overflow-hidden"
            >
              <img
                className="absolute -top-1 left-[-22px] w-[622px] h-[172px]"
                alt="Mask group"
                src={experience.maskImage}
              />
              <CardContent className="relative h-full flex items-center justify-center p-0">
                <div className={`inline-flex items-center ${experience.gap}`}>
                  <img
                    className={`${experience.logoClass} ${experience.logoWidth} ${experience.logoHeight}`}
                    alt={`${experience.title} logo`}
                    src={experience.logo}
                  />
                  <div className="inline-flex flex-col items-start gap-3 flex-[0_0_auto]">
                    <h3 className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-[26px] tracking-[-0.26px] leading-[32.5px] whitespace-nowrap">
                      {experience.title}
                    </h3>
                    <p
                      className={`${experience.descriptionWidth} relative [font-family:'Inter',Helvetica] font-medium text-[#bec0dd] text-base tracking-[0] leading-[20.8px]`}
                    >
                      {experience.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
