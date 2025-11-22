import { Separator } from '@/components/ui/separator'
import { JourneyTimeline } from './components/JourneyTimeline'
import type { Experience } from '@/models/models'

interface MainProjectsSectionProps {
  experiences: Experience[]
  personalProjects: Experience[]
}
export function MainExperiencesSection({
  experiences,
  personalProjects,
}: MainProjectsSectionProps) {
  return (
    <div className='flex flex-col gap-8'>
      <JourneyTimeline
        title='My Working Journey'
        description='A timeline of my professional experience'
        experiences={experiences}
        id='experiences'
      ></JourneyTimeline>
      <Separator className='bg-text-primary'></Separator>
      <JourneyTimeline
        title='My Personal Journey'
        description='A timeline of my personal projects'
        experiences={personalProjects}
        id='projects'
      ></JourneyTimeline>
    </div>
  )
}
