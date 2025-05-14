"use client"
import React, { useEffect, useState } from 'react'
import AppointmentItem from './components/AppointmentItem'
import Link from 'next/link'
import moment from 'moment-jalaali';

export interface IAppointmentData {
    id: string,
    name: string,
    phone_number: string,
    age: string,
    national_code: string,
    doctor: string,
    bime: string,
    day: string,
    time: string,
    services: string
}

function page() {


    const date = new Date
    const jDate = moment();
    const currentDay = parseInt(jDate.format('jD'))
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
    };
    const persianMonth = date.toLocaleDateString('fa-IR', options);



    const [originalData, setOriginalData] = useState<IAppointmentData[]>([])
    const [AppointmentData, setAppointmentData] = useState<IAppointmentData[]>([])
    const [choosenBtn , setChoosenBtn] = useState('')
    const [inputValue , setInputValue] = useState('')
    const [openFilter, setOpenFilter] = useState(false)
    const [choosenDoctor , setChoosenDoctor] = useState('');

    useEffect(() => {
        const getData = async () => {
            // const res = await fetch("http://localhost:3009/appointment");
            // const res = await fetch("http://localhost:5000/api/doctors");
            const res = await fetch("https://galaxydental.liara.run/appointment");
            const data = await res.json();
            setOriginalData(data)
            setAppointmentData(data)
        }
        getData()
    }, [])

    console.log(originalData);
    

    const deleteAllFilters = () => {
        setAppointmentData(originalData)
        setChoosenBtn('')
        setChoosenDoctor('')
    }

    const filterTommorow = () => {
        const filtered = originalData.filter((item) => item.day === `${currentDay + 1} ${persianMonth}`)
        setAppointmentData(filtered)
        setChoosenBtn('tommorow')
    }

    const filterTwoDaysLater = () => {
        const filtered = originalData.filter((item) => item.day === `${currentDay + 2} ${persianMonth}`)
        setAppointmentData(filtered)
        setChoosenBtn('2day')
    }

    const filterThreeDaysLater = () => {
        const filtered = originalData.filter((item) => item.day === `${currentDay + 3} ${persianMonth}`)
        setAppointmentData(filtered)
        setChoosenBtn('3day')
    }

    const searchFilter = () => {
        const filtered = AppointmentData.filter((item) => 
            (item.name.includes(inputValue)) || 
            (item.national_code.includes(inputValue))
        );
        setAppointmentData(filtered)
    }
    
    const filterDoctor_1 = () => {
        const filtered = AppointmentData.filter((item) => item.doctor === "دکتر عماد صالحی")
        setAppointmentData(filtered)
        setChoosenDoctor('doctor1')
    }

    const filterDoctor_2 = () => {
        const filtered = AppointmentData.filter((item) => item.doctor === "دکتر نیوشا خانی")
        setAppointmentData(filtered)
        setChoosenDoctor('doctor2')
    }

    const filterDoctor_3 = () => {
        const filtered = AppointmentData.filter((item) => item.doctor === "دکتر لیلا مقیمی")
        setAppointmentData(filtered)
        setChoosenDoctor('doctor3')
    }


    return (
        <div id='adminPageContainer' className='w-full min-h-screen h-full'>


            <div className='w-full py-4 px-10 bg-white text-black grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3'>

                <div className='flex items-center justify-around gap-3'>
                    <div>
                        <button onClick={()=>setOpenFilter(!openFilter)} className='py-1 px-3 bg-blue-50 border-2 border-blue-500 text-blue-500 rounded-md duration-500 hover:bg-blue-500 hover:text-white flex items-center text-sm '>
                            فیلتر
                            <i className='bx bxs-filter-alt'></i>
                            <i className='bx bx-chevron-down mr-2'></i>
                        </button>

                        <div className={openFilter ? 'absolute w-[160px] border-1 border-gray-300 mt-3 flex flex-col bg-white items-center gap-2 py-2 rounded-md' : 'hidden'}>
                            <div onClick={filterDoctor_3} className={choosenDoctor==='doctor3' ? 'flex items-center duration-300 text-blue-500 cursor-pointer hover:text-blue-500 font-bold text-sm' : 'flex items-center duration-300 cursor-pointer hover:text-blue-500 font-bold text-sm'}>دکتر لیلا مقیمی</div>
                            <div onClick={filterDoctor_1} className={choosenDoctor==='doctor1' ? 'flex items-center duration-300 text-blue-500 cursor-pointer hover:text-blue-500 font-bold text-sm' : 'flex items-center duration-300 cursor-pointer hover:text-blue-500 font-bold text-sm'}>دکتر عماد صالحی</div>
                            <div onClick={filterDoctor_2} className={choosenDoctor==='doctor2' ? 'flex items-center duration-300 text-blue-500 cursor-pointer hover:text-blue-500 font-bold text-sm' : 'flex items-center duration-300 cursor-pointer hover:text-blue-500 font-bold text-sm'}>دکتر نیوشا خانی</div>
                        </div>

                    </div>

                    <div className='grid grid-cols-2 items-center gap-2'>

                        <button onClick={filterTommorow} className={choosenBtn==='tommorow' ? 'py-1 px-3 bg-blue-500 border-2 border-blue-500 text-white rounded-md duration-500 flex items-center text-sm' : 'py-1 px-3 bg-blue-50 border-2 border-blue-500 text-blue-500 rounded-md duration-500 hover:bg-blue-500 hover:text-white flex items-center text-sm'}>
                            {currentDay + 1} {persianMonth}
                        </button>
                        <button onClick={filterTwoDaysLater} className={choosenBtn==='2day' ? 'py-1 px-3 bg-blue-500 border-2 border-blue-500 text-white rounded-md duration-500 flex items-center text-sm' : 'py-1 px-3 bg-blue-50 border-2 border-blue-500 text-blue-500 rounded-md duration-500 hover:bg-blue-500 hover:text-white flex items-center text-sm'}>
                            {currentDay + 2} {persianMonth}
                        </button>
                        <button onClick={filterThreeDaysLater} className={choosenBtn==='3day' ? 'py-1 px-3 bg-blue-500 border-2 border-blue-500 text-white rounded-md duration-500 flex items-center text-sm' : 'py-1 px-3 bg-blue-50 border-2 border-blue-500 text-blue-500 rounded-md duration-500 hover:bg-blue-500 hover:text-white flex items-center text-sm'}>
                            {currentDay + 3} {persianMonth}
                        </button>

                        <button onClick={deleteAllFilters} className='py-1 px-3 bg-red-50 border-2 border-red-500 text-red-500 rounded-md duration-500 hover:bg-red-500 hover:text-white flex items-center text-sm'>
                            <i className='bx bxs-trash ml-1'></i>
                            حذف فیلترها
                        </button>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <input type="text" onChange={(e)=>setInputValue(e.target.value)} style={{ borderLeft: 'none' }} className='lg:w-3/6 xl:w-3/6 md:w-3/6 w-full bg-gray-50 outline-none rounded-br-xl rounded-tr-xl border-2 border-gray-300 text-sm py-2 px-2' placeholder='جستجو با نام یا کد ملی...' />
                    <button onClick={searchFilter} className='bg-blue-500 text-white rounded-tl-xl py-2 px-3 rounded-bl-xl'>
                        <i className='bx bx-search-alt'></i>
                    </button>

                </div>

            </div>






            <div className='p-10 w-full flex flex-col '>
                <div className='grid grid-cols-1'>
                    <div className='flex items-center justify-around'>
                        <h3 className='font-bold text-sm'>نام</h3>
                        <h3 className='font-bold text-sm'>کد ملی</h3>
                        <h3 className='font-bold text-sm'>سرویس</h3>
                        <h3 className='font-bold text-sm'>زمان</h3>
                        <h3 className='font-bold text-sm'>روز</h3>
                        <h3 className='font-bold text-sm'>نام دکتر</h3>
                    </div>
                </div>

                
                {
                    AppointmentData.map((i: IAppointmentData, index: number) => {
                        return (
                            <Link key={index} href={`/adminpage/${i.id}`}>
                                <AppointmentItem {...i} />
                            </Link>
                        )
                    })
                }
                

            </div>

        </div>
    )
}

export default page