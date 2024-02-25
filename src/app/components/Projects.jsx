import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import krishi_image from '../../../public/krishidesk.png'
import online_note from '../../../public/onlinenote.png'
import sneaker from '../../../public/sneaker.png'
import aoop from '../../../public/aoop.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5196e5]'>Projects</p>
        <h2 className='py-4'>My projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title="Krishi-Desk" backgroundImg={krishi_image} projectUrl='https://github.com/WasiuddinB/Krishi-Desk' />
            <ProjectItem title="Online-Note-Share" backgroundImg={online_note} projectUrl='https://github.com/WasiuddinB/Online_Note_Share' />
            <ProjectItem title="Sneaker-Store" backgroundImg={sneaker} projectUrl='https://github.com/WasiuddinB/Sneaker_Store' />
            <ProjectItem title="AOOP-Donation-System" backgroundImg={aoop} projectUrl='https://github.com/WasiuddinB/AOOP-Charitable-Donation-System' />
        </div>
      </div>
      <p className='text-xl ml-16 tracking-widest uppercase text-[#5196e5]'>ONGOING PROJECTS WILL BE ADDED SOON...</p>
    </div>
  )
}

export default Projects
