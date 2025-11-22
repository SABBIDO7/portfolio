import { CustomCard } from '@/components/custom/CustomCard'
import type { Experience } from '@/models/models'

interface JourneyTimelineProps {
  title: string
  description: string
  experiences: Experience[]
  id: string
}

export function JourneyTimeline({
  title,
  description,
  experiences,
  id,
}: JourneyTimelineProps) {
  return (
    <div
      id={id}
      className='flex flex-col justify-between border-2 border-bg-secondary rounded-3xl p-3 lg:p-8 gap-12 scroll-mt-31'
    >
      <div className='flex flex-col items-center text-bg-secondary gap-3'>
        <p className='text-3xl lg:text-4xl font-bold'>{title}</p>
        <p className='text-lg text-muted-foreground'>{description}</p>
      </div>
      <div className='relative flex flex-col gap-3'>
        {/* Dot in the center for md+ screens */}
        <div className='absolute bg-bg-secondary left-0 top-0 bottom-0 w-0.5 lg:left-1/2' />
        {experiences.map((exp, index) => (
          <div>
            <div>
              <div className='absolute left-0 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg-secondary z-10' />
            </div>
            <CustomCard
              exp={exp}
              className={`${index % 2 !== 0 && 'lg:ml-auto'}`}
            ></CustomCard>
          </div>
        ))}
      </div>
    </div>
  )
}
