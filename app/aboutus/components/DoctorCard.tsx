import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IDoctorProps {
    img: StaticImageData,
    name: string,
    job: string
}

function DoctorCard({img , name , job}:IDoctorProps) {
    return (
        <div className='flex items-center flex-col'>
            <div className='rounded-xl shiny  overflow-hidden  relative  hoverImg'>
                <Image className='rounded-xl duration-500' src={img} alt='.' />

                <div className='social-menu w-[40px] absolute flex flex-col gap-4 duration-500'>
                    <div className='flex items-center cursor-pointer justify-center bg-blue-900 p-2 py-3 rounded-full duration-500 hover:bg-blue-500 text-white'><i className='bx bxl-facebook'></i></div>
                    <div className='flex items-center cursor-pointer justify-center bg-blue-900 p-2 py-3 rounded-full duration-500 hover:bg-blue-500 text-white'><i className='bx bxl-instagram'></i></div>
                    <div className='flex items-center cursor-pointer justify-center bg-blue-900 p-2 py-3 rounded-full duration-500 hover:bg-blue-500 text-white'><i className='bx bxl-whatsapp'></i></div>
                </div>
            </div>
            <div className='flex items-center flex-col mt-3'>
                <h1 className='font-extrabold text-lg'>{name}</h1>
                <h2 className='text-gray-500 font-light'>{job}</h2>
            </div>

        </div>
    )
}

export default DoctorCard