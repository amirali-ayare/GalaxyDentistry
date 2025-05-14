import AboutInHome from '@/components/aboutInHome'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'
import ab1 from '@/image/ab1.jpg'
import ab2 from '@/image/ab2.jpg'
import ab3 from '@/image/ab3.jpg'
import AboutCards from './components/aboutCards'
import OurDoctors from './components/OurDoctors'
import Footer from '@/components/Footer'
import Creator from '@/components/Creator'

function page() {

    const cards = [
        {
            img: ab1,
            title: 'ارزش ما',
            p: 'در کلینیک گلکسی، ارزش‌های ما شامل صداقت، احترام و تعهد به کیفیت است. ما به هر بیمار به عنوان یک فرد منحصر به فرد نگاه می‌کنیم و با ارائه خدمات شخصی‌سازی شده و توجه به جزئیات، سعی در ایجاد رابطه‌ای پایدار و مبتنی بر اعتماد داریم. هدف ما ایجاد یک فضای دوستانه و حرفه‌ای است که در آن بیماران احساس آسایش و اطمینان کنند.'
        },
        {
            img: ab2,
            title: 'چشم انداز ما',
            p: 'در کلینیک دندانپزشکی گلکسی، چشم‌انداز ما ایجاد یک جامعه سالم و با اعتماد به نفس است که در آن هر فرد به اهمیت بهداشت دهان و دندان خود پی ببرد. ما به دنبال ارائه خدمات دندانپزشکی پیشرفته و نوآورانه هستیم تا هر بیمار احساس راحتی و امنیت کند و به سلامت دندان‌های خود اهمیت بیشتری بدهد.'
        },
        {
            img: ab3,
            title: 'ماموریت ما',
            p: 'ماموریت ما در گلکسی، فراهم کردن بهترین خدمات دندانپزشکی با بالاترین استانداردهای کیفیت و دقت است. ما متعهد به ارتقاء سلامت دهان و دندان بیماران خود هستیم و با استفاده از فناوری‌های روز و روش‌های درمانی مدرن، تجربه‌ای دلپذیر و مؤثر را برای هر بیمار فراهم می‌کنیم.'
        },
    ]

    return (
        <div className='h-full w-full text-white'>
            <Navbar />
            <div className='gradient-bg h-[450px] w-full flex flex-col items-center gap-5 justify-center'>
                <h1 className='text-5xl font-extrabold'>درباره ما</h1>
                <h3 className='font-light'><Link href={'/'}><span>خانه </span></Link> / درباره ما</h3>
            </div>

            <AboutInHome />

            <div className='gradient-bg w-full h-[320px] p-10 mb-20'>
                <div><h5 className='text-blue-500 font-bold mb-4'>دندانپزشکی گلکسی</h5></div>
                <div><h1 className='text-white font-extrabold text-4xl'>هدف ما ارائه خدمات مناسب به شماست</h1></div>
            </div>

            <div className='w-full relative flex items-center px-5 pb-5 justify-between gap-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3' style={{top:'-200px'}}>

                {cards.map((item, index) => {
                    return <AboutCards key={index} {...item} />
                })}

            </div>

            <OurDoctors />
            <Footer />
            <Creator />
        </div>
    )
}

export default page