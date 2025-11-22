import type { Data } from '@/models/models'
import { AboutSection } from './components/AboutSection'
import { ContactInfo } from './components/ContactInfo'

interface MainLandingSectionProps {
  contactInfo: Data['contactInfo']
  personalInfo: Data['personalInfo']
}
export function MainLandingSection({
  personalInfo,
  contactInfo,
}: MainLandingSectionProps) {
  return (
    <div className='flex flex-col justify-between gap-4'>
      <AboutSection {...personalInfo} />
      <ContactInfo contactInfo={contactInfo} />
    </div>
  )
}
