import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Calendar, GithubIcon, Link, MapPin } from 'lucide-react'
import type { Experience } from '@/models/models'
import { Dialog, DialogContent } from '../ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

interface CustomCardProps {
  exp: Experience
  className?: string
}
export function CustomCard({ exp, className }: CustomCardProps) {
  return (
    <Card
      className={`flex flex-col w-full lg:w-[47.5%] h-auto pt-8 lg:p-8 ml-3 gap-6 rounded-3xl border-2 border-bg-secondary bg-bg-primary text-text-primary shadow-lg group hover:bg-bg-secondary hover:text-bg-primary hover:border-2 hover:-translate-y-2 transition-all duration-300 ${className}`}
    >
      <CardHeader>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <Calendar className='w-4 h-4' />
            <span>
              {exp.startDate}
              {exp.endDate && (
                <>
                  {' - '}
                  {exp.endDate}
                </>
              )}
            </span>
          </div>
          <CardTitle className='text-2xl'>{exp.title}</CardTitle>
          {exp.company && (
            <CardDescription className='flex items-center gap-2 text-base'>
              <Building2 className='w-4 h-4' />
              {exp.company}
            </CardDescription>
          )}

          {exp.location && (
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <MapPin className='w-4 h-4' />
              {exp.location}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className='flex flex-col gap-3'>
        <p className='text-md lg:text-lg text-muted-foreground'>
          {exp.description}
        </p>
        {/* Projects */}
        {exp.projects && exp.projects.length > 0 && (
          <div className='flex flex-col gap-3'>
            {exp.projects.length > 1 ? (
              <h3 className='font-semibold text-lg'> Projects</h3>
            ) : (
              <h3 className='font-semibold text-lg'> Project</h3>
            )}
            {exp.projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className='flex flex-col gap-1.5 lg:gap-3 border border-bg-secondary rounded-3xl p-4 space-y-4 group-hover:border-bg-primary'
              >
                <h4 className='font-semibold text-lg mb-2'>{project.name}</h4>
                <p className='text-md lg:text-lg text-muted-foreground mb-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant='secondary'>
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* GitHub Link if provided */}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 hover:underline'
                  >
                    <GithubIcon></GithubIcon>
                    <span>
                      <b>GitHub Link</b>
                    </span>
                  </a>
                )}
                {/* Demo Links if provided */}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 hover:underline'
                  >
                    <Link></Link>
                    <span>
                      <b>Demo Link</b>
                    </span>
                  </a>
                )}
                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <Carousel className='w-full'>
                    <CarouselContent>
                      {project.screenshots.map(
                        (screenshot, screenshotIndex) => (
                          <CarouselItem
                            key={screenshotIndex}
                            className='basis-[80%] md:basis-[40%]'
                          >
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className='w-full h-40 rounded-lg border bg-muted hover:scale-105 transition-transform cursor-pointer'>
                                  <img
                                    src={`/src/assets/images/projects_images/${screenshot}`}
                                    alt={`${project.name} screenshot ${
                                      screenshotIndex + 1
                                    }`}
                                    className='w-full h-full object-contain'
                                  />
                                </div>
                              </DialogTrigger>
                              <DialogContent className='flex items-center max-w-7xl w-[80%] h-[70%] p-0 text-bg-secondary'>
                                <div className='relative w-full h-full flex items-center justify-center bg-bg-primary/90'>
                                  <img
                                    src={`/src/assets/images/projects_images/${screenshot}`}
                                    alt={`${project.name} screenshot ${
                                      screenshotIndex + 1
                                    }`}
                                    className='max-w-full max-h-full object-contain'
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CarouselItem>
                        )
                      )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
