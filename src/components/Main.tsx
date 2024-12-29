import { ReactNode } from "react";

import { Montserrat } from "next/font/google";

import Navbar from "./NavBar";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/classes/classNames";
import Footer from "./Footer";
// import SocialBar from "./SocialBar";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        {/* <SocialBar /> */}
        <Navbar routes={routes} />
         <main className="h-full">
          {props.children}
         </main>
         <Footer />
      </div>
    </>
  );
}
