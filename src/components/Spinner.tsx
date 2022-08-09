import React from 'react'
import spinner from '../assets/spinner.gif'
const Spinner = () => {
  return (
    <div className='w-full flex justify-center items-center h-[100vh]'>
        <img src={spinner} alt="spinner" className='h-40 w-40'/>
    </div>
  )
}

export default Spinner