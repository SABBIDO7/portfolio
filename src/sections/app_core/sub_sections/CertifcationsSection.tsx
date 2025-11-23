import { Badge } from '@/components/ui/badge'
import type { Certification } from '@/models/models'
import { Calendar } from 'lucide-react'

interface CertificationsSectionProps {
  certifications: Certification[]
}
export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <div
      id='certifications'
      className='flex flex-col border-2 h-auto p-8 gap-12 rounded-3xl border-bg-secondary scroll-mt-31 hover:bg-bg-secondary hover:text-bg-primary hover:-translate-y-2 transition-all duration-300 group'
    >
      <div className='flex flex-col items-center gap-3'>
        <p className='text-4xl font-bold text-bg-secondary group-hover:text-bg-primary'>
          Certifications
        </p>
        <p className='text-lg text-muted-foreground'>
          Certifications obtained throughout my journey
        </p>
      </div>
      <div className='flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-2'>
        {certifications.map(
          ({ provider, certificates }, certificationIndex) => (
            <div
              key={certificationIndex}
              className='flex flex-col h-full w-full p-4 items-center gap-2 border border-bg-secondary rounded-2xl group-hover:border-bg-primary'
            >
              <p className='text-2xl font-bold text-bg-secondary group-hover:text-bg-primary'>
                {provider}
              </p>
              <div className='flex flex-wrap gap-2'>
                {certificates.map((certificate, certificateIndex) => (
                  <div>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Calendar className='w-4 h-4' />
                      <span>{certificate.date}</span>
                    </div>
                    <Badge
                      key={certificateIndex}
                      className='bg-bg-secondary text-bg-primary font-bold group-hover:bg-bg-primary group-hover:text-bg-secondary'
                    >
                      {certificate.title}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
