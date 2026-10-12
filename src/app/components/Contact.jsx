"use client"
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://www.github.com/WasiuddinB', label: 'GitHub' },
  { icon: <FaLinkedinIn size={18} />, href: 'https://www.linkedin.com/in/wasiuddinb/', label: 'LinkedIn' },
  { icon: <AiOutlineMail size={18} />, href: 'mailto:wasiuddinbhuyian71@gmail.com', label: 'Email' },
  { icon: <FaCode size={18} />, href: 'https://www.leetcode.com/WasiuddinB/', label: 'LeetCode' },
]

const Contact = () => {
  return (
    <section id='contact' className='w-full bg-[#0a0a0a] py-32 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Section label */}
        <div className='flex items-center gap-4 mb-16'>
          <span className='font-mono text-[#64ffda] text-sm'>05.</span>
          <h2 className='text-white text-2xl font-bold'>Contact</h2>
          <div className='flex-1 h-px bg-white/10 max-w-xs' />
        </div>

        <div className='max-w-xl'>
          <p className='font-mono text-[#64ffda] text-sm mb-4 tracking-wider'>What&apos;s next?</p>
          <h3 className='text-white text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            Get In Touch.
          </h3>
          <p className='text-slate-400 leading-relaxed mb-10'>
            I&apos;m currently open to new opportunities. Whether you have a question, a project in mind,
            or just want to say hello — my inbox is always open. I&apos;ll do my best to get back to you!
          </p>

          <a
            href='mailto:wasiuddinbhuyian71@gmail.com?subject=Emailing%20to%20Wasi%20Uddin%20Bhuyian&body=Assalamu%20alaikum%2C%20Hope%20you%20are%20doing%20well.'
            className='inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono text-sm rounded hover:bg-[#64ffda]/10 transition-all duration-200 mb-16'
          >
            Say Hello →
          </a>

          {/* Socials row */}
          <div className='flex gap-6 items-center'>
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
        </div>

        {/* Footer */}
        <div className='mt-24 pt-8 border-t border-white/5'>
          <p className='text-slate-600 font-mono text-xs text-center'>
            Designed &amp; Built by{' '}
            <span className='text-[#64ffda]'>Wasi Uddin Bhuyian</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact