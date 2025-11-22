import { AppCoreMain } from './sections/app_core/AppCoreMain'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import data_source from '../src/assets/data/data_source.json'
import type { IncomingData, Data, TypeAnimation } from './models/models'

function JsonToModel(data_source: IncomingData): Data {
  const data = {
    listTypeAnimation: data_source.type_animation_list.map((sequence) => ({
      sequence: sequence.value,
    })),
    personalInfo: data_source.personal_info,
    contactInfo: data_source.contact_info,
    experiences: data_source.experiences,
    personalProjects: data_source.personalProjects,
    educations: data_source.educations,
    skills: data_source.skills,
  }
  return data
}

const data: Data = JsonToModel(data_source)
const typeAnimationList: TypeAnimation[] = data.listTypeAnimation

function App() {
  return (
    <div className='flex flex-col gap-4 justify-between min-h-screen bg-bg-primary'>
      <Header typeAnimationList={typeAnimationList} />
      <AppCoreMain {...data} />
      <Footer contactInfo={data.contactInfo} />
    </div>
  )
}

export default App
