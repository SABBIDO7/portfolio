import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import profileImage from '../../../../../assets/images/profileImage.jpeg'

import { TypeAnimation } from 'react-type-animation'
import type { PersonalInfo } from '@/models/models'
import { MapPin } from 'lucide-react'

export function AboutSection({ description, location }: PersonalInfo) {
  {
    /*using scroll-mt-31 to skip the fixed header (30 + 1(more cool)) when trying to navigate to a certain section */
  }
  return (
    <div
      id='about'
      className='flex flex-col lg:flex-row justify-between lg:items-center scroll-mt-31 text-bg-secondary sm:text-sm lg:text-xl font-mono'
    >
      <div className='flex flex-col gap-4 max-w-screen'>
        <TypeAnimation
          sequence={[description[0]]}
          wrapper='h1'
          speed={50}
          repeat={0}
          cursor={false}
          className='flex text-3xl font-bold'
        />
        <TypeAnimation
          sequence={description.slice(1)}
          wrapper='p'
          speed={75}
          repeat={0}
          cursor={false}
        />
        <div className='flex gap-4 text-muted-foreground'>
          <MapPin></MapPin>
          <TypeAnimation
            sequence={[location]}
            wrapper='p'
            speed={75}
            repeat={0}
            cursor={false}
          />
        </div>
      </div>
      {/*hidden on small screens */}
      <Avatar className='hidden lg:block h-90 w-90 opacity-80'>
        <AvatarImage src={profileImage} alt='profileImage' />
        <AvatarFallback>WS</AvatarFallback>
      </Avatar>
    </div>
  )
}
