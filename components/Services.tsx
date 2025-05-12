import React from 'react'
import s1 from '../image/service1.jpg';
import s2 from '../image/service2.jpg';
import s3 from '../image/service3.jpg';
import Image from 'next/image';
import ServCard from './ServCard';


function Services() {

    const serviceCard = [
        {
            title: 'ایمپلنت',
            desc: 'ایمپلنت مجموع قطعاتی است که با جراحی داخل فک ثابت می‌شوند روی آن دندان مصنوعی قرار می‌گیرد و در نهایت ظاهری مشابه با دندان ...',
            img: s1
        },
        {
            title: 'کامپوزیت',
            desc: 'کامپوزیت دندان یک ماده‌ی خمیری شکل است که برای زیبایی و ترمیم دندان‌ها استفاده می‌شود. این ماده روی سطح دندان قرار گرفته و با نور...',
            img: s2
        },
        {
            title: 'لمینت',
            desc: 'لمینت دندان که به عنوان روکش دندان نیز شناخته می‌شود، یک روش زیبایی است که در آن لایه‌های نازکی از مواد (معمولا چینی یا رزین) به سطح...',
            img: s3
        }
    ]



    return (
        <div id='service-con' className='w-full px-10 py-10'>

            <div className='flex flex-col gap-4'>
                <div><h5 className='text-blue-500 font-bold'>خدمات ما</h5></div>

                <div className='grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 pb-6'>
                    <div className='mb-7'><h1 className='font-extrabold text-4xl text-black'>خدمات کلینیک گلکسی</h1></div>
                    <div className='pl-10'><button className='p-5 float-right xl:float-left lg:float-left text-white py-4 bg-blue-700 flex items-center justify-center rounded-2xl font-extrabold hover:bg-blue-900 duration-500'>
                    همه خدمات ها
                    <i className='bx bx-left-arrow-alt text-2xl mr-3'></i>
                    </button></div>
                </div>

                <div className='grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-5'>
                    
                    {
                        serviceCard.map((i, index)=>{
                            return <ServCard key={index} {...i} />
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Services