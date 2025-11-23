import { CustomButton } from '@/components/custom/CustomButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Mail, Download, Linkedin, Github, Send } from 'lucide-react'
import profileImage from '../../../../../assets/images/profileImage.jpeg'
import type { ContactInfo } from '@/models/models'
import cvFile from '@/assets/images/CV.pdf'

export function ContactInfo({ contactInfo }: { contactInfo: ContactInfo }) {
  const { email, github, linkedin } = contactInfo
  return (
    <div className='flex flex-col gap-4 justify-between'>
      <div className='flex flex-col gap-2 lg:flex-row items-center justify-between p-8 bg-bg-secondary rounded-3xl shadow-xl max-w-2xl'>
        <div className='flex gap-2 items-center'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-text-primary mb-2'>
              Let's Connect
            </h2>
            <p className='text-muted-foreground'>
              Reach out through any platform
            </p>
          </div>
          {/*hidden on bigger screens */}
          <Avatar className='lg:hidden h-20 w-20 opacity-80'>
            <AvatarImage src={profileImage} alt='profileImage' />
            <AvatarFallback>WS</AvatarFallback>
          </Avatar>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <CustomButton href={`mailto:${email}`} className='bg-bg-primary p-6'>
            <Mail className='w-8 h-8 text-text-primary group-hover:scale-110 transition-transform' />
            <span className='hidden lg:block text-sm text-text-primary font-medium'>
              Email
            </span>
          </CustomButton>

          <CustomButton
            openOnNewTab='_blank'
            href={linkedin}
            className='bg-bg-primary p-6'
          >
            <Linkedin className='w-8 h-8 text-text-primary group-hover:scale-110 transition-transform' />
            <span className='hidden lg:block text-sm text-text-primary font-medium'>
              LinkedIn
            </span>
          </CustomButton>

          <CustomButton
            openOnNewTab='_blank'
            href={github}
            className='bg-bg-primary p-6'
          >
            <Github className='w-8 h-8 text-text-primary group-hover:scale-110 transition-transform' />
            <span className='hidden lg:block text-sm text-text-primary font-medium'>
              GitHub
            </span>
          </CustomButton>

          <CustomButton
            href={`${cvFile}`}
            className='bg-bg-primary p-6'
            download={true}
          >
            <Download className='w-8 h-8 text-text-primary group-hover:scale-110 transition-transform' />
            <span className='text-sm text-text-primary font-medium'>CV</span>
          </CustomButton>
        </div>
      </div>
      <CustomButton
        href={`mailto:${email}`}
        className='bg-bg-secondary p-8 max-w-2xl'
      >
        <Send className='w-8 h-8 group-hover:scale-110 transition-transform'>
          {email}
        </Send>
        <span className='text-xl text-text-primary'>Hire Me</span>
      </CustomButton>
    </div>
  )
}
