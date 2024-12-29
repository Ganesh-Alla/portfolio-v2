"use client"
import AnimatedLogo from "@/animation/animated-logo";
import Image from "next/image";
import Link from "next/link";

interface Props {
  link: string;
  alt_text: string;
  image_file: string;
}

export function SocialIcon({ alt_text, image_file, link }: Props): JSX.Element {
  return (
    <a href={link} target="_blank" >
      <Image
      width={24}
      height={24}
        src={image_file}
        alt={alt_text}
        className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
      />
    </a>
  );
}

export const socialMedia: { link: string; image_file: string; alt_text: string; }[] = [
  {
    link: "mailto:allaganesh03@gmail.com", // Replace with your email
    image_file: "/social/mail.svg", // Replace with actual file path for email icon
    alt_text: "Email",
  },
  {
    link: "https://github.com/Ganesh-Alla", // Replace with your GitHub profile URL
    image_file: "/social/github.svg", // Replace with actual file path for GitHub icon
    alt_text: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/ganeshalla", // Replace with your LinkedIn profile URL
    image_file: "/social/linkedin.svg", // Replace with actual file path for LinkedIn icon
    alt_text: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/_ganeshalla_/", // Replace with your Instagram profile URL
    image_file: "/social/instagram.svg", // Replace with actual file path for Instagram icon
    alt_text: "Instagram",
  },
];;

export default function SocialBar(): JSX.Element {

 

  return (
    <div className="h-full fixed left-3 md:left-5 bottom-0 z-30 hidden md:block">
    <div className="h-full flex flex-col justify-between items-center ">
    <Link
        href="/"
        className="drop-shadow-teralight flex items-center justify-center"
        aria-label="Return to home page"
      >
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 mt-8">
          <AnimatedLogo />
        </div>
      </Link>
      <div className="flex flex-col justify-between items-center ">
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
      <div className="h-20 lg:h-32 mt-2 w-1/12 bg-accent" />
      </div>
    </div>
  </div>

  );
}
