import React from 'react'

type typeEducation = {
    job: string;
}

const Educations = ({job,}: typeEducation) => {
  return (
    <>
        <div>{job}</div>
    </>
  )
}

export default Educations