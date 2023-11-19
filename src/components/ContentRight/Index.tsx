import React from 'react'

type typeContentRight = {
    content: string;
}

const ContentRight = ({content}: typeContentRight) => {
  return (
    <div className='text-gray-500 mt-3.5 text-sm'>{content}</div>
  )
}

export default ContentRight