import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5196e5]'>
              About
            </p>
            <h2 className='py-4'>
              Know me better!
            </h2>
            <p className='py-2 text-gray-600'>
              I am a CSE graduate. I have done my BSc from United International University <span className='text-[#5196e5]'>(UIU)</span>.
              My journey in the world of technology has been both exhilarating and rewarding.
              Throughout my academic journey, I've had the privilege of receiving scholarships seven times, 
              recognizing my dedication and achievements with awards ranging from 25% to full tuition coverage.
              Eager to embark on a career as a Software Engineer, I am currently sharpening my skills through hands-on projects 
              that span various frameworks and languages. My main focus is on Next.js and React, and I'm actively participating 
              in a comprehensive full-stack course at <span className='text-[#5196e5]'>CDIP</span> to deepen my expertise in the Next.js framework.
            </p>
            <p className='py-2 text-gray-600'>
            My portfolio showcases a diverse array of projects, each reflecting my commitment to innovation and problem-solving.
            From <span className='text-[#5196e5]'>PHP</span> to <span className='text-[#5196e5]'>JavaScript</span>, I've been through the sophisticated world of software development, constantly pushing myself
            to the boundaries of what's possible.
            </p>
            <p className='py-2 text-gray-600'>
            In the pursuit of sharpening my problem-solving skills, I've dedicated significant time to solving <span className='text-[#5196e5]'>LeetCode</span> problems. 
            This consistent effort not only challenges me intellectually but also enhances my ability to approach complex coding 
            challenges with confidence.
            </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl' src='/potrait.jpg' width='350' height='0' alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default About
