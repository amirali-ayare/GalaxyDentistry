import Image from 'next/image'
import React from 'react'
import HeaderImg from '../image/header-image.jpg';
import Link from 'next/link';

function Header() {
  return (
    <div id='header-con' className='w-full p-10 pt-20 grid lg:grid-cols-2 grid-cols-1'>
        
        <div className='pb-10'>
            <p className='text-right mb-3 lg:mb-6 font-extrabold text-3xl lg:text-5xl xl:text-5xl sm:leading-1 md:leading-1' style={{lineHeight:'60px'}}>مراقبت از دندان ها یک امر ضروریست چون لبخند شما اهمیت دارد</p>
            <p className='font-light lg:w-5/6 xl:w-5/6'>مراقبت از دندان با کیفیت بالا را با تمرکز بر سلامت و زیبایی خود تجربه کنید. به ما اعتماد کنید تا فردای روشن تر و سالم تر بسازیم!</p>

            <div id='headerNumbers' className='grid grid-cols-3 mt-7 pt-5 pb-5 w-full lg:w-5/6 xl:w-5/6'>
                <div className='flex items-center flex-col'>
                    <h1 className='text-4xl font-extrabold pb-2'>+15</h1>
                    <h4>سال تجربه</h4>
                </div>
                <div className='flex items-center flex-col'>
                    <h1 className='text-4xl font-extrabold pb-2'>+25</h1>
                    <h4>هزار بهبودی</h4>
                </div>
                <div className='flex items-center flex-col'>
                    <h1 className='text-4xl font-extrabold pb-2'>+12</h1>
                    <h4>دکتر ماهر</h4>
                </div>
            </div>

            <div className='pt-10'>
                <Link href={'/support'}><button className='p-5 py-4 bg-blue-700 flex items-center justify-center rounded-3xl font-extrabold hover:bg-blue-900 duration-500'>
                    تماس بگیرید
                    <i className='bx bxs-phone-call text-2xl mr-3'></i>
                </button></Link>
            </div>
        </div>
        
        <div>
            <Image src={HeaderImg} className='rounded-2xl h-5/6' alt='..' />
        </div>

    </div>
  )
}

export default Header