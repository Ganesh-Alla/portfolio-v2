"use client"
import useDebounceValue from '@/hooks/useDebounceValue';
import useScreenBreakpoint from '@/hooks/useScreenBreakpoint';
import React from 'react'
import SkillsMap from './SkillsMap';

const SkillsShowCase = () => {
    const breakPoint = useScreenBreakpoint(640);
    const isMobile = useDebounceValue(breakPoint, 600);
  return (
    <section className="overflow-hidden px-6 py-6 sm:px-14 md:px-20">
    <div className="relative mx-auto max-w-7xl">
      <h2 className="text-xl font-semibold text-accent sm:text-4xl">
        Skills
      </h2>
    <SkillsMap isMobile={isMobile}/>
    </div>
  </section>
  )
}

export default SkillsShowCase