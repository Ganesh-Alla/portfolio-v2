import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderSmall from './utility/header-small'
import HeartSVG from '../../public/vectors/heart.svg'
import ArrowRightSVG from '../../public/vectors/arrows-right.svg'
import BoxesSVG from '../../public/vectors/boxes.svg'
import TextCards from './TextCards'
import ProjectSection from './ProjectSection'



const Projects = () => {
  return (
    <>
    <div className="relative h-auto py-10 lg:py-20">
          <Image
            src={HeartSVG}
            alt="Circle Vector"
            className="absolute -right-50p md:-right-96 bottom-16 md:-bottom-20 pointer-events-none animate-pulse"
          />
          <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center w-3/4 relative">
                <Image
                  src={BoxesSVG}
                  alt="Box Vector"
                  className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
                />
                <div className='flex flex-col w-full'>
                <HeaderSmall text="Let’s walk the talk!" />

                <h1 className="sm:w-4/5 mb-3 mt-1 text-xl sm:text-2xl  lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                  Some awesome <span className="text-pink-600 font-bold">products</span> for the awesome
                  poeple
                </h1>
                <h1 className="mb-3 mt-6 text-xl sm:text-lg lg:text-2xl xl:text-1xl font-extrabold text-white leading-none text-wrap">
                  Something he has <span className="text-pink-600 font-bold">built.</span>
                </h1>
                <div className="hidden  w-full lg:flex m-5 justify-end transform transform-all animate-translatedown">
                  <Link href="#projects">
                    <Image
                      src={ArrowRightSVG}
                      alt="Next"
                      className="hidden  w-14  lg:block  lg:mt-5 transform rotate-90 "
                    />
                  </Link>
                </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-12  lg:col-span-6 flex flex-col">
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="Websites"
                  text=" He adds certain special hidden recipes and making his websites look enticing."
                  color="bg-green-600"
                />
              </div>
              <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCards
                  heading="Apps"
                  text="The art of creating some awesome smartphone applications using React Native."
                  color="bg-pink-600"
                />
              </div>
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCards
                  heading="UI/UX"
                  text="He uses his outstanding engineering abilities to provide users an awesome interface and experience"
                  color="bg-green-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16 p-10" id="projects">
          <ProjectSection/>
        </div>
    </>
  )
}

export default Projects