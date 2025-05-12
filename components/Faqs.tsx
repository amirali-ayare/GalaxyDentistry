import React from 'react'
import Accordion from './Accordion'

function Faqs() {

    const accordionData = [
        {
            question: 'چه زمانی باید به دندانپزشک مراجعه کنم؟',
            answer: 'بهتر است هر شش ماه یک بار برای چکاپ و تمیز کردن دندان‌ها به دندانپزشک مراجعه کنید.',
        },
        {
            question: 'آیا بیمه دندانپزشکی هزینه‌ها را پوشش می‌دهد؟',
            answer: 'اکثر بیمه‌های دندانپزشکی هزینه‌های مربوط به چکاپ‌ها و درمان‌های پایه را پوشش می‌دهند. بهتر است با بیمه خود تماس بگیرید',
        },
        {
            question: 'ساعات کاری کلینیک شما چیست؟',
            answer: 'کلینیک ما از شنبه تا چهارشنبه از ساعت 9 صبح تا 7 بعدازظهر آماده خدمت‌رسانی به شماست.',
        },
        {
            question: 'آیا امکان پرداخت اقساطی هزینه درمان وجود دارد؟',
            answer: 'بله، ما گزینه‌های پرداخت اقساطی را برای تسهیل پرداخت هزینه‌های درمان به بیماران عزیز ارائه می‌دهیم.',
        },
        {
            question: 'آیا نیاز به تعیین وقت قبلی برای ویزیت وجود دارد؟',
            answer: 'بله، لطفاً برای جلوگیری از اتلاف وقت و اطمینان از خدمات بهتر، قبل از مراجعه حتماً وقت قبلی بگیرید.',
        }
    ]


    return (
        <div className='w-full p-10 grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-2 text-black' style={{backgroundColor:'#F8F8FF'}}>
            
            <div className='flex flex-col gap-6 pb-10'>
                <h5 className='text-blue-500 font-bold text-sm'>سوالات متداول</h5>
                <h1 className='text-3xl font-extrabold'>سوالاتی که شاید در ذهن شما باشد</h1>
                <p className='font-light text-sm text-justify text-gray-500 leading-7'>
                پاسخ های سریع راجب درمان، رزرو نوبت و... در کلینیک دندانپزشکی گلکسی، به شما این امکان را می‌دهد که به راحتی و بدون معطلی اطلاعات مورد نیاز خود را دریافت کنید. تیم ما متعهد است تا بهترین خدمات را با بالاترین کیفیت ارائه دهد و شما را در انتخاب درمان مناسب یاری کند. همچنین، با استفاده از سیستم آنلاین نوبت‌دهی، می‌توانید زمان مناسب خود را انتخاب کرده و از معطلی در کلینیک جلوگیری کنید. برای هر گونه سوال و نیاز، ما در کنار شما هستیم!
                </p>

                <div className='w-full px-5 justify-between flex bg-white items-center h-[70px] mt-1 rounded-2xl'>
                    <i className='bx bx-support text-blue-500 text-3xl px-3'></i>
                    <h3 className='font-light'>برای سوالات بیشتر با پشتیبانی ( 56498121-021 ) تماس بگیرید.</h3>
                </div>

            </div>

            <div className='flex flex-col items-center'>
                {
                    accordionData.map((item , index)=>{
                        return <Accordion key={index} {...item}/>
                    })
                }
            </div>

        </div>
    )
}

export default Faqs