import { Separator } from '@/components/ui/separator'
import type { ContactInfo } from '@/models/models'
import { Github, Linkedin, Mail, Calendar } from 'lucide-react'

export function Footer({ contactInfo }: { contactInfo: ContactInfo }) {
  const { email, github, linkedin } = contactInfo
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex flex-col gap-4 p-8 bg-bg-secondary text-lg text-bg-primary'>
      <p>
        This Website is built with <b>TypeScript</b> Language and{' '}
        <b>React JS</b> FrameWork and Designed with <b>TailWind CSS</b> and
        using <b>Shadcn</b> library.
      </p>
      <p>
        This website is fully <b>responsive</b> for PC, mobile, and tablet.
      </p>

      {/* Contact Info */}
      <div className='flex flex-wrap flex-col lg:flex-row gap-4'>
        {email && (
          <a href={`mailto:${email}`} className='flex gap-2 hover:underline'>
            <Mail />
            <b>{email}</b>
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-2 hover:underline'
          >
            <Linkedin />
            <b>{linkedin}</b>
          </a>
        )}
        {github && (
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-2 hover:underline'
          >
            <Github />
            <b>{github}</b>
          </a>
        )}
      </div>
      <Separator className='bg-bg-primary opacity-50'></Separator>
      {/* Copyright */}
      <div className='flex flex-col gap-2 text-center text-sm opacity-75'>
        <p>
          All project images use dummy data and are authorized by the company.
        </p>
        <p>© {currentYear} Walid Sabbidine. All rights reserved.</p>
        <p>
          <Calendar className='inline w-4 h-4' /> Last updated:{' '}
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}
