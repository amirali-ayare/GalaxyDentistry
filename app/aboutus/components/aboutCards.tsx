import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IAboutCard {
    img: StaticImageData;
    title: string;
    p: string;
}

function AboutCards({img , title, p}:IAboutCard) {
    return (
        <div className='text-black w-full h-auto lg:h-[420px] xl:h-[420px] shadow-md bg-white flex items-center flex-col px-5 py-10 rounded-3xl gap-3'>
            <div><Image src={img} alt='.' className='w-[100px]' /></div>
            <div className='pb-5'><h1 className='text-xl font-extrabold'>{title}</h1></div>
            <div><p style={{lineHeight:'26px'}} className='font-light text-sm text-gray-500 text-center'>{p}</p></div>
        </div>
    )
}

export default AboutCards