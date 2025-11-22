import { Badge } from '@/components/ui/badge'
import type { Skill } from '@/models/models'

interface SkillsSectionProps {
  skills: Skill[]
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div
      id='skills'
      className='flex flex-col border-2 h-auto p-8 gap-12 rounded-3xl border-bg-secondary scroll-mt-31 hover:bg-bg-secondary hover:text-bg-primary hover:-translate-y-2 transition-all duration-300 group'
    >
      <div className='flex flex-col items-center gap-3'>
        <p className='text-4xl font-bold text-bg-secondary group-hover:text-bg-primary'>
          Skills
        </p>
        <p className='text-lg text-muted-foreground'>
          Skills gained through my journey timeline
        </p>
      </div>
      <div className='flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-2'>
        {skills.map(({ title, technologies }, skillIndex) => (
          <div
            key={skillIndex}
            className='flex flex-col h-full w-full p-4 items-center gap-2 border border-bg-secondary rounded-2xl group-hover:border-bg-primary'
          >
            <p className='text-2xl font-bold text-bg-secondary group-hover:text-bg-primary'>
              {title}
            </p>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  className='bg-bg-secondary text-bg-primary font-bold group-hover:bg-bg-primary group-hover:text-bg-secondary'
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
