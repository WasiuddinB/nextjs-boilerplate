"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const socials = [
  { icon: <FaLinkedinIn size={18} />, href: 'https://www.linkedin.com/in/wasiuddinb/', label: 'LinkedIn' },
  { icon: <FaGithub size={18} />, href: 'https://www.github.com/WasiuddinB', label: 'GitHub' },
  { icon: <AiOutlineMail size={18} />, href: 'mailto:wasiuddinbhuyian71@gmail.com?subject=Emailing%20to%20Wasi%20Uddin%20Bhuyian&body=Assalamu%20alaikum%2C%20Hope%20you%20are%20doing%20well.', label: 'Email' },
  { icon: <FaCode size={18} />, href: 'https://www.leetcode.com/WasiuddinB/', label: 'LeetCode' },
]

const Main = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      id='home'
      className='relative w-full min-h-screen flex flex-col justify-center bg-[#0a0a0a] overflow-hidden'
    >
      {/* Background grid */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#64ffda]/5 blur-[120px] pointer-events-none' />

      <div className='relative max-w-6xl mx-auto px-6 py-32'>
        {/* Vertical social rail — left side on large screens */}
        <div className='hidden lg:flex flex-col items-center gap-5 fixed left-8 bottom-0 after:content-[""] after:block after:w-px after:h-24 after:bg-[#64ffda]/40'>
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target='_blank'
              rel='noreferrer'
              aria-label={s.label}
              className='text-slate-500 hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-200'
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Email rail — right side on large screens */}
        <div className='hidden lg:flex flex-col items-center fixed right-8 bottom-0 after:content-[""] after:block after:w-px after:h-24 after:bg-[#64ffda]/40'>
          <a
            href='mailto:wasiuddinbhuyian71@gmail.com'
            className='font-mono text-xs text-slate-500 hover:text-[#64ffda] transition-colors writing-vertical-lr tracking-widest mb-5'
            style={{ writingMode: 'vertical-rl' }}
          >
            wasiuddinbhuyian71@gmail.com
          </a>
        </div>

        {/* Hero content */}
        <div
          className='transition-all duration-700 ease-out'
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p
            className='font-mono text-[#64ffda] text-sm mb-6 tracking-wider'
            style={{ transitionDelay: '100ms' }}
          >
            Assalamualaikum - Welcome to my portfolio
          </p>

          <h1
            className='text-5xl md:text-7xl font-bold text-white leading-tight mb-4'
            style={{ transitionDelay: '200ms' }}
          >
            Wasi Uddin
            <br />
            <span className='text-slate-400'>Bhuyian.</span>
          </h1>

          <h2
            className='text-3xl md:text-5xl font-bold text-slate-500 mb-8 leading-tight'
            style={{ transitionDelay: '300ms' }}
          >
            I build things for the web.
          </h2>

          <p
            className='text-slate-400 max-w-xl text-lg leading-relaxed mb-12'
            style={{ transitionDelay: '400ms' }}
          >
            I&apos;m a Junior Software Developer at{' '}
            <span className='text-[#64ffda]'>Shomvob Technologies</span> specialising in building
            exceptional digital experiences. Currently focused on full-stack JavaScript - React, Next.js,
            and Node.js.
          </p>

          <div
            className='flex flex-wrap gap-4 items-center'
            style={{ transitionDelay: '500ms' }}
          >
            <Link
              href='/#projects'
              className='px-7 py-3.5 border border-[#64ffda] text-[#64ffda] font-mono text-sm rounded hover:bg-[#64ffda]/10 transition-all duration-200'
            >
              View my work
            </Link>
            <Link
              href='/#contact'
              className='px-7 py-3.5 bg-transparent text-slate-400 font-mono text-sm rounded hover:text-white transition-colors duration-200'
            >
              Get in touch →
            </Link>
          </div>

          {/* Mobile socials */}
          <div className='flex gap-5 mt-14 lg:hidden'>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target='_blank'
                rel='noreferrer'
                aria-label={s.label}
                className='text-slate-500 hover:text-[#64ffda] transition-colors duration-200'
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main