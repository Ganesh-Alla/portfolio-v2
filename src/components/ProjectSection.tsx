'use client'

import React, { useState, useEffect, useCallback } from 'react'
import ProjectCard from './ProjectCard'
import HeaderSmall from './utility/header-small';
import Link from 'next/link';
import {PROJECTS_CARD}  from '@/data/projects'
import { type ProjectListProps } from "@/components/ProjectsList";

export default function CustomTestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % PROJECTS_CARD.length)
    }
  }, [isAnimating])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition time

    return () => clearTimeout(timer)
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className='flex flex-col lg:flex-row '>
          <div className="ml-4 w-2/3 flex flex-col justify-center items-center">
            <div>
          <div className="items-center w-full relative">
            <HeaderSmall text="What does he do?" />
            <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              Projects
            </span>
            <br></br>
            <p className="text-[#ADB7BE] text-base  mb-6 lg:text-xl font-normal">
            Here are some of the projects I&apos;d like to share
          </p>
          </h1>
          </div>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
            <Link
              href="/projects"
              className="px-1 inline-block py-1 w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Show All Projects
              </span>
            </Link>
            </div>
            </div>
        </div>


          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {PROJECTS_CARD.map((project: ProjectListProps) => (
               <div key={project.name} className="w-full flex-shrink-0 ">
                  <ProjectCard
                    project={project}
                    key={project.name}
                  />
                  </div>
                ))}
            </div>
          </div>

        <div className="mt-4 flex justify-center gap-4 lg:hidden">
        <Link
              href="/projects"
              className="px-1 inline-block py-1 w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Show All Projects
              </span>
            </Link>
        </div>
    </section>

  
  )
}

