"use client"
// import React, { useContext, useEffect, useState } from 'react'
import profile from '../image/commentprofile.avif';
import Image from 'next/image';


interface IComment {
    name: string,
    desc: string
}
function CommentCard({ name, desc }: IComment) {

    return (
        <div className='relative flex flex-col bg-white lg:w-[700px] xl:w-[700px] w-[280px] mx-auto text-black rounded-lg shadow-md p-5 h-[200px] lg:h-[200px] xl:h-[200px]' style={{ top: '70px' }}>
            <div className='flex items-center gap-3'>
                <Image src={profile} alt='profile' className='rounded-full w-[50px]' />
                <h2 className='font-bold'>{name}</h2>
            </div>
            <div>
                <p className='p-5 text-sm text-gray-500'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default CommentCard