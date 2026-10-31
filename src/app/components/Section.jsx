import React from 'react'

// Shared frame for every section: a hairline, a narrow label rail on the left,
// content on the right. Keeps spacing and alignment consistent in one place.
const Section = ({ id, title, children }) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className='border-t border-rule px-6 py-16 md:py-28'
    >
      <div className='max-w-6xl mx-auto grid gap-x-8 gap-y-8 md:grid-cols-12'>
        <h2
          id={`${id}-title`}
          className='font-mono text-sm text-ink md:col-span-3 md:sticky md:top-28 md:self-start'
        >
          {title}
        </h2>
        <div className='md:col-span-9'>{children}</div>
      </div>
    </section>
  )
}

export default Section
