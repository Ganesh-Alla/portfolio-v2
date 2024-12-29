"use client"
import { SocialIcon, socialMedia } from "./SocialBar";

export default function Footer () {
 

    return (
      <div className="bg-gray-900 flex w-full justify-center ">
        <div className="  w-full mx-12 p-4  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 overflow-hidden">
          <div className="flex flex-col justify-between  sm:flex-row">
            <p className="text-sm text-gray-500 italic">
            {`"Building today for the technologies of tomorrow"`}
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {socialMedia.map((item) => {
        return (
          <SocialIcon
            link={item.link}
            image_file={item.image_file}
            alt_text={item.alt_text}
            key={item.image_file}
          />
        );
      })}
            </div>
          </div>
        </div>
      </div>
    );
  };