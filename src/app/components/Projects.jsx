import React from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Tour-Trail',
    description:
      'A full-stack room-booking platform inspired by Airbnb. Built with Next.js and React for a highly responsive experience, Prisma + MongoDB for type-safe database operations, and TypeScript throughout for reliability.',
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Asif-Uchchas/TourTrail',
    image: '/tour-trail.png',
    featured: true,
  },
  {
    title: 'Krishi-Desk',
    description:
      'An e-commerce platform for farmers to buy and sell agricultural products. Integrates real-time weather APIs to assist decision-making, with secure MD5 authentication and full Selenium test coverage.',
    stack: ['PHP', 'MySQL', 'AJAX', 'Selenium', 'MkDocs'],
    github: 'https://github.com/WasiuddinB/Krishi-Desk',
    image: '/krishidesk.png',
    featured: true,
  },
  {
    title: 'Sneaker-Store',
    description:
      'A mobile e-commerce app for sneaker enthusiasts built with React Native and Redux for smooth state management, Firebase for real-time database and auth, deployed via Expo.',
    stack: ['React Native', 'Redux', 'Firebase', 'Expo', 'JavaScript'],
    github: 'https://github.com/WasiuddinB/Sneaker_Store',
    image: '/sneaker.png',
    featured: true,
  },
  {
    title: 'Online Note Share',
    description:
      'A web platform for students and faculty to share academic notes. Designed with an accessible interface, MySQL for data management, and Bootstrap for a responsive layout.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
    github: 'https://github.com/WasiuddinB/Online_Note_Share',
    image: '/onlinenote.png',
    featured: false,
  },
  {
    title: 'AOOP Donation System',
    description:
      'A JavaFX desktop application for managing charitable donations, built as an academic project demonstrating core OOP principles and GUI design.',
    stack: ['Java', 'JavaFX', 'GUI'],
    github: 'https://github.com/WasiuddinB/AOOP-Charitable-Donation-System',
    image: '/aoop.png',
    featured: false,
  },
]

const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id='projects' className='w-full bg-[#0a0a0a] py-32 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Section label */}
        <div className='flex items-center gap-4 mb-16'>
          <span className='font-mono text-[#64ffda] text-sm'>03.</span>
          <h2 className='text-white text-2xl font-bold'>Projects</h2>
          <div className='flex-1 h-px bg-white/10 max-w-xs' />
        </div>

        {/* Featured projects */}
        <div className='space-y-12 mb-24'>
          {featured.map((project, i) => (
            <div key={project.title} className='group relative grid md:grid-cols-12 gap-0 items-center'>

              {/* Image panel — opposite side from card, sits behind */}
              <div
                className={`hidden md:block md:col-span-7 md:row-start-1 relative h-64 rounded-lg overflow-hidden
                  ${i % 2 === 1 ? 'md:col-start-1' : 'md:col-start-6'}`}
              >
                <div className='absolute inset-0 bg-[#0a0a0a]/70 group-hover:bg-[#0a0a0a]/40 transition-all duration-500 z-10 rounded-lg' />
                <div className='absolute inset-0 bg-[#64ffda]/5 group-hover:bg-transparent transition-all duration-500 z-10 rounded-lg' />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='560px'
                  className='object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 rounded-lg'
                />
              </div>

              {/* Text card — overlaps the image */}
              <div
                className={`md:col-span-7 md:row-start-1 relative z-20
                  ${i % 2 === 1 ? 'md:col-start-5' : 'md:col-start-1'}`}
              >
                <div className='p-8 rounded-lg bg-[#0d1b2e]/95 border border-white/5 group-hover:border-[#64ffda]/20 backdrop-blur-sm transition-all duration-300'>
                  <p className='font-mono text-[#64ffda] text-xs tracking-widest mb-2'>Featured Project</p>
                  <h3 className='text-white text-xl font-bold mb-4'>{project.title}</h3>
                  <p className='text-slate-400 text-sm leading-relaxed mb-6'>{project.description}</p>
                  <ul className='flex flex-wrap gap-2 mb-6'>
                    {project.stack.map((tech) => (
                      <li key={tech} className='font-mono text-xs text-slate-400 bg-white/5 px-2 py-1 rounded'>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className='flex gap-4'>
                    <a href={project.github} target='_blank' rel='noreferrer' aria-label={`${project.title} GitHub`}
                      className='text-slate-400 hover:text-[#64ffda] transition-colors'>
                      <FaGithub size={18} />
                    </a>
                    {project.live && (
                      <a href={project.live} target='_blank' rel='noreferrer' aria-label={`${project.title} live`}
                        className='text-slate-400 hover:text-[#64ffda] transition-colors'>
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile-only: image strip above card */}
              <div className='md:hidden relative w-full h-36 rounded-t-lg overflow-hidden -mb-2 col-span-full'>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0d1b2e] z-10' />
                <Image src={project.image} alt={project.title} fill sizes='100vw' className='object-cover object-top' />
              </div>

            </div>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <p className='text-center font-mono text-slate-500 text-sm mb-10 tracking-widest uppercase'>
            Other Noteworthy Projects
          </p>
          <div className='grid sm:grid-cols-2 gap-4'>
            {others.map((project) => (
              <div key={project.title}
                className='group relative rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#64ffda]/20 hover:bg-[#112240]/60 transition-all duration-300 flex flex-col overflow-hidden'>

                {/* Subtle image peek — fades into card body */}
                <div className='relative w-full h-24 overflow-hidden flex-shrink-0'>
                  <div className='absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-[#0a0a0a]/55 to-[#0d1117] z-10' />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes='(max-width: 640px) 100vw, 50vw'
                    className='object-cover object-top opacity-40 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500'
                  />
                </div>

                {/* Card body */}
                <div className='p-6 flex flex-col flex-1'>
                  <div className='flex justify-between items-start mb-3'>
                    <span className='text-[#64ffda] text-2xl font-mono opacity-20 leading-none'>⌗</span>
                    <div className='flex gap-3'>
                      <a href={project.github} target='_blank' rel='noreferrer' aria-label={`${project.title} GitHub`}
                        className='text-slate-500 hover:text-[#64ffda] transition-colors'>
                        <FaGithub size={17} />
                      </a>
                      {project.live && (
                        <a href={project.live} target='_blank' rel='noreferrer' aria-label={`${project.title} live`}
                          className='text-slate-500 hover:text-[#64ffda] transition-colors'>
                          <FaExternalLinkAlt size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className='text-white font-bold mb-2 group-hover:text-[#64ffda] transition-colors duration-200'>
                    {project.title}
                  </h3>
                  <p className='text-slate-400 text-sm leading-relaxed flex-1 mb-4'>{project.description}</p>
                  <ul className='flex flex-wrap gap-2'>
                    {project.stack.map((tech) => (
                      <li key={tech} className='font-mono text-xs text-slate-500'>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects