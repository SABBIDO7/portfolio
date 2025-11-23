export interface Data {
  listTypeAnimation: TypeAnimation[]
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
  experiences: Experience[]
  personalProjects: Experience[]
  educations: Experience[]
  skills: Skill[]
  certifications: Certification[]
}
export interface PersonalInfo {
  description: string[]
  location: string
}
export interface TypeAnimation {
  sequence: number | string
}
export interface ContactInfo {
  email?: string
  github?: string
  linkedin?: string
}
export interface Project {
  name: string
  description: string
  technologies: string[]
  screenshots?: string[]
  demoLink?: string
  githubLink?: string
}
export interface Experience {
  company?: string
  title: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  projects?: Project[]
}
export interface Skill {
  title: string
  technologies: string[]
}
export interface Certification {
  provider: string
  certificates: Certificates[]
}
interface Certificates {
  title: string
  date: string
}
export interface IncomingData {
  type_animation_list: { type: string; value: string | number }[]
  personal_info: { description: string[]; location: string }
  contact_info: {
    email?: string
    phone?: string
    linkedin?: string
    github?: string
  }
  skills: {
    title: string
    technologies: string[]
  }[]
  certifications: {
    provider: string
    certificates: {
      title: string
      date: string
    }[]
  }[]
  educations: {
    company: string
    title: string
    location: string
    startDate: string
    endDate: string
    description: string
  }[]
  experiences: {
    company: string
    title: string
    location: string
    startDate: string
    endDate: string
    description: string
    projects?: {
      name: string
      description: string
      technologies: string[]
      screenshots?: string[]
    }[]
  }[]
  personalProjects: {
    title: string
    startDate: string
    description: string
    projects: Project[]
  }[]
}
