"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
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

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const[shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(()=>{
    const handleShadow=()=>{
      if(window.scrollY >=90){
        setShadow(true)
      }
      else{
        setShadow(false)
      }
    };
    window.addEventListener('scroll',handleShadow);
  },[]);

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src='/WasiuddinB.png' alt='/' width="85" height="40"/>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/#home'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#publication'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Publications</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25}/>
            </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f7fdfd] p-10 ease-in duration-500':
        'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/WasiuddinB.png' width={70} height={30} alt='/'/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-3'>Hope you're having a great day.</p>
            </div>
          </div>
          <div className='py-3 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/#home'>
                <li onClick={()=>{setNav(false)}} className='py-3 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=>{setNav(false)}} className='py-3 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={()=>{setNav(false)}} className='py-3 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={()=>{setNav(false)}} className='py-3 text-sm'>Projects</li>
              </Link>
              <Link href='/#publication'>
                <li onClick={()=>{setNav(false)}} className='py-3 text-sm'>Publications</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={()=>{setNav(false)}} className='py-3 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-12'>
              <p className='uppercase tracking-widest text-[#5196e5]'>Let's Connect</p>
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
      </div>
    </div>
  )
}

export default Navbar
