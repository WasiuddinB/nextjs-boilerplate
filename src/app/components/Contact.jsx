import React from 'react'
import Section from './Section'
import { email, mailto, socials } from './links'

const Contact = () => {
  return (
    <Section id='contact' title='Contact'>
      <p className='max-w-2xl font-display text-2xl md:text-3xl leading-snug text-ink'>
        I&apos;m currently open to new opportunities. If you have a question or a project in mind, or
        just want to say hello, send me an email.
      </p>

      <a
        href={mailto}
        className='link mt-10 inline-block break-words font-display text-xl sm:text-3xl md:text-4xl text-ink'
      >
        {email}
      </a>

      <ul className='mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm'>
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target='_blank' rel='noreferrer' className='link text-ink-soft'>
              {s.label}
              <span aria-hidden='true'> ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact
