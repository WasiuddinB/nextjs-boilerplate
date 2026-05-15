import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const publications = [
  {
    title: "Students' Performance Prediction Employing Decision Tree",
    authors: 'Abtahi Ahmed, Farzana Akter Nipa, Wasi Uddin Bhuiyan, Khaled Md Mushfique & Dewan Md. Farid',
    venue: 'CTU Journal of Interdisciplinary Science and Design (ISDS-2024)',
    year: '2024',
    doi: 'https://doi.org/10.22144/ctujoisd.2024.321',
    doiLabel: '10.22144/ctujoisd.2024.321',
    tags: ['Machine Learning', 'Decision Tree', 'Education'],
  },
  {
    title: 'An Ensemble Deep Learning Approach to Detect Common Chicken Diseases from Fecal Matter Images',
    authors: 'Al-Momen Reyad, Sonjoy Dey, Wasi Uddin Bhuiyan, Shadat Islam Evan & Raiyan Rahman',
    venue: 'ACM — International Conference on Computing Advancements (ICCA 2025)',
    year: '2025',
    doi: 'https://doi.org/10.1145/3723178.3723198',
    doiLabel: '10.1145/3723178.3723198',
    tags: ['Deep Learning', 'Computer Vision', 'Healthcare'],
  },
  {
    title: 'Harmonizing the Future: LSTM-Powered Precision in Software Development Effort Estimation with Harmony Search Symphony',
    authors: 'Tamanna Shermin, Wasi Uddin Bhuiyan, Asif Uddin Ahmed, Latin Chakma, Nurzihan Fatema Reya & Abdullah Al Jobair',
    venue: '2024 13th International Conference on Software and Information Engineering (ICSIE)',
    year: '2024',
    doi: null,
    tags: ['LSTM', 'Effort Estimation', 'Software Engineering'],
  },
]

const Publication = () => {
  return (
    <section id='publication' className='w-full bg-[#0d1117] py-32 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Section label */}
        <div className='flex items-center gap-4 mb-16'>
          <span className='font-mono text-[#64ffda] text-sm'>04.</span>
          <h2 className='text-white text-2xl font-bold'>Publications</h2>
          <div className='flex-1 h-px bg-white/10 max-w-xs' />
        </div>

        <div className='space-y-6'>
          {publications.map((pub, i) => (
            <div
              key={i}
              className='group p-8 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#64ffda]/20 hover:bg-white/[0.04] transition-all duration-300'
            >
              <div className='flex flex-wrap gap-2 mb-4'>
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className='font-mono text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-0.5 rounded'
                  >
                    {tag}
                  </span>
                ))}
                <span className='font-mono text-xs text-slate-500 ml-auto'>{pub.year}</span>
              </div>

              <h3 className='text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#64ffda] transition-colors duration-200'>
                {pub.title}
              </h3>

              <p className='text-slate-500 text-sm mb-2'>{pub.authors}</p>
              <p className='text-slate-400 text-sm italic mb-4'>{pub.venue}</p>

              {pub.doi && (
                <a
                  href={pub.doi}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#64ffda] transition-colors duration-200'
                >
                  <FaExternalLinkAlt size={11} />
                  DOI: {pub.doiLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publication