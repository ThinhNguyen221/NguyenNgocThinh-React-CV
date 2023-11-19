import React from 'react'

type typeTitle = {
    title: string;
}

const Titles = ({title}: typeTitle) => {
  return (
    <div className='text-white font-medium'>{title}</div>
  )
}

export default Titles