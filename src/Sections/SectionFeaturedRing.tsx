import React from 'react'
import user from '../assets/users/user.jpg'

const SectionFeaturedRing = () => {
  return (
    <div className='border-2 rounded-lg p-4'>
        <h1 className='font-bold mb-4'>The Sun & the Lion #13 (R)</h1>
        <div className='flex justify-start items-center'>
            <div>
                <div><img className='h-10 w-10 rounded-full ' src={user} alt="user" /></div>
            </div>
            <div className='text-sm'>
                <h1>Founding Designer</h1>
                <p className='font-bold'>Alessio Boschi</p>
            </div>
        </div>
    </div>
  )
}

export default SectionFeaturedRing