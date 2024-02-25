"use client"
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/wasiuddinb/', '_blank');
};

const handleGithubClick = () => {
  window.open('https://www.github.com/WasiuddinB', '_blank');
};

const handleEmailClick = () => {
  const email = 'wasiuddinbhuyian71@gmail.com';
  const subject = 'Emailing to Wasi Uddin Bhuyian';
  const body = 'Assalamu alaikum, Hope you are doing well.';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

const handleLeetClick = () => {
  window.open('https://www.leetcode.com/WasiuddinB/', '_blank');
};

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>Assalamualaikum, WELCOME TO MY PORTFOLIO</p>
            <h1 className='py-4 text-gray-700'>I am 
                <span className='text-[#5196e5]'> Wasi Uddin Bhuyian</span>
            </h1>
            <h1 className='py-4 text-gray-700'>A Software Engineer</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I am a <span className='text-[#5196e5]'>Computer Science & Engineering</span> undergrad student from <span className='text-[#5196e5]'>United International University</span>.
            As a fresh graduate, i am constantly working on myself, trying my best to improve at problem solving as well as
            software development. In this space, you'll find a curated collection of my work, reflecting my dedication towards 
            development.
            </p>
            <div className='flex item-center justify-between max-w-[330px] m-auto py-4'>
            
            <button className='rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300'
            onClick={handleLinkedInClick}>
                  <FaLinkedinIn/>
            </button>
            <button className='rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300'
            onClick={handleGithubClick}>
                  <FaGithub/>
            </button>
            <button className='rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300'
            onClick={handleEmailClick}>
                  <AiOutlineMail/>
            </button>
            <button className='rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300'
            onClick={handleLeetClick}>
                  <FaCode/>
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
