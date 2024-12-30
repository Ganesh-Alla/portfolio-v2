"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCalendar } from "react-icons/fi";

export interface ProjectListProps {
  name: string;
  imageUrl: string;
  description: string;
  techStack: string[];
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  date: string; // New field for month and year
}

export default function ProjectList(props: ProjectListProps) {

  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.1,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="w-full overflow-hidden bg-white rounded-lg border border-accent/20 bg-card text-card-foreground shadow-md transition-all duration-300 hover:shadow-lg  flex flex-col"
    >
      <div className="relative w-full aspect-video border border-b-2">
        <Image
          loading="lazy"
          className="h-full w-full object-cover"
          src={props.imageUrl}
          alt={`${props.name} project thumbnail`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{props.name}</h3>
          <div className="w-48 flex items-center justify-end text-sm text-muted-foreground">
            <FiCalendar className="mr-1" />
            {props.date}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{props.description}</p>

        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {props.techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-accent/10 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-accent/20">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <FiGithub className="h-5 w-5" />
            Source Code
          </a>
          {props.liveWebsiteHref ? (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
            >
              <FiExternalLink className="h-5 w-5" />
              Live Demo
            </a>
          ) : (
            <span className="text-sm text-muted-foreground">No live demo available</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

