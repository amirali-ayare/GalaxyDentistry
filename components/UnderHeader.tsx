import Link from 'next/link'
import React from 'react'

function UnderHeader() {
    return (
        <div className='relative w-5/6 flex items-center p-7 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-5 bg-white rounded-3xl top-100 shadow-md' style={{top:'-50px'}}>

            <div className='flex'>
                <div><Link href={'/support'}><button className='bg-blue-700 p-4 text-2xl rounded-xl flex items-center hover:bg-blue-900 duration-500'><i className='bx bxs-time-five'></i></button></Link></div>
                <div className='text-right text-black pr-3'>
                    <h3 className='font-extrabold pb-2'>ساعت کاری</h3>
                    <h5 className='text-gray-500 font-normal'>شنبه تا پنجشنبه از 9 صبح تا 9 شب</h5>
                </div>
            </div>

            <div className='flex'>
                <div><Link href={'/support'}><button className='bg-blue-700 p-4 text-2xl rounded-xl flex items-center hover:bg-blue-900 duration-500'><i className='bx bxs-phone-call'></i></button></Link></div>
                <div className='text-right text-black pr-3'>
                    <h3 className='font-extrabold pb-2'>پشتیبانی نیاز دارید؟</h3>
                    <h5 className='text-gray-500 font-normal'>021-56712345</h5>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <Link href={'/reservation'}><button className='hover:bg-blue-900 duration-500 bg-blue-700 px-10 font-extrabold py-4 rounded-2xl flex items-center'>
                    رزرو نوبت
                    <i className='bx bxs-plus-circle mr-3 text-xl'></i>
                </button></Link>
            </div>

        </div>
    )
}

export default UnderHeader