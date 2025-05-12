import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IBlogCard {
    img: StaticImageData;
    title: string;
    p: string
}

function BlogCard({img , title , p}:IBlogCard) {
    return (
        <div className='shadow-sm border-1 border-gray-200 text-black rounded-3xl flex flex-col items-center '>
            <div className='hoverImg overflow-hidden shiny rounded-tr-3xl rounded-tl-3xl'><Image src={img} alt='post' className='rounded-tr-3xl rounded-tl-3xl duration-500' /></div>
            <div className='flex items-center p-5'>
                <h2 className='font-bold text-lg'>{title}</h2>
            </div>

            <div className='flex items-center px-5 pb-5'>
                <h4 className='font-light text-gray-400 text-sm'>{p}</h4>
            </div>

            <div className='pb-5 px-5 flex w-full'><button className='bg-blue-600  duration-500 text-white rounded-lg hover:bg-blue-800 px-3 py-1 text-sm'>بخوانید...</button></div>
        </div>
    )
}

export default BlogCard