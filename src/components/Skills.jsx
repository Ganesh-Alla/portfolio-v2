import Image from 'next/image'
import React from 'react'
import HeaderSmall from './utility/header-small'
import SkillsIcons from './utility/SkillsIcons'
import CylinderSVG from '../../public/vectors/cylinder.svg'
import LVectorSVG from '../../public/vectors/l-vector.svg'
const Skills = () => {
  return (
    <>
    <div className="overflow-hidden  relative h-auto mt-28 md:mt-2 py-10 lg:py-20" id="skills">
      <Image
        src={CylinderSVG}
        alt="Cylinder Vector"
        className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-50 pointer-events-none opacity-50 transition-all animate-absoluteright"
      />
      <Image
        src={LVectorSVG}
        alt="L Vector"
        className="absolute left-0 md:left-35p bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none"
      />
      <div className="ml-4 mt-8 md:mt-0 sm:mx-8 md:mx-12 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
          {/* Hero Header */}
          <div className="items-center w-3/4 relative">
            <HeaderSmall text="What does he do?" />
            <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              About me
            </span>
            <br></br>
            <p className="text-[#ADB7BE] text-base  mb-6 lg:text-xl font-normal">
            With every line of code, I aim to create something meaningful and user-centric.
          </p>
          </h1>
          </div>
        </div>
        <div className="col-span-full md:col-span-12 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
          <SkillsIcons />
        </div>
      </div>
    </div>
  </>
  )
}

export default Skills