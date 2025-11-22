import type { Experience } from '@/models/models'
import { JourneyTimeline } from './projects_section/components/JourneyTimeline'

interface EducationSectionProps {
  educations: Experience[]
  title: string
  description: string
}
export function EducationSection({
  educations,
  title,
  description,
}: EducationSectionProps) {
  return (
    <JourneyTimeline
      id='educations'
      title={title}
      description={description}
      experiences={educations}
    ></JourneyTimeline>
  )
}
