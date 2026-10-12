"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#publication', label: 'Publications' },
  { href: '/#contact', label: 'Contact' },
]

const socials = [
  { icon: <FaLinkedinIn size={16} />, href: 'https://www.linkedin.com/in/wasiuddinb/', label: 'LinkedIn' },
  { icon: <FaGithub size={16} />, href: 'https://www.github.com/WasiuddinB', label: 'GitHub' },
  { icon: <AiOutlineMail size={16} />, href: 'mailto:wasiuddinbhuyian71@gmail.com', label: 'Email' },
  { icon: <FaCode size={16} />, href: 'https://www.leetcode.com/WasiuddinB/', label: 'LeetCode' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 60)
      const sections = navLinks.map(l => l.href.replace('/#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className='max-w-6xl mx-auto px-6 flex justify-between items-center'>
          {/* Logo */}
          <Link href='/#home'>
            <span className='text-white font-bold text-lg tracking-tight'>
              WUB<span className='text-[#64ffda]'>.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className='hidden md:flex items-center gap-8'>
            {navLinks.map((link, i) => {
              const section = link.href.replace('/#', '')
              return (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={`text-sm font-mono transition-colors duration-200 ${
                      activeSection === section
                        ? 'text-[#64ffda]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className='text-[#64ffda] mr-1 text-xs'>0{i + 1}.</span>
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className='md:hidden text-slate-300 hover:text-white transition-colors'
            onClick={() => setNav(true)}
            aria-label='Open menu'
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[200] transition-opacity duration-300 ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className='absolute inset-0 bg-black/70 backdrop-blur-sm'
          onClick={() => setNav(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[75%] max-w-sm bg-[#0d1117] border-l border-white/10 p-8 flex flex-col transition-transform duration-500 ease-in-out ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex justify-between items-center mb-10'>
            <span className='text-white font-bold text-lg'>
              W<span className='text-[#64ffda]'>.</span>
            </span>
            <button
              onClick={() => setNav(false)}
              className='text-slate-400 hover:text-white transition-colors'
              aria-label='Close menu'
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <ul className='flex flex-col gap-6 flex-1'>
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  onClick={() => setNav(false)}
                  className='group flex items-center gap-3 text-slate-300 hover:text-white transition-colors'
                >
                  <span className='text-[#64ffda] font-mono text-xs'>0{i + 1}.</span>
                  <span className='text-base group-hover:translate-x-1 transition-transform duration-200'>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <p className='text-xs font-mono text-[#64ffda] tracking-widest mb-4 uppercase'>Connect</p>
            <div className='flex gap-4'>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={s.label}
                  className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#64ffda] hover:border-[#64ffda]/40 transition-all duration-200'
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar