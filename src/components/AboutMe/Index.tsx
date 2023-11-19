import React from 'react'

type typeAboutMe = {
    text: string;
}

const AboutMe = ({text}: typeAboutMe) => {
  return (
    <div className='text-black font-medium'>{text}</div>
  )
}

export default AboutMe