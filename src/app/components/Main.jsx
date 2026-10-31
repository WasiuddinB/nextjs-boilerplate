import React from 'react'
import Link from 'next/link'
import { mailto, socials } from './links'

const Main = () => {
  return (
    <section id='home' className='px-6 pt-36 pb-16 md:pt-52 md:pb-24'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid gap-x-8 gap-y-5 md:grid-cols-12'>
          <p className='font-display italic text-xl text-ink-faint md:col-span-3 md:pt-3'>
            AssalamuAlaikum
          </p>

          <div className='md:col-span-9'>
            <h1 className='font-display font-normal text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink'>
              Wasi Uddin Bhuyian
            </h1>

            <p className='mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-ink-soft'>
              I&apos;m a Software Engineer at{' '}
              <span className='text-ink'>Shomvob Technologies</span>. These days I&apos;m focused on
              full-stack JavaScript: React, Next.js and Node.js.
            </p>

            <p className='mt-10 flex flex-wrap gap-x-8 gap-y-3'>
              <Link href='/#projects' className='link text-ink'>
                See my projects
              </Link>
              <Link href='/#contact' className='link text-ink-soft'>
                Get in touch
              </Link>
            </p>
          </div>
        </div>

        <dl className='mt-20 md:mt-28 grid gap-x-8 gap-y-8 border-t border-rule pt-6 md:grid-cols-12'>
          <div className='md:col-start-4 md:col-span-3'>
            <dt className='meta'>Now</dt>
            <dd className='mt-2 text-ink'>
              Software Engineer, Shomvob Technologies Ltd
              <span className='mt-2 block text-sm text-ink-soft'>
                Built the official website:{' '}
                <a
                  href='https://shomvob.com'
                  target='_blank'
                  rel='noreferrer'
                  className='link whitespace-nowrap text-ink'
                >
                  shomvob.com<span aria-hidden='true'> ↗</span>
                </a>
              </span>
            </dd>
          </div>
          <div className='md:col-span-3'>
            <dt className='meta'>Studied</dt>
            <dd className='mt-2 text-ink'>Computer Science, United International University</dd>
          </div>
          <div className='md:col-span-3'>
            <dt className='meta'>Elsewhere</dt>
            <dd className='mt-2'>
              <ul className='grid w-fit grid-cols-2 gap-x-6 gap-y-1'>
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target='_blank' rel='noreferrer' className='link text-ink'>
                      {s.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={mailto} className='link text-ink'>
                    Email
                  </a>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Main
