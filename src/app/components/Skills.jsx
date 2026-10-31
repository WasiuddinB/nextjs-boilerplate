import React from 'react'
import Section from './Section'

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
    <Section id='skills' title='Skills'>
      <dl className='divide-y divide-rule'>
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className='grid gap-x-8 gap-y-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-3'
          >
            <dt className='meta sm:pt-1'>{group.category}</dt>
            <dd className='text-ink sm:col-span-2'>{group.skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills
