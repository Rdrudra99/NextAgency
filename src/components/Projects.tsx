import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Project data structure for better maintainability
const projectData = [
  {
    id: 1,
    title: "A Branch with Flowers",
    imageUrl: "https://designpro-html.vercel.app/assets/images/projects/work7.jpg",
    category: "Website",
  },
  {
    id: 2,
    title: "Orange Rose Flower",
    imageUrl: "https://designpro-html.vercel.app/assets/images/projects/work1.jpg",
    category: "Apps",
  },
  {
    id: 3,
    title: "Green Plant on a Desk",
    imageUrl: "https://designpro-html.vercel.app/assets/images/projects/work6.jpg",
    category: "Landing",
  },
  {
    id: 4,
    title: "Orange Rose Flower",
    imageUrl: "https://designpro-html.vercel.app/assets/images/projects/work5.jpg",
    category: "Mockup",
  },
];

const ProjectCard = ({ project }: { project: typeof projectData[0] }) => {
  return (
    <div>
      <Link href={project.imageUrl} className="block">
        <div className="rounded-lg overflow-hidden relative group">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-all duration-500 group-hover:blur-[1.5px] group-hover:scale-[1.04]"
              priority={project.id === 1}
              quality={85}
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category badge */}
          <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-[rgba(255,79,1,.5)] py-1.5 px-3.5 text-white text-xs uppercase tracking-wider font-medium">
            {project.category}
          </span>
          
          {/* Title */}
          <div className="absolute left-7.5 -bottom-8 opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 z-10">
            <h3 className="lg:text-2xl text-xl font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

const Projects = () => {
  return (
    <section className="lg:pt-25 pt-15" id="projects">
      <div className="container mx-auto px-20">
        <div className="max-w-3xl mx-auto text-center pb-15">
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-flex items-center gap-1.5 font-normal mb-[5px]">
            <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
            <span>Projects</span>
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black font-medium">
            Featured Projects
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Get a glimpse of our work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projectData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/projects" 
            className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white transition-colors duration-300"
          >
            View all works
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
