import Link from 'next/link'
import React from 'react'

function Footer() {

    const li = [
        {
            txt: 'درباره ما',
            href: '/aboutus'
        },
        {
            txt: 'وبلاگ',
            href: '/blog'
        },
        {
            txt: 'پشتیبانی',
            href: '/support'
        },
        {
            txt: 'رزرو نوبت',
            href: '/reservation'
        }
    ]

    return (
        <div id='footer' className='w-full p-10 text-white grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>
            <div className='mb-7'>
                <h1 className='font-extrabold mb-7'>لینک های سریع</h1>
                <ul>

                    {
                        li.map((i, index)=>{
                            return <Link key={index} href={`${i.href}`}><li className='font-light pb-3 cursor-pointer hover:text-blue-500 duration-300'>{i.txt}</li></Link>
                        })
                    }
                </ul>
            </div>

            <div className='mb-7'>
                <h1 className='font-extrabold mb-7'>شبکه های اجتماعی</h1>
                <ul>
                    <li className='font-light pb-3 cursor-pointer hover:text-blue-500 duration-300'>اینستاگرام</li>
                    <li className='font-light pb-3 cursor-pointer hover:text-blue-500 duration-300'>تلگرام</li>
                    <li className='font-light pb-3 cursor-pointer hover:text-blue-500 duration-300'>توییتر</li>
                    <li className='font-light pb-3 cursor-pointer hover:text-blue-500 duration-300'>فیسبوک</li>
                </ul>
            </div>

            <div>
                <h1 className='font-extrabold mb-4'>کلینیک دندانپزشکی گلکسی</h1>
                <h3 className='font-light hover:text-blue-500 duration-300 pb-3 cursor-pointer'>تلفن : 564971781-021</h3>
                <h3 className='font-light hover:text-blue-500 duration-300 pb-3 cursor-pointer'>پشتیبانی آنلاین : galaxy_sup@</h3>
            </div>
        </div>

    )
}

export default Footer