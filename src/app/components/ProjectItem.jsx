import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#4798c7] to-[#70bfff]'>
        <Image className='rounded-xl group-hover:opacity-30' src={backgroundImg} alt='/' />
        <div className='hidden group-hover:block absolute'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <a href={projectUrl} target="_blank">
                <p className='text-center py-3 rounded-lg text-gray-900 font-bold text-lg cursor-pointer underline'>Click To Learn More About The Project</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem
