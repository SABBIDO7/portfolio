import type { Data } from '@/models/models'
import { MainLandingSection } from './sub_sections/landing_section/MainLandingSection'
import { MainExperiencesSection } from './sub_sections/projects_section/MainExperiencesSection'
import { EducationSection } from './sub_sections/EductionSection'
import { Separator } from '@/components/ui/separator'
import { SkillsSection } from './sub_sections/SkillsSection'

export function AppCoreMain({
  personalInfo,
  contactInfo,
  experiences,
  personalProjects,
  educations,
  skills,
}: Data) {
  {
    /*
    Adding mt of the same height of the header to leave the space to it since the header is fixed
    */
  }
  return (
    <div className='flex flex-col p-4 lg:p-8 lg:mx-4 gap-8 mt-30'>
      <MainLandingSection
        personalInfo={personalInfo}
        contactInfo={contactInfo}
      ></MainLandingSection>
      <MainExperiencesSection
        experiences={experiences}
        personalProjects={personalProjects}
      ></MainExperiencesSection>
      <Separator className='bg-text-primary'></Separator>
      <EducationSection
        title='My Education Journey'
        description='A timeline of my education degrees'
        educations={educations}
      ></EducationSection>
      <Separator className='bg-text-primary'></Separator>
      <SkillsSection skills={skills}></SkillsSection>
    </div>
  )
}
