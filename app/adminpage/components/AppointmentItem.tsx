
import React, { useState } from 'react'
import { IAppointmentData } from '../page'

function AppointmentItem({ name, phone_number, age, national_code, doctor, bime, day, time, services }: IAppointmentData) {
    const [open, setOpen] = useState(false)

    return (
        <div className='relative'>
            <div className='grid grid-cols-6 mt-5 mb-1 pb-4 border-b-1'>
                <div className='flex items-center justify-center'><h3 className='text-md font-light text-gray-500'>{name}</h3></div>
                <div className='flex items-center justify-center'><h3 className='text-md font-light text-gray-500'>{national_code}</h3></div>
                <div className='flex items-center justify-center'><h3 className='text-md font-light text-gray-500'>{services}</h3></div>
                <div className='flex items-center justify-center'><h3 className='text-md font-light text-gray-500 '>{time}</h3></div>
                <div className='flex items-center justify-center'><h3 className='text-md font-light text-gray-500 '>{day}</h3></div>
                <div className='flex items-center justify-center'><h3 className='text-md font-light text-gray-500 '>{doctor}</h3></div>
            </div>

            <div style={{zIndex:'99999999999999999'}} className={open ? 'appointmentItem-menu absolute bg-white flex flex-col rounded-lg cursor-pointer' : 'hidden'}>
                <div className='py-2 px-5 bg-red-50 hover:bg-red-100 text-red-500 duration-300 flex items-center justify-center rounded-tl-lg rounded-tr-lg select-none'>
                    لغو نوبت
                    <i className='bx bxs-hand mr-2'></i>
                </div>
                <div className='py-2 px-5 bg-blue-50 hover:bg-blue-100 text-blue-500 duration-300 flex items-center justify-center rounded-bl-lg rounded-br-lg select-none'>
                    مشخصات
                    <i className='bx bx-info-circle mr-2'></i>
                </div>
            </div>
        </div>
    )
}

export default AppointmentItem