"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { mailto, socials } from './links'

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#publication', label: 'Publications' },
  { href: '/#contact', label: 'Contact' },
]

const drawerLinks = [...socials, { href: mailto, label: 'Email' }]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 60)
      const sections = navLinks.map(l => l.href.replace('/#', ''))
      // The last section can be too short to ever reach its own threshold
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection(sections[sections.length - 1])
        return
      }
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // While the drawer is open: Escape closes it and the page behind doesn't scroll
  useEffect(() => {
    if (!nav) return
    const onKey = (e) => e.key === 'Escape' && setNav(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [nav])

  return (
    <>
      <nav
        aria-label='Primary'
        className={`fixed w-full z-[100] px-6 transition-colors duration-300 ${
          scrolled ? 'bg-canvas border-b border-rule py-4' : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <Link href='/#home' className='font-display text-lg text-ink'>
            Wasi Uddin Bhuyian
          </Link>

          {/* Desktop nav */}
          <ul className='hidden md:flex items-center gap-6 lg:gap-8'>
            {navLinks.map((link) => {
              const section = link.href.replace('/#', '')
              const active = activeSection === section
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'location' : undefined}
                    className={`text-sm underline decoration-1 underline-offset-[6px] transition-colors duration-200 ${
                      active
                        ? 'text-ink decoration-accent'
                        : 'text-ink-soft decoration-transparent hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            className='md:hidden text-ink-soft hover:text-ink transition-colors'
            onClick={() => setNav(true)}
            aria-label='Open menu'
            aria-expanded={nav}
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[200] transition-[opacity,visibility] duration-300 ${
          nav ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className='absolute inset-0 bg-black/60' onClick={() => setNav(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-canvas border-l border-rule p-8 flex flex-col transition-transform duration-300 ease-out ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex justify-end mb-10'>
            <button
              onClick={() => setNav(false)}
              className='text-ink-soft hover:text-ink transition-colors'
              aria-label='Close menu'
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <ul className='flex flex-col gap-5 flex-1'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setNav(false)}
                  className='font-display text-3xl text-ink hover:text-accent transition-colors duration-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className='flex flex-wrap gap-x-6 gap-y-2 text-sm'>
            {drawerLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel='noreferrer'
                  className='link text-ink-soft'
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
