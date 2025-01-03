"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from 'next/router';

import { AnimatePresence, motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
// import ThemeSwitch from "@/components/utility/theme-switch";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/classes/classNames";
import AnimatedLogo from "@/animation/animated-logo";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const pathName = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };


  const isHomeRoute = pathName === '/';

  return (
    <header className="fixed top-0 z-50 px-6 py-6 w-full">
    <div className={` flex items-center justify-between  lg:max-w-8xl ${isHomeRoute?'md:justify-end':''}`}>
      <Link
        href="/"
        className={`drop-shadow-teralight flex items-center justify-center ${isHomeRoute?'md:hidden':''}`}
        aria-label="Return to home page"
      >
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 ">
          <AnimatedLogo />
        </div>
      </Link>
        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((_link, index) => {
              return (
                <li
                  key={index}
                  className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                >
                  <Link
                    href={_link.href}
                    className={classNames(
                      pathName === _link.href
                        ? "font-semibold text-background dark:hover:text-foreground"
                        : "text-muted-foreground",
                      "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                    )}
                  >
                    {_link.href === pathName && (
                      <motion.span
                        layoutId="tab-pill"
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-accent group-hover:bg-accent/80"
                      ></motion.span>
                    )}
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <ThemeSwitch /> */}
        </nav>
        <AnimatePresence>
          <MenuLogo open={isModalOpen} toggle={toggleModal}/>
        </AnimatePresence>
      </div>

      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
