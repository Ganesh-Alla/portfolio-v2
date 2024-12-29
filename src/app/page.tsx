import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SkillsShowCase from "@/components/SkillsShowCase";
import SocialBar from "@/components/SocialBar";


export default function Home() {

  return (
    <div className='md:ml-12'>
      <SocialBar />
    <Hero/>
    <Skills/>
     <SkillsShowCase/>
     <Projects/>
     <Contact/>
    </div>
  );
}
