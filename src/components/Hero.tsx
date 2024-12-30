"use client"
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
import EllipseSVG from '../../public/vectors/ellipse.svg'
import HeroImg from '../../public/images/hero.png';


const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Image
        src={EllipseSVG}
        alt="Ellipse Vector"
        className="absolute right-24 bottom-10  w-2/3 md:w-1/2 lg:w-35p pointer-events-none"
      />
      <Image
       width={24}
       height={24}
        src="/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        className="animate-spin absolute right-1/3 top-28 w-1/4 md:w-16  pointer-events-none"
      />
    <motion.section
      animate={{
        transform: `translateY(${progress * 10}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className=" flex mt-28 max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <AnimatePresence>
       <section className="lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <FadeUp key="title-main" duration={0.6}>
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1F8D93]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ganesh Alla",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Tech-savvy student passionate about designing and implementing responsive web and Android apps using Next.js and React Native, with expertise in reusable components, performance optimization, and enhancing user experience.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:text-black"
              >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dNKCFjYqkx87ozAY_40dd1uTLO6NkfzR/view?usp=sharing"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
          </FadeUp>
        </div>
        <FadeUp key="title-main" duration={0.6}>
       <div
          className="mt-4 lg:mt-0 flex justify-center md:block"
        >
           <div className="rounded-full w-[250px] h-[250px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Tilt options={defaultOptions} className="transition-all">
            <Image
              src={HeroImg}
              alt="hero image"
              />
              </Tilt>
          </div>
          </div>
        </FadeUp>
      </div>
    </section>
    </AnimatePresence>
    </motion.section></>
  );
}
