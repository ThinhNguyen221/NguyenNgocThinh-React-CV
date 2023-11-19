import React from 'react'
import DotIcons from '../WhiteDotIcon/Index'

type typeSkills = {
    skill: string;
} 

const PersonalSkills = ({skill}: typeSkills) => {
  return (
    <>
    <div className='flex gap-x-4 mt-4'>
      <DotIcons />
      <div className='text-white text-xs'>{skill}</div>
    </div>
    </>
  )
}

export default PersonalSkills