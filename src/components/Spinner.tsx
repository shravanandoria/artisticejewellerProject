import React, { FC } from 'react'
import spinner from '../assets/spinner.gif'

interface SpinnerProps {
  className?: string;
  spinnerClass?: string;
}

const Spinner : FC<SpinnerProps> = ({className, spinnerClass}) => {
  return (
    <div className={`w-full flex justify-center items-center h-[100vh] ${className}`}>
        <img src={spinner} alt="spinner" className={`h-40 w-40 ${spinnerClass}`}/>
    </div>
  )
}

export default Spinner