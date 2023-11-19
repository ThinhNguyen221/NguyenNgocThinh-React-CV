import './App.css'
import Titles from './components/Titles/Index'
import Contacts from './components/Contacts/Index'
import PersonalSkills from './components/PersonalSkills/Index'
import Names from './components/Names/Index'
import AboutMe from './components/AboutMe/Index'
import ContentRight from './components/ContentRight/Index'
import Educations from './components/Educations/Index'
import Avatars from './components/Avatar/Index'

function Expert({ label, scorce }: { label: string, scorce: number }) {
  const arrs = [1, 2, 3, 4, 5];
  return (
    <div className='flex items-center justify-between'>
      <div>{label}</div>
      <div className='flex gap-x-1'>
        {
          arrs.map((item) => {
            return (
              <>
                {
                  item > scorce ? (
                    <span className='w-[10px] h-[10px] rounded-full flex bg-white'></span>
                  ) : (
                    <span className='w-[10px] h-[10px] rounded-full flex bg-orange-400'></span>
                  )
                }
              </>
            )
          })
        }
      </div>
    </div>
  )
}

function App() {


  return (
    <>
      <div className='bg-cyan-700'>
        <div className="layout_wrapper flex justify-center">

          {/* Left Colume */}
          <div className="pl-12 pr-12 bg-cyan-600 w-80">

            <Avatars />

            <div className='mt-10'>
              <Titles title='CONTACT' />
              <Contacts />
            </div>

            <div className='mt-10'>
              <Titles title='EXPERTISE' />
              <div className='text-white text-xs space-y-2 pt-3.5 '>
                <Expert label='MS Word' scorce={5} />
                <Expert label='MS Excel' scorce={3} />
                <Expert label='Photoshop' scorce={4} />
                <Expert label='Illustrator' scorce={3} />
                <Expert label='Corel Draw' scorce={4} />
              </div>
            </div>

            <div className='mt-10'>
              <Titles title='PERSONAL SKILL' />
              <PersonalSkills skill='Public Speaking' />
              <PersonalSkills skill='Financial Management' />
              <PersonalSkills skill='Create Idea' />
              <PersonalSkills skill='Project Manager' />
              <PersonalSkills skill='Director' />
            </div>

          </div>

          {/* Right Colume */}
          <div className="pl-16 pr-16 w-5/12 bg-blue-200">

            <div className='space-y-3 my-20'>
              <Names />
            </div>

            <div>
              <AboutMe text='ABOUT ME' />
              <ContentRight content='Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys stan dard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book' />
            </div>

            <div className='mt-16'>
              <AboutMe text='EDUCATION' />
              <div className='text-gray-500 mt-3.5 space-y-2.5'>
                <div className='flex text-sm justify-between'>
                  <div>
                    <div className='font-medium'><Educations job='BACHELOR OF DESIGN' /></div>
                    <div className='italic'><Educations job='University / Collage / Institute' /></div>
                  </div>
                  <div>
                    <Educations job='2012 - 2015' />
                  </div>
                </div>
                <div className='flex text-sm justify-between'>
                  <div>
                    <div className='font-medium'><Educations job='BACHELOR OF DESIGN' /></div>
                    <div className='italic'><Educations job='University / Collage / Institute' /></div>
                  </div>
                  <div>
                    <Educations job='2012 - 2015' />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-16 mb-16'>
              <AboutMe text='WORK EXPERIENCE' />
              <div className='text-gray-500 mt-3.5 space-y-2.5 text-sm'>


                <div className='flex justify-between'>
                  <div className='font-medium'>
                    <Educations job='JOB TITLE' />
                    <Educations job='COMPANY NAME' />
                  </div>
                  <Educations job='2012 - 2015' />
                </div>
                <Educations job='Definition Your Job | Definition Your Job | Definition Your Job | Definition Your Job' />

                <div className='flex justify-between'>
                  <div className='font-medium'>
                    <Educations job='JOB TITLE' />
                    <Educations job='COMPANY NAME' />
                  </div>
                  <Educations job='2012 - 2015' />
                </div>
                <Educations job='Definition Your Job | Definition Your Job | Definition Your Job | Definition Your Job' />
              </div>
              <div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
