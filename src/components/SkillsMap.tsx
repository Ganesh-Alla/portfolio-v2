import FadeRight from '@/animation/fade-right';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import SkillPill from './utility/skills-pill';
import { SKILLS_DATA } from '@/data/skillsData';
import { SkillPillProps } from './utility/skills-pill';

interface SkillsMapProps {
  isMobile: boolean;
}

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

const SkillsMap: React.FC<SkillsMapProps> = ({ isMobile }) => {
  return (
    <>
    {SKILLS_DATA.map((section:SkillsShowcaseProps["skills"][number]) => (
        <AnimatePresence key={section.sectionName}>
          <div className="mt-4">
            <span className="text-sm font-semibold text-foreground sm:text-lg">
              {section.sectionName}
            </span>
            <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
              {section.skills.map((pill:SkillPillProps, index:number) => (
                <FadeRight
                  key={`lang-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobile}
                  className="-z-20"
                >
                  <SkillPill pill={pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
      ))}
      </>
  );
};

export default SkillsMap;
