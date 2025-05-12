"use client"
import React, { useState } from 'react'

interface IAccordion {
    question: string,
    answer: string
}

function Accordion({question , answer}:IAccordion) {

    const [accordionOpen , setAccordionOpen] = useState(false)

    return (
        <div className={`py-4 w-5/6 rounded-2xl duration-300 mb-4 ${accordionOpen ? 'bg-blue-500 text-white' : 'bg-white'}`}>
            <button onClick={()=> setAccordionOpen(!accordionOpen)} className={`flex justify-between duration-300  w-full px-5 ${accordionOpen ? 'bg-blue-500 text-white' : ''}`}>
                <span className='font-bold'>{question}</span>
                {accordionOpen ? <span className='text-xl'>-</span> : <span>+</span>}
            </button>

            <div className={`grid overflow-hidden transition-all px-5 duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100 bg-blue-500 pt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className={`overflow-hidden duration-300 ${accordionOpen ? 'text-white' : ''}`}>
                    <p className='font-light text-gray-100'>
                        {answer}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Accordion