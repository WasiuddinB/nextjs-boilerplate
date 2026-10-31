import React from 'react'
import Image from 'next/image'
import Section from './Section'
import GithubActivity from './GithubActivity'

const projects = [
  {
    title: 'Krishi-Desk',
    description:
      'An e-commerce platform where farmers buy and sell agricultural products. It pulls in real-time weather data to help with decisions, uses MD5-based authentication, and has Selenium tests.',
    stack: ['PHP', 'MySQL', 'AJAX', 'Selenium', 'MkDocs'],
    github: 'https://github.com/WasiuddinB/Krishi-Desk',
    live: 'https://krishi-desk.vercel.app',
    image: '/krishidesk.png',
    featured: true,
  },
  {
    title: 'Tour-Trail',
    description:
      'A room-booking platform inspired by Airbnb. Next.js and React on the front end, Prisma with MongoDB for the data layer, and TypeScript throughout.',
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Asif-Uchchas/TourTrail',
    image: '/tour-trail.png',
    featured: true,
  },
  {
    title: 'Sneaker-Store',
    description:
      'A mobile shopping app for sneakers, built with React Native and Redux for state management. Firebase handles the realtime database and auth, and it is deployed with Expo.',
    stack: ['React Native', 'Redux', 'Firebase', 'Expo', 'JavaScript'],
    github: 'https://github.com/WasiuddinB/Sneaker_Store',
    image: '/sneaker.png',
    portrait: true,
    featured: true,
  },
  {
    title: 'Online Note Share',
    description:
      'A web platform for students and faculty to share academic notes. Designed with an accessible interface, MySQL for the data and Bootstrap for the responsive layout.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
    github: 'https://github.com/WasiuddinB/Online_Note_Share',
    image: '/onlinenote.png',
    featured: false,
  },
  {
    title: 'AOOP Donation System',
    description:
      'A JavaFX desktop application for managing charitable donations, built as an academic project to practise OOP principles and GUI design.',
    stack: ['Java', 'JavaFX', 'GUI'],
    github: 'https://github.com/WasiuddinB/AOOP-Charitable-Donation-System',
    image: '/aoop.png',
    featured: false,
  },
]

const ProjectLinks = ({ project }) => (
  <p className='flex flex-wrap gap-x-6 gap-y-2 text-sm'>
    {project.live && (
      <a href={project.live} target='_blank' rel='noreferrer' className='link text-ink'>
        Live site<span className='sr-only'> for {project.title}</span>
        <span aria-hidden='true'> ↗</span>
      </a>
    )}
    {project.github && (
      <a href={project.github} target='_blank' rel='noreferrer' className='link text-ink'>
        Source on GitHub<span className='sr-only'> for {project.title}</span>
        <span aria-hidden='true'> ↗</span>
      </a>
    )}
  </p>
)

const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <Section id='projects' title='Projects'>
      {/* Featured */}
      <ul className='divide-y divide-rule'>
        {featured.map((project) => (
          <li
            key={project.title}
            className='grid items-start gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-9 md:gap-x-8'
          >
            <div className='md:col-span-4'>
              <h3 className='font-display text-2xl md:text-3xl leading-tight text-ink'>
                {project.title}
              </h3>
              <p className='mt-4'>{project.description}</p>
              <p className='meta mt-5'>{project.stack.join(', ')}</p>
              <div className='mt-6'>
                <ProjectLinks project={project} />
              </div>
            </div>

            {/* Wide screenshots fill the frame; the phone screenshot is shown whole, on its own background */}
            <div
              className={`relative aspect-[2/1] overflow-hidden rounded-sm border border-rule max-md:order-first md:col-span-5 ${
                project.portrait ? 'bg-[#f1f2f1]' : 'bg-rule'
              }`}
            >
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                sizes='(min-width: 768px) 460px, 100vw'
                className={project.portrait ? 'object-contain' : 'object-cover object-top'}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Smaller projects */}
      <div className='mt-20 border-t border-rule pt-10'>
        <h3 className='meta'>Other projects</h3>
        <ul className='mt-6 divide-y divide-rule'>
          {others.map((project) => (
            <li
              key={project.title}
              className='grid gap-x-8 gap-y-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-3'
            >
              <h4 className='font-display text-xl text-ink'>{project.title}</h4>
              <div className='sm:col-span-2'>
                <p>{project.description}</p>
                <p className='meta mt-4'>{project.stack.join(', ')}</p>
                <div className='mt-4'>
                  <ProjectLinks project={project} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <GithubActivity />
    </Section>
  )
}

export default Projects
