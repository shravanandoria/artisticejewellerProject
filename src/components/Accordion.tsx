import React, { FC, ReactElement, useRef, useState } from 'react'
import Chevron from '@heroicons/react/solid/ChevronDownIcon'
interface AccordionProps {
    title: string;
    content: ReactElement;
}
const Accordion : FC<AccordionProps> = ({title, content}) => {

    const [setActive, setActiveState] = useState(false);
    
    const toggleAccordion = () => {
        setActiveState(!setActive);
    }

    return (
        <div className='accordion__section my-2'>
            <button  className='accordion flex justify-between items-center w-full' onClick={toggleAccordion}>
                <p className='accordion_title font-bold'>{title}</p>
                <Chevron className={`h-7 w-7 ${!setActive && '-rotate-180'} duration-100`}/>
            </button>
            <div className={`accordion__content overflow-hidden transition-all ${setActive && 'max-h-0'} duration-300 pr-2`}>
                {content}
            </div>
        </div>
    )
}

export default Accordion