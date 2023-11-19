import React from 'react'
import DotIcons from '../WhiteDotIcon/Index'


const Contacts = () => {
  return (
    <>
        <div className="text-white text-xs space-y-3 mt-3.5">
            <ul className='flex gap-x-4'>
                <DotIcons/>
                <li className=''>
                    <div>
                        <div className='text-base font-medium inset-y-0'>Phone</div>
                    </div>
                    <div>0905.611.231</div>
                </li>
            </ul>
            <ul className='flex gap-x-4'>
                <DotIcons/>
                <li className=''>
                    <div className='text-base font-medium'>Email</div>
                    <div>NNT@gmail.com</div>
                </li>
            </ul>
            <ul className='flex gap-x-4'>
                <DotIcons/>
                <li className=''>
                    <div className='text-base font-medium'>Address</div>
                    <div>Da Nang - Viet Nam</div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Contacts