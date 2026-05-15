import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='w-full bg-[#0a0a0a] py-32 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Section label */}
        <div className='flex items-center gap-4 mb-16'>
          <span className='font-mono text-[#64ffda] text-sm'>01.</span>
          <h2 className='text-white text-2xl font-bold'>About Me</h2>
          <div className='flex-1 h-px bg-white/10 max-w-xs' />
        </div>

        <div className='grid md:grid-cols-5 gap-16 items-start'>
          {/* Text — 3 cols */}
          <div className='md:col-span-3 space-y-5 text-slate-400 leading-relaxed'>
            <p>
              I&apos;m a Computer Science graduate from{' '}
              <span className='text-[#64ffda]'>United International University</span>, Dhaka, currently
              working as a Junior Software Developer at{' '}
              <span className='text-[#64ffda]'>Shomvob Technologies Ltd</span>. My journey in tech has
              been driven by a genuine curiosity about how things are built and a desire to build them
              better.
            </p>
            <p>
              Throughout my academic career I was awarded scholarships seven times, ranging from 50% to full
              tuition coverage for consistent academic excellence. I&apos;ve channelled that same discipline
              into my professional work - shipping responsive interfaces, maintaining agile sprints, and
              constantly picking up new tools.
            </p>
            <p>
              Beyond my day job, I keep my algorithmic thinking sharp by solving problems on{' '}
              <span className='text-[#64ffda]'>LeetCode</span> and I&apos;ve co-authored{' '}
              <span className='text-[#64ffda]'>two published research papers</span> in machine learning
              and software engineering estimation.
            </p>

            <div className='pt-4'>
              <p className='text-slate-300 text-sm font-mono mb-4'>Technologies I work with:</p>
              <ul className='grid grid-cols-2 gap-y-2 gap-x-6 text-sm font-mono'>
                {[
                  'JavaScript (ES6+)', 'TypeScript',
                  'React & Next.js', 'Node.js',
                  'PostgreSQL / MySQL', 'MongoDB',
                  'Supabase', 'Tailwind CSS',
                ].map((tech) => (
                  <li key={tech} className='flex items-center gap-2 text-slate-400'>
                    <span className='text-[#64ffda] text-xs'>▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photo — 2 cols */}
          <div className='md:col-span-2 flex justify-center md:justify-end'>
            <div className='relative group w-64 h-72'>
              {/* Border accent */}
              <div className='absolute inset-0 rounded-lg border-2 border-[#64ffda] translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300' />
              <div className='relative w-full h-full rounded-lg overflow-hidden bg-slate-800'>
                <Image
                  src='/LinkedIn.png'
                  fill
                  sizes='(max-width: 768px) 256px, 256px'
                  alt='Wasi Uddin Bhuiyan'
                  className='object-cover grayscale-0 hover:grayscale transition-all duration-500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About