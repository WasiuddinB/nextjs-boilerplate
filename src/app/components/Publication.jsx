import React from 'react'
import Section from './Section'

const publications = [
  {
    title: "Students' Performance Prediction Employing Decision Tree",
    authors: 'Abtahi Ahmed, Farzana Akter Nipa, Wasi Uddin Bhuyian, Khaled Md Mushfique & Dewan Md. Farid',
    venue: 'CTU Journal of Interdisciplinary Science and Design (ISDS-2024)',
    year: '2024',
    doi: 'https://doi.org/10.22144/ctujoisd.2024.321',
    doiLabel: '10.22144/ctujoisd.2024.321',
    tags: ['Machine Learning', 'Decision Tree', 'Education'],
  },
  {
    title: 'An Ensemble Deep Learning Approach to Detect Common Chicken Diseases from Fecal Matter Images',
    authors: 'Al-Momen Reyad, Sonjoy Dey, Wasi Uddin Bhuyian, Shadat Islam Evan & Raiyan Rahman',
    venue: 'ACM - International Conference on Computing Advancements (ICCA 2025)',
    year: '2025',
    doi: 'https://doi.org/10.1145/3723178.3723198',
    doiLabel: '10.1145/3723178.3723198',
    tags: ['Deep Learning', 'Computer Vision', 'Healthcare'],
  },
  {
    title: 'Harmonizing the Future: LSTM-Powered Precision in Software Development Effort Estimation with Harmony Search Symphony',
    authors: 'Tamanna Shermin, Wasi Uddin Bhuyian, Asif Uddin Ahmed, Latin Chakma, Nurzihan Fatema Reya & Abdullah Al Jobair',
    venue: '2024 13th International Conference on Software and Information Engineering (ICSIE)',
    year: '2024',
    doi: null,
    tags: ['LSTM', 'Effort Estimation', 'Software Engineering'],
  },
]

const OWN_NAME = 'Wasi Uddin Bhuyian'

// Author list with this portfolio's owner picked out, as in a CV
const Authors = ({ text }) =>
  text.split(OWN_NAME).flatMap((part, i, parts) =>
    i < parts.length - 1
      ? [part, <span key={i} className='text-ink'>{OWN_NAME}</span>]
      : [part]
  )

const Publication = () => {
  // Newest first
  const sorted = [...publications].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <Section id='publication' title='Publications'>
      <ul className='divide-y divide-rule'>
        {sorted.map((pub) => (
          <li
            key={pub.title}
            className='grid gap-x-8 gap-y-2 py-8 first:pt-0 last:pb-0 sm:grid-cols-9'
          >
            <p className='meta sm:pt-1.5'>{pub.year}</p>

            <div className='sm:col-span-8'>
              <h3 className='font-display text-xl md:text-2xl leading-snug text-ink'>{pub.title}</h3>
              <p className='mt-3 text-sm'>
                <Authors text={pub.authors} />
              </p>
              <p className='mt-1 text-sm italic text-ink-faint'>{pub.venue}</p>

              <p className='meta mt-4'>{pub.tags.join(', ')}</p>
              {pub.doi && (
                <p className='mt-2 text-sm'>
                  <a
                    href={pub.doi}
                    target='_blank'
                    rel='noreferrer'
                    className='link font-mono text-sm text-ink-soft'
                  >
                    DOI: {pub.doiLabel}
                    <span aria-hidden='true'> ↗</span>
                  </a>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Publication
