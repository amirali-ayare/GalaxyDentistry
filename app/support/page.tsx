import Creator from '@/components/Creator'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='h-full w-full text-white'>
            <Navbar />
            <div className='gradient-bg h-[450px] w-full flex flex-col items-center gap-5 justify-center'>
                <h1 className='text-5xl font-extrabold'>پشتیبانی</h1>
                <h3 className='font-light'><Link href={'/'}><span>خانه </span></Link> / پشتیبانی</h3>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 pb-5 mt-5 p-5'>

                <div className='flex flex-col p-7 rounded-3xl shadow-md bg-white hover1'>
                    <div><i className='bx text-blue-500 duration-500 text-7xl bx-time-five'></i></div>
                    <div className='mt-1'><h2 className='text-2xl duration-500 text-black font-bold'>ساعت کاری</h2></div>
                    <div className='mt-3'>
                        <p className='font-light duration-500 text-gray-500'>شنبه تا چهارشنبه : 7 صبح تا 7 شب</p>
                        <p className='font-light duration-500 text-gray-500'>پنجشنبه و جمعه : بسته است</p>
                    </div>
                </div>

                <div className='flex flex-col p-7 rounded-3xl shadow-md bg-white hover1'>
                    <div><i className='bx bx-phone-call duration-500 text-7xl text-blue-500'></i></div>
                    <div className='mt-1'><h2 className='text-2xl duration-500 text-black font-bold'>ارتباط</h2></div>
                    <div className='mt-3'>
                        <p className='font-light duration-500 text-gray-500'>021-56497181</p>
                        <p className='font-light duration-500 text-gray-500'>galaxySupport@gmail.com</p>
                    </div>
                </div>


                <div className='flex flex-col p-7 rounded-3xl shadow-md bg-white hover1'>
                    <div><i className='bx bx-map-alt text-7xl duration-500 text-blue-500'></i></div>
                    <div className='mt-1'><h2 className='text-2xl duration-500 text-black font-bold'>آدرس</h2></div>
                    <div className='mt-3'>
                        <p className='font-light duration-500 text-gray-500'>تهران, شهرک غرب, خیابان همت</p>
                        <p className='font-light duration-500 text-gray-500'>پلاک 89 , کلینیک دندانپزشکی گلکسی</p>
                    </div>
                </div>
            </div>

            <div className='p-10 text-black'>
                <h5 className='text-blue-500 mb-1 font-bold'>فرم ارتباط</h5>
                <h1 className='text-4xl font-extrabold'>با ما در ارتباط باشید</h1>
            </div>

            <div className='px-10 pb-6 text-black'>
                <form>
                    <div className='grid grid-cols-1 pb-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>

                        <div>
                            <h4 className='mb-2'>نام کامل</h4>
                            <input type="text" placeholder='نام خود را وارد کنید' className='bg-gray-50 border-1 py-2 w-full px-5 text-sm outline-none border-gray-200 rounded-md ' />
                        </div>

                        <div>
                            <h4 className='mb-2'>شماره موبایل</h4>
                            <input type="text" placeholder='شماره موبایل خود را وارد کنید' className='bg-gray-50 border-1 py-2 w-full px-5 text-sm outline-none border-gray-200 rounded-md ' />
                        </div>

                        <div>
                            <h4 className='mb-2'>ایمیل </h4>
                            <input type="text" placeholder='نام خود را وارد کنید' className='bg-gray-50 border-1 py-2 w-full px-5 text-sm outline-none border-gray-200 rounded-md ' />
                        </div>

                    </div>

                    <div>
                        <h4 className='mb-2'>پیام</h4>
                        <textarea placeholder='نام خود را وارد کنید' className='bg-gray-50 resize-none border-1 py-3 w-full px-5 text-sm outline-none border-gray-200 rounded-md ' />
                    </div>

                    <button className='bg-blue-500 text-white font-bold px-4 py-2 mt-2 rounded-md'>ارسال</button>

                </form>
            </div>

            <Footer />
            <Creator />
        </div>
    )
}

export default page