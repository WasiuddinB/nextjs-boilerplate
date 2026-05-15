import React from 'react'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'PHP'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'Supabase', 'Prisma', 'REST APIs'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Jira', 'MkDocs', 'Vercel'],
  }
]

const Skills = () => {
  return (
    <section id='skills' className='w-full bg-[#0d1117] py-32 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Section label */}
        <div className='flex items-center gap-4 mb-16'>
          <span className='font-mono text-[#64ffda] text-sm'>02.</span>
          <h2 className='text-white text-2xl font-bold'>Skills</h2>
          <div className='flex-1 h-px bg-white/10 max-w-xs' />
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className='group p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#64ffda]/20 hover:bg-white/[0.04] transition-all duration-300'
            >
              <p className='font-mono text-[#64ffda] text-xs tracking-widest uppercase mb-4'>
                {group.category}
              </p>
              <ul className='space-y-2'>
                {group.skills.map((skill) => (
                  <li key={skill} className='flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-200'>
                    <span className='w-1 h-1 rounded-full bg-[#64ffda]/60 flex-shrink-0' />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills