import{ SKILLS,  SkillType } from '@/data/skills';
import Image from 'next/image';
import React from 'react'

const SkillsIcons = () => {
  return (
    <div className="flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6">
    {SKILLS.map(({ src, name }: SkillType) => {
      return <Image src={src} alt={name} key={src} className="p-2 sm:p-6 h-16 sm:h-24" width={150} height={150}/>;
    })}
  </div>
  )
}

export default SkillsIcons