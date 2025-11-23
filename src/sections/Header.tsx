import { CustomButton } from '@/components/custom/CustomButton'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

import type { TypeAnimation as MyTypeAnimation } from '@/models/models'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

export function Header({
  typeAnimationList,
}: {
  typeAnimationList: MyTypeAnimation[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const sections: string[] = [
    'About',
    'Experiences',
    'Projects',
    'Educations',
    'Skills',
    'Certifications',
  ]
  {
    /*
    Adding fixed to fix the header on scrolling
    For z- to make it higher than the components when scrolling
    */
  }
  return (
    <div className='flex w-full fixed z-50 rounded-b-3xl p-8 justify-between items-center bg-bg-secondary h-30'>
      <div className=' text-bg-primary text-xl font-mono'>
        <TypeAnimation
          sequence={typeAnimationList.map((item) => item.sequence)}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </div>
      <nav className='hidden lg:flex flex-row gap-4'>
        {sections.map((section) => (
          <CustomButton href={`#${section.toLocaleLowerCase()}`}>
            {section}
          </CustomButton>
        ))}
      </nav>
      {/** For mobile view */}
      <div className='sm:block lg:hidden'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu onClick={() => setIsOpen(true)}></Menu>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='bg-bg-primary text-bg-secondary'
          >
            <SheetHeader>
              <SheetTitle>
                <Menu className='text-bg-secondary'></Menu>
              </SheetTitle>
            </SheetHeader>
            {sections.map((section) => (
              <CustomButton
                href={`#${section.toLocaleLowerCase()}`}
                className='bg-bg-secondary mx-2'
                onClick={() => setIsOpen(false)}
              >
                {section}
              </CustomButton>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
