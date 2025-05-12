import React from 'react'
import doc1 from '@/image/doctor-1.jpg'
import doc2 from '@/image/doctor-2.jpg'
import doc3 from '@/image/doctor-3.jpg'
import DoctorCard from './DoctorCard'


function OurDoctors() {

    const doctors = [ 
        {
            img: doc1,
            name: "دکتر نیوشا خانی",
            job:'جراح - دندانپزشک'
        },
        {
            img: doc2,
            name: "دکتر عماد صالحی",
            job:'متخصص ارتودنسی'
        },
        {
            img: doc3,
            name: "دکتر لیلا مقیمی",
            job:'جراح - دندانپزشک'
        }
    ]

    return (
        <div className='w-full flex flex-col p-10 gap-4 text-black'>
            <div><h5 className='text-blue-500 font-bold'>پرسنل ما</h5></div>
            <div><h1 className='text-3xl font-extrabold'>با پرسنل حرفه ای ما در ارتباط باشید</h1></div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6'>

                {
                    doctors.map((i,index)=>{
                        return <DoctorCard {...i} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default OurDoctors