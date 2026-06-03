// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-8 whitespace-pre-line">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center lg:justify-end items-start order-1 lg:order-2">
          <div className="relative w-[280px] h-[380px] flex-shrink-0">
            <Image
              src={"/harsh.jpg"}
              fill
              alt="Harsh Yadav"
              className="rounded-xl object-cover transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
