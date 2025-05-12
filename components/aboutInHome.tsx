import React from 'react'
import founder from '../image/founder-img.jpg';
import aboutImg from '../image/about-image.jpg';
import Image from 'next/image';
import Link from 'next/link';

function AboutInHome() {
    return (
        <div className='w-full px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-10'>
            <div className='text-right text-black flex flex-col gap-5'>
                <div><h6 className='text-blue-500 font-bold'>درباره ما</h6></div>
                <div>
                    <h1 className='text-4xl font-extrabold'>
                        تعهد به سلامتی و زیبایی لبخند شما
                    </h1>
                </div>

                <div className='mt-3'>
                    <p className='text-gray-500 font-light'>هدف کلینیک ما ارائه خدمات عالی و کم هزینه است. کلینیک ما دارای یکی از بهترین تیم های پزشکی در تهران است تا به بهترین شکل به شما خدمات ارائه دهیم. کلینیک گلکسی در سال 1398 افتتاح شد و تا به امروز به فعالیت خود ادامه میدهد...
                        آدرس کلینیک شعبه اول: تهران, سعادت آباد, خیابان شهید علیپور, کوچه گلها پلاک 89
                    </p>
                </div>

                <div id='aboutUsInfo' className='grid grid-cols-2 p-5 mt-5'>
                    <div className='flex items-center'>
                        <h1 className='text-blue-400 text-3xl font-black ml-2'>98%</h1>
                        <h5 className='font-light text-sm'>رضایت مشتری</h5>
                    </div>

                    <div className='flex items-center'>
                        <h1 className='text-blue-400 text-3xl font-black ml-2'>100%</h1>
                        <h5 className='font-light text-sm'>موفقیت در درمان</h5>
                    </div>
                </div>

                <div className='w-full justify-between flex items-center mt-2'>
                    <Link href={'/aboutus'}><button className='p-5 text-white py-4 bg-blue-700 flex items-center justify-center rounded-2xl font-extrabold hover:bg-blue-900 duration-500'>
                    بیشتر...
                    <i className='bx bx-left-arrow-alt text-2xl mr-3'></i>
                    </button></Link>

                    <div className='flex'>
                        <div className='shiny'><Image src={founder} alt='founder' className='rounded-full'/></div>
                        <div className='mr-4'>
                            <h2 className='font-extrabold pb-2'>زهرا مقدم</h2>
                            <h4 className='font-light text-gray-500'>موسس کلینیک</h4>
                        </div>
                    </div>

                </div>
            </div>

            <div className='p-10 shiny overflow-hidden'>
                <Image src={aboutImg} alt='//' className='rounded-2xl h-5/6'/>
            </div>
        </div>
    )
}

export default AboutInHome