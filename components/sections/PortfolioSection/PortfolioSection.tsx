import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { motion } from "framer-motion";

const techStackColumn1 = [
    { name: "ReactJS" },
    { name: "Express" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "PHP" },
    { name: "Ruby on Rails" },
    { name: "TypeScript" },
    { name: "React Native" },
];

const techStackColumn2 = [
    { name: "MongoDB" },
    { name: "Firebase" },
    { name: "TailwindCSS" },
    { name: "Socket.IO" },
    { name: "Prisma" },
    { name: "Symfony" },
    { name: "Laravel" },
    { name: "IA AGENT" },
    { name: "Python" },

];


const locationBadges = [
    { name: "USA", position: "top-[calc(50.00%_-_24px)] left-[calc(50.00%_-_220px)]", },
    { name: "Germany", position: "top-[calc(50.00%_+_18px)] left-[calc(50.00%_-_34px)]", },
    { name: "Russia", position: "top-[calc(50.00%_-_40px)] left-[calc(50.00%_+_151px)]", },
];

export const PortfolioSection = () => {
    return (
        <section className="relative w-full bg-[#000319] rounded-3xl overflow-hidden py-8 px-4 md:py-16 md:px-6 lg:py-[65px] lg:px-[100px]">
            <div className="relative flex flex-col w-full max-w-[1240px] mx-auto items-start gap-6 md:gap-8 lg:gap-[39px]">

                {/* First Row - Two Cards */}
                <div className="flex flex-col lg:flex-row items-start gap-6 w-full opacity-100">
                    {/* Collaboration Card */}
                    <Card className="w-full lg:flex-1 h-[300px] md:h-[400px] lg:h-[541px] rounded-[23px] border-[none] m-0 lg:m-2">
                        <CardContent className="relative p-0 h-full">
                            <img className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" alt="Collaboration" src="/image-14.png" />
                            <h3 className="absolute top-1/2 lg:top-[367px] left-4 lg:left-10 w-[90%] lg:w-[393px] [font-family:'Inter',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-[32px] tracking-[-0.32px] leading-tight lg:leading-[38.4px]">
                                I prioritize client collaboration, fostering open communication
                            </h3>
                            {/* <img className="absolute top-3/4 lg:top-[343px] right-4 lg:left-[506px] w-20 lg:w-[140px] h-7 lg:h-[49px]" alt="Group illustration" src="/group.png" /> */}
                            <div className="absolute top-4 lg:top-[69px] left-4 lg:left-[53px] w-24 lg:w-[152px] h-8 lg:h-[59px] rotate-180">
                                <img className="w-[19.56%] h-[41.40%] top-[46.92%] left-[6.92%] absolute -rotate-180" alt="Speech bubble tail" src="/vector.svg" />
                                <img className="w-[75.22%] h-[49.68%] top-0 left-[23.47%] absolute -rotate-180" alt="Speech bubble" src="/vector-1.svg" />
                                {/* <div className="absolute top-6 lg:top-11 left-[calc(50.00%_-_38px)] lg:left-[calc(50.00%_-_76px)] w-6 lg:w-[30px] h-3 lg:h-[15px] flex items-center justify-center rotate-180 [font-family:'Inter',Helvetica] font-medium text-[#0c0e23] text-xs lg:text-[10px] tracking-[-0.48px] leading-[12.0px]">
                                    Me
                                </div> */}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right Column - Two Cards Stacked */}
                    <div className="flex flex-col w-full lg:w-[521px] items-start gap-4 lg:gap-[30px] h-auto lg:h-[541px]">
                        {/* World Map Card */}
                        <Card className="w-full h-[200px] md:h-[250px] lg:h-[255px] rounded-[23px] border-[none]">
                            <CardContent className="relative p-0 h-full">
                                <img className="absolute top-0 left-0 w-full h-32 md:h-40 lg:h-64 object-cover" alt="World map" src="/image-12.png" />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1.5 w-full max-w-[593px] h-16 md:h-20 lg:h-[164px]">
                                    <img className="absolute w-full h-full top-0 left-[7.08%]" alt="Location markers" src="/globe.png" />
                                    {locationBadges.map((location, index) => (
                                        <Badge
                                            key={index}
                                            className={`absolute ${location.position} inline-flex items-center justify-center gap-2.5 px-[15px] py-2 h-auto rounded-[11px] border-[#6971A2] bg-[linear-gradient(150deg,#161A31_0%,#06091F_100%)] opacity-30`}
                                        >
                                            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#e4ecff] text-xs lg:text-[13px] tracking-[-0.48px] leading-[15.6px] whitespace-nowrap">
                                                {location.name}
                                            </span>
                                        </Badge>
                                    ))}
                                </div>
                                <h3 className="absolute top-4 lg:top-10 left-4 lg:left-[35px] w-[80%] lg:w-[411px] [font-family:'Inter',Helvetica] font-bold text-white text-lg md:text-xl lg:text-3xl tracking-[-0.30px] leading-tight lg:leading-[36.0px]">
                                    I&apos;m very flexible with time zone communications
                                </h3>
                            </CardContent>
                        </Card>

                        {/* Tech Stack Card */}
                        <Card className="w-full h-[200px] md:h-[250px] lg:h-[255px] rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden">
                            <CardContent className="relative p-0 h-full">
                                <div className="absolute -top-2 lg:-top-5 left-1/2 lg:left-[211px] transform -translate-x-1/2 lg:translate-x-0 w-48 md:w-64 lg:w-[290px] h-32 md:h-40 lg:h-[295px] flex gap-2 lg:gap-[9.6px]">
                                    <div className="w-24 md:w-32 lg:w-[140.17px] h-full flex">
                                        <div className="inline-flex w-full h-[268.29px] relative flex-col items-start gap-2 lg:gap-[12.19px]">
                                            <motion.div
                                                className="flex flex-col items-center gap-3"
                                                animate={{ y: ["0%", "-100%"] }}
                                                transition={{
                                                    duration: 30,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            >
                                                {[...techStackColumn1, ...techStackColumn1].map((tech, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-[140px] h-[50px] bg-[#10132e] rounded-lg flex items-center justify-center text-white text-sm font-semibold"
                                                    >
                                                        {tech.name}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="w-24 md:w-32 lg:w-[140.17px] h-full flex overflow-hidden">
                                        <div className="inline-flex mt-[-18px] lg:mt-[-36.0px] w-full h-[268.29px] ml-0 relative flex-col items-start gap-2 lg:gap-[12.19px]">
                                            <motion.div
                                                className="flex flex-col items-center gap-3"
                                                animate={{ y: ["-100%", "0%"] }}
                                                transition={{
                                                    duration: 30,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            >
                                                {[...techStackColumn2, ...techStackColumn2].map((tech, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-[140px] h-[50px] bg-[#10132e] rounded-lg flex items-center justify-center text-white text-sm font-semibold"
                                                    >
                                                        {tech.name}
                                                    </div>
                                                ))}
                                            </motion.div>

                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex flex-col items-start gap-2 absolute top-4 lg:top-[calc(50.00%_-_38px)] left-4 lg:left-[21px]">
                                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#c1c2d3] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                                        I constantly try to improve
                                    </p>
                                    <h3 className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-xl lg:text-[32px] tracking-[-0.32px] leading-[38.4px] whitespace-nowrap">
                                        My tech stack
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Second Row - Three Cards */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-auto lg:h-[390px] gap-6">
                    {/* Left Column - Two Cards Stacked */}
                    <div className="flex flex-col w-full lg:w-[351px] items-start gap-4 lg:gap-[30px] h-auto">
                        {/* Tech Enthusiast Card */}
                        <Card className="w-full h-[150px] md:h-[180px] lg:h-[180px] rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden">
                            <CardContent className="relative p-0 h-full">
                                <img className="w-full h-full absolute top-0 left-0 object-cover" alt="Background pattern" src="/background-1.png" />
                                <h3 className="absolute top-4 lg:top-[29px] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[301px] [font-family:'Inter',Helvetica] font-bold text-white text-lg md:text-xl lg:text-2xl tracking-[-0.24px] leading-tight lg:leading-[28.8px] text-center">
                                    Tech enthusiast with a passion for development.
                                </h3>
                                <img className="absolute top-1/2 lg:top-[84px] left-1/2 transform -translate-x-1/2 w-32 lg:w-52 h-12 lg:h-24" alt="Decorative element" src="/section-input-1.svg" />
                            </CardContent>
                        </Card>

                        {/* Project Together Card */}
                        <Card className="flex flex-col w-full items-center justify-center gap-2 px-4 lg:px-[19px] py-4 lg:py-0 h-[120px] md:h-[140px] lg:h-[180px] bg-[#06091f] rounded-[20px] overflow-hidden">
                            <CardContent className="relative p-0 w-full h-full flex items-center justify-center">
                                <img className="absolute top-0 left-0 w-full h-full" alt="Background blob" src="/backgroundblobservicepng.png" />
                                <div className="gap-3 rotate-180 inline-flex flex-col items-center relative z-10">
                                    <h3 className="relative w-full max-w-[241px] rotate-180 [font-family:'Inter',Helvetica] font-bold text-white text-lg md:text-xl lg:text-2xl text-center tracking-[-0.24px] leading-tight lg:leading-[28.8px]">
                                        Do you want to start a project together?
                                    </h3>
                                    <Button className="inline-flex items-center justify-center gap-2 px-3 lg:px-4 py-2 lg:py-3 h-auto rounded-[7px] border-[none] rotate-180">
                                        <img className="relative w-3 h-3 lg:w-3.5 lg:h-3.5 -rotate-180" alt="Email icon" src="/card.svg" />
                                        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#e4ecff] text-sm tracking-[-0.48px] leading-[16.8px] whitespace-nowrap">
                                            Copy my email address
                                        </span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* JS Animation Library Card */}
                    <Card className="w-full lg:w-[861px] h-[200px] md:h-[250px] lg:h-full rounded-[23px] border-[none] bg-[linear-gradient(150deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] overflow-hidden">
                        <CardContent className="relative p-0 h-full">
                            <img className="w-full h-full absolute top-0 left-0 object-cover" alt="Background pattern" src="/background-1.png" />
                            <img className="absolute top-1/2 lg:top-[calc(50.00%_-_192px)] right-0 lg:right-[-84px] w-48 md:w-64 lg:w-[500px] h-32 md:h-48 lg:h-[383px] object-cover" alt="Laptop with animation" src="/image-13.png" />
                            <div className="inline-flex flex-col items-start gap-3 lg:gap-[15px] absolute top-4 lg:top-[calc(50.00%_-_56px)] left-4 lg:left-[43px]">
                                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#e4ecff] text-sm lg:text-base tracking-[2.40px] leading-[19.2px] whitespace-nowrap">
                                    THE INSIDE SCOOP
                                </p>
                                <h3 className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-[32px] tracking-[-0.32px] leading-tight lg:leading-[38.4px]">
                                    Currently building a<br />JS Animation library
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};