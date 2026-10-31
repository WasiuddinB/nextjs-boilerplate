import React from 'react'
import Image from 'next/image'
import Section from './Section'

const site = 'https://shomvob.com'

const Work = () => {
  return (
    <Section id='work' title='Work'>
      <p className='meta'>Software Engineer, Shomvob Technologies Ltd</p>

      <h3 className='mt-3 font-display text-3xl md:text-4xl leading-tight text-ink'>
        Shomvob&apos;s official website
      </h3>

      <p className='mt-5 max-w-xl md:text-lg'>
        Shomvob is a jobs, recruitment and training platform in Bangladesh. As a software engineer at
        Shomvob Technologies, I developed its official website.
      </p>

      <p className='meta mt-5'>Next.js, React</p>

      <p className='mt-6 text-sm'>
        <a href={site} target='_blank' rel='noreferrer' className='link text-ink'>
          Visit shomvob.com<span aria-hidden='true'> ↗</span>
        </a>
      </p>

      {/* The screenshot is a second way in to the same link, so it stays out of the tab order */}
      <a
        href={site}
        target='_blank'
        rel='noreferrer'
        tabIndex={-1}
        aria-hidden='true'
        className='group mt-10 block'
      >
        <div className='relative aspect-[2/1] overflow-hidden rounded-sm border border-rule transition-colors duration-200 group-hover:border-accent'>
          <Image
            src='/shomvob.jpg'
            alt=''
            fill
            sizes='(min-width: 1024px) 830px, (min-width: 768px) 530px, 100vw'
            className='object-cover object-top'
          />
        </div>
      </a>
    </Section>
  )
}

export default Work
