import React from 'react'
import snapshot from '../data/github-contributions.json'

const USERNAME = 'Wasi-Shomvob'
const profileUrl = `https://github.com/${USERNAME}`

// A fixed snapshot of the daily contribution counts shown on the GitHub profile graph.
// It covers one specific year and does not change, which is why the period is printed
// next to the total. To refresh it, replace the JSON with a new export of the same shape.
const days = snapshot.contributions

const CELL = 11
const GAP = 3
const PITCH = CELL + GAP
// Level 0 uses the hairline colour; levels 1-4 are the accent at rising strength
const LEVEL_OPACITY = [0, 0.4, 0.6, 0.8, 1]

const formatDay = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

const GithubActivity = () => {
  const total = days.reduce((sum, d) => sum + d.count, 0)

  // Lay days out in GitHub's order: one column per week, Sunday at the top
  const offset = new Date(`${days[0].date}T00:00:00Z`).getUTCDay()
  const weeks = Math.ceil((offset + days.length) / 7)
  const width = weeks * PITCH - GAP
  const height = 7 * PITCH - GAP

  const byLevel = [[], [], [], [], []]
  days.forEach((d, i) => {
    const pos = offset + i
    byLevel[d.level].push({ ...d, x: Math.floor(pos / 7) * PITCH, y: (pos % 7) * PITCH })
  })

  return (
    <div className='mt-20 border-t border-rule pt-10'>
      <h3 className='meta'>Work GitHub Activity</h3>

      <p className='mt-6 font-display text-3xl md:text-4xl leading-tight text-ink'>
        {total.toLocaleString('en-US')}{' '}
        <span className='text-ink-soft'>contributions</span>
      </p>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        role='img'
        aria-label={`${total.toLocaleString('en-US')} Work GitHub contributions, shown as an activity graph`}
        className='mt-8 h-auto w-full'
      >
        {byLevel.map((cells, level) => (
          <g
            key={level}
            className={level === 0 ? 'fill-rule' : 'fill-accent'}
            fillOpacity={level === 0 ? 1 : LEVEL_OPACITY[level]}
          >
            {cells.map((d) => (
              <rect key={d.date} x={d.x} y={d.y} width={CELL} height={CELL} rx='2'>
                {d.count > 0 && (
                  <title>
                    {d.count} {d.count === 1 ? 'contribution' : 'contributions'} on {formatDay(d.date)}
                  </title>
                )}
              </rect>
            ))}
          </g>
        ))}
      </svg>

      <div className='mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm'>
        <span className='meta flex items-center gap-1.5' aria-hidden='true'>
          Less
          {LEVEL_OPACITY.map((opacity, level) => (
            <span
              key={level}
              className={`h-[11px] w-[11px] rounded-[2px] ${level === 0 ? 'bg-rule' : 'bg-accent'}`}
              style={level === 0 ? undefined : { opacity }}
            />
          ))}
          More
        </span>
      </div>
    </div>
  )
}

export default GithubActivity
