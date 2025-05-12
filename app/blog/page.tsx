import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'
import post_1 from '@/image/post-1.jpg'
import post_2 from '@/image/post-2.jpg'
import post_3 from '@/image/post-3.jpg'
import Image from 'next/image'
import BlogCard from './components/BlogCard'
import Footer from '@/components/Footer'
import Creator from '@/components/Creator'

function page() {

    const blogData = [
        {
            img: post_1,
            title: 'مزایای معاینه منظم دندانپزشکی',
            p: 'حفظ لبخند سالم نیاز به مراقبت مداوم و عادات خوب دارد. روزانه مسواک بزنید و نخ دندان بکشید'
        },
        {
            img: post_2,
            title: 'نکات ضروری برای لبخند سالم',
            p: 'حفظ لبخند سالم نیاز به مراقبت مداوم و عادات خوب دارد. روزانه مسواک بزنید و نخ دندان بکشید'
        },
        {
            img: post_3,
            title: 'اهمیت مراقبت از دندان کودکان',
            p: 'حفظ لبخند سالم نیاز به مراقبت مداوم و عادات خوب دارد. روزانه مسواک بزنید و نخ دندان بکشید'
        },
        {
            img: post_2,
            title: 'مزایای معاینه منظم دندانپزشکی',
            p: 'حفظ لبخند سالم نیاز به مراقبت مداوم و عادات خوب دارد. روزانه مسواک بزنید و نخ دندان بکشید'
        },
        {
            img: post_3,
            title: 'نکات ضروری برای لبخند سالم',
            p: 'حفظ لبخند سالم نیاز به مراقبت مداوم و عادات خوب دارد. روزانه مسواک بزنید و نخ دندان بکشید'
        },
        {
            img: post_1,
            title: 'اهمیت مراقبت از دندان کودکان',
            p: 'حفظ لبخند سالم نیاز به مراقبت مداوم و عادات خوب دارد. روزانه مسواک بزنید و نخ دندان بکشید'
        }
    ]

    return (
        <div className='h-full w-full text-white'>
            <Navbar />
            <div className='gradient-bg h-[450px] w-full flex flex-col items-center gap-5 justify-center'>
                <h1 className='text-5xl font-extrabold'>وبلاگ</h1>
                <h3 className='font-light'><Link href={'/'}><span>خانه </span></Link> / وبلاگ</h3>
            </div>

            <div className='w-full p-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    blogData.map((i, index)=>{
                        return <BlogCard key={index} {...i} />
                    })
                }
            </div>
            <Footer />
            <Creator/>
        </div>
    )
}

export default page
