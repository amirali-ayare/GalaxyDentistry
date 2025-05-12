"use client"
import React, { useState } from 'react'
// import ReactCompareImage from 'react-compare-image';
// import SolidCompareImage from "solid-compare-image";
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import compare1 from '../image/transformation-img-1.jpg'
import compare2 from '../image/transformation-img-2.jpg'
import compare3 from '../image/transformation-img-3.jpg'
import compare4 from '../image/transformation-img-4.jpg'
import Image from 'next/image'

function Compare() {
    const [sliderPosition , setSliderPosition] = useState(50)
    const [sliderPosition2 , setSliderPosition2] = useState(50)

    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100 , 100))
        setSliderPosition(percent)
    }
    const handleMove2 = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100 , 100))
        setSliderPosition2(percent)
    }

    return (
        <div className='w-full p-5 lg:p-10 xl:p-10 mt-20 text-black flex flex-col'>
            <h5 className='text-blue-500 text-md font-bold mb-3'>تحول را ببینید</h5>
            <h1 className='lg:text-4xl xl:text-4xl text-2xl font-extrabold'>نتایج خیره کننده مشتریان ما !</h1>

            <div className='w-full flex items-center rounded-lg pt-10 gap-10'>
                <div onMouseMove={handleMove} className='relative w-full max-w-[500px] aspect-[70/45] m-auto overflow-hidden select-none'>
                    
                    <Image src={compare2} alt='1' fill priority className='rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl' />
                    
                    <div className='absolute top-0 left-0 right-0 w-full max-w-[500px] aspect-[70/45] m-auto overflow-hidden select-none'
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                    <Image src={compare1} alt='2' fill priority className='rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl' />
                    </div>

                    <div className='absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize'
                    style={{ left:`calc(${sliderPosition}% - 1px)` }}
                    >
                        <div className='bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
                    </div>

                </div>

                <div onMouseMove={handleMove2} className='relative w-full max-w-[500px] aspect-[70/45] m-auto overflow-hidden select-none'>
                    <Image src={compare3} alt='1' fill priority className='rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl' />

                    <div className='absolute top-0 left-0 right-0 w-full max-w-[500px] aspect-[70/45] m-auto overflow-hidden select-none'
                    style={{ clipPath: `inset(0 ${100 - sliderPosition2}% 0 0)` }}
                    >
                    <Image src={compare4} alt='2' fill priority className='rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl' />
                    </div>

                    <div className='absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize'
                    style={{ left:`calc(${sliderPosition2}% - 1px)` }}
                    >
                        <div className='bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Compare