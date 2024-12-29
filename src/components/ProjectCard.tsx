import Image from 'next/image'
import React from 'react'
import { ProjectListProps } from './ProjectsList';

interface ProjectCardProps {
    project: ProjectListProps;
  }
const ProjectCard = ({ project }: ProjectCardProps) => {

  return (
        <>
     <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-accent/20 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
        <Image
          src={project.imageUrl}
          alt={`${project.name} preview`}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
          priority
          quality={100}
        />
      </div>
</div>
        </>
  )
}

export default ProjectCard