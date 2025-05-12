import React from 'react'
import loader from '../image/loader.svg';
import Image from 'next/image';

function loading() {
    return (
        <div className='w-full h-screen bg-blue-800 flex items-center justify-center'>
            <div className='loader p-10 flex items-center justify-center'>
                <Image src={loader} alt='logo' className='load-logo' />
            </div>
        </div>
    )
}

export default loading