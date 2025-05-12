import Navbar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import emadImg from '@/image/doctor-2.jpg'
import Footer from '@/components/Footer'
import Creator from '@/components/Creator'

function page() {
    return (
        <div className='w-full h-full text-black'>
            <Navbar />
            <div className='gradient-bg h-[450px] w-full flex flex-col text-white items-center gap-5 justify-center'>
                <h1 className='text-5xl font-extrabold'>دکتر عماد صالحی</h1>
                <h3 className='font-light'><Link href={'/'}><span>خانه </span></Link> / دکتر ها / دکتر عماد صالحی</h3>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pb-10 gap-4 mt-10'>
                <div>
                    <div className='bg-white rounded-3xl gap-2 flex flex-col items-center p-5 '>
                        <div className='rounded-3xl shiny overflow-hidden hoverImg'><Image src={emadImg} className='rounded-3xl duration-500' alt='doctor' /></div>
                        <div><h2 className='text-black text-xl font-bold'>دکتر عماد صالحی</h2></div>
                        <div><h5 className='text-black text-sm font-light text-gray-500'>متخصص ارتودنسی</h5></div>
                        <div className='social-menu flex gap-4 duration-500 mt-2'>
                            <div className='flex items-center cursor-pointer justify-center bg-blue-900 px-2 py-2 rounded-full duration-500 hover:bg-blue-500 text-white'><i className='bx bxl-facebook'></i></div>
                            <div className='flex items-center cursor-pointer justify-center bg-blue-900 px-2 py-2 rounded-full duration-500 hover:bg-blue-500 text-white'><i className='bx bxl-instagram'></i></div>
                            <div className='flex items-center cursor-pointer justify-center bg-blue-900 px-2 py-2 rounded-full duration-500 hover:bg-blue-500 text-white'><i className='bx bxl-whatsapp'></i></div>
                        </div>
                    </div>
                </div>

                <div className='p-5 flex flex-col'>
                    <div>
                        <h1 className='text-2xl mb-3 font-extrabold'>دکتر عماد صالحی</h1>
                        <p style={{ lineHeight: '25px' }} className='float-right text-sm text-gray-500 font-light'>
                            دکتر صالحی دندانپزشک اصلی در مطب ما است که تجربه گسترده و اشتیاق به مراقبت از بیمار را به ارمغان می آورد. دکتر صالحی با داشتن پایه ای قوی در دندانپزشکی عمومی و زیبایی، به بیماران کمک می کند تا سلامت دهان و دندان خود را بهینه و لبخندهایی با اعتماد به نفس داشته باشند. او مدرک دندانپزشکی خود را از یک موسسه معتبر دریافت کرد و به گسترش دانش خود از طریق آموزش های پیشرفته و گواهینامه ها ادامه داد و اطمینان حاصل کرد که در خط مقدم آخرین تکنیک ها و فناوری های دندانپزشکی باقی می ماند.
                        </p>
                    </div>

                    <h1 className='text-2xl mt-5 font-extrabold'>امتیاز های دکتر صالحی</h1>

                    <div className='flex items-center mt-6 justify-around'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-blue-500 font-extrabold text-4xl'>98%</h1>
                            <h3 className='text-blue-500'>رضایت</h3>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h1 className='text-blue-500 font-extrabold text-4xl'>100%</h1>
                            <h3 className='text-blue-500'>مهارت</h3>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h1 className='text-blue-500 font-extrabold text-4xl'>100%</h1>
                            <h3 className='text-blue-500'>نظم</h3>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
            <Creator />
        </div>
    )
}

export default page