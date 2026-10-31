import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Section from './Section'

const About = () => {
  return (
    <Section id='about' title='About'>
      <div className='grid gap-12 lg:grid-cols-9 lg:gap-8'>
        <div className='lg:col-span-6 lg:order-first'>
          <p className='font-display text-2xl md:text-[1.7rem] leading-snug text-ink'>
            I studied Computer Science at United International University in Dhaka, and now work as a
            Software Engineer at Shomvob Technologies Ltd.
          </p>

          <div className='mt-8 max-w-prose space-y-5 md:text-lg'>
            <p>
              I got into software because I wanted to understand how things are built. That is still
              what keeps me interested, along with working out how to build them a bit better.
            </p>
            <p>
              At university I received scholarships seven times, from 50% to full tuition, for
              consistently good academic results. At work I build responsive interfaces, take part in
              agile sprints and pick up new tools as projects need them.
            </p>
            <p>
              Outside work I solve problems on{' '}
              <a
                href='https://www.leetcode.com/WasiuddinB/'
                target='_blank'
                rel='noreferrer'
                className='link text-ink'
              >
                LeetCode
              </a>
              , and I&apos;ve co-authored{' '}
              <Link href='/#publication' className='link text-ink'>
                research papers
              </Link>{' '}
              in machine learning and software effort estimation.
            </p>
          </div>
        </div>

        <div className='order-first lg:order-last lg:col-span-3'>
          <div className='relative aspect-[3/4] w-40 sm:w-52 lg:w-full overflow-hidden rounded-sm bg-rule'>
            <Image
              src='/LinkedIn.png'
              fill
              sizes='(min-width: 1024px) 260px, 208px'
              alt='Wasi Uddin Bhuyian'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
