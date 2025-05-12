import Image from 'next/image'
import { StaticImageData } from 'next/image';
import React from 'react'

interface IServiceCard {
    title: string;
    desc: string;
    img: StaticImageData;
}

function ServCard({title , desc , img}: IServiceCard) {
    return (
        <div className='serv-card shadow-md lg:h-[450px] xl:h-[450px] h-auto flex flex-col text-black rounded-xl p-10'>

            <div className='flex items-center justify-between pb-5 border-b-2 border-gray-100'>
                <span className='flex text-2xl items-center justify-center bg-blue-500 text-white p-3 rounded-md'>
                    <i className='bx bx-injection'></i>
                </span>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <i className='bx bx-left-arrow-alt text-3xl text-blue-500 rotate-45'></i>
            </div>

            <div className='flex flex-col items-center pt-5'>
                <p className='text-gray-400 text-center text-sm mb-5'>{desc}</p>
                <div className='overflow-hidden rounded-3xl shiny'>
                    
                    <Image src={img} alt='.' className='shiny rounded-3xl duration-500' />
                    
                </div>
            </div>

        </div>
    )
}

export default ServCard