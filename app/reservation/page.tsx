import Image from 'next/image'
import React from 'react'
import doc1 from '@/image/doctor-1.jpg'
import doc2 from '@/image/doctor-2.jpg'
import doc3 from '@/image/doctor-3.jpg'
import Appointment from './components/Appointment'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import Creator from '@/components/Creator'
import Link from 'next/link'

const Doctors = [
    {
        name: 'دکتر نیوشا خانی',
        job: 'جراح - دندانپزشک',
        img: doc1,
        link: '/doctors/niosha-khani'
    },
    {
        name: 'دکتر عماد صالحی',
        job: 'متخصص ارتودنسی',
        img: doc2,
        link: '/doctors/emad-salehi'
    },
    {
        name: 'دکتر لیلا مقیمی',
        job: 'جراح - دندانپزشک',
        img: doc3,
        link: '/doctors/leila-moghimi'
    },
]

function page() {
    return (<>
        <Navbar />
        <div className='w-full mb-2 text-black'>

        <div className='gradient-bg h-[450px] w-full flex flex-col text-white items-center gap-5 justify-center'>
                <h1 className='text-5xl font-extrabold'>رزرو نوبت</h1>
                <h3 className='font-light'><Link href={'/'}><span>خانه </span></Link> / رزرو نوبت</h3>
            </div>


            <div id='reserve-con' className='p-10 grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-3'>
                {
                    Doctors.map((item , index) => {
                        return (
                            <div key={index} className='doctor-card w-5/6 p-4 bg-white rounded-xl flex flex-col items-center'>
                                <div className='flex justify-between'>
                                    <div className='shiny overflow-hidden'><Image src={item.img} alt='doctor' className='rounded-xl w-[100px] h-[120px] duration-500' /></div>
                                    <div className='py-1 px-3'>
                                        <h1 className='font-extrabold pb-1'>{item.name}</h1>
                                        <h3 className='font-light text-sm text-gray-400 pb-1'>{item.job}</h3>
                                        <h3 className='flex items-center pb-2'>
                                            <i className='bx bxs-star text-yellow-400'></i>
                                            <i className='bx bxs-star text-yellow-400'></i>
                                            <i className='bx bxs-star text-yellow-400'></i>
                                            <i className='bx bxs-star text-yellow-400'></i>
                                            <i className='bx bxs-star text-yellow-400'></i>
                                            <span className='text-sm font-light mr-1'>امتیاز</span>
                                        </h3>
                                        <Link href={`${item.link}`}><button className='w-full rounded-lg text-blue-800 border-15 hover:text-white hover:bg-blue-800 duration-300 border-blue-800 bg-blue-100 text-sm p-2'>مشاهده پروفایل</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

                <Appointment />
        </div>
            <Footer/>
            <Creator />
        </>
    )
}

export default page