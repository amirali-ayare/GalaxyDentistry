"use client"
import { initialState, stateReducer } from '@/client/clientData';
import moment from 'moment-jalaali';
import { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

export interface IAppointment {
    // id: string,
    name: string,
    phone_number: string,
    age: string,
    national_code: string,
    doctor: string,
    bime: string,
    day: string,
    time: string,
}

function Appointment() {

    // const uniqueId = uuidv4();
    // console.log(uniqueId);


    const doctors = [
        {
            name: 'دکتر نیوشا خانی',
            data: "دکتر نیوشا خانی"
        },
        {
            name: 'دکتر عماد صالحی',
            data: "دکتر عماد صالحی"
        },
        {
            name: 'دکتر لیلا مقیمی',
            data: "دکتر لیلا مقیمی"
        }
    ]

    // json-server --watch next-galaxy/database/db.json --port 3009

    const [state, dispatch] = useReducer(stateReducer, initialState)

    const [bime, setBime] = useState('')
    const [time, setTime] = useState('')
    const [day, setDay] = useState('')
    const [doctor, setDoctor] = useState('')
    const [services, setServices] = useState('')

    const handleInputChange = (e: any) => {
        dispatch({ type: "state_change", data: { name: e.target.name, value: e.target.value } })
    }

    const handleDoctor = (e: any) => {
        dispatch({ type: "state_change", data: { name: "doctor", value: e } })
        setDoctor(e)
    }

    const handleBime = (e: any) => {
        dispatch({ type: "state_change", data: { name: "bime", value: e } })
        setBime(e)
    }

    const handleVisitDay = (e: any) => {
        dispatch({ type: "state_change", data: { name: "day", value: e } })
        setDay(e)
    }

    const handleVisitTime = (e: any) => {
        dispatch({ type: "state_change", data: { name: "time", value: e } })
        setTime(e)
    }

    const handleService = (e: any) => {
        dispatch({ type: "state_change", data: { name: "services", value: e } })
        setServices(e)
    }

    // const setUserId = () => {
    //     dispatch({ type: "state_change", data: { name: "id", value: uniqueId } })
    // }
    // useEffect(()=>{
    //     setUserId()
    // },[])

    const date = new Date
    const jDate = moment();
    const currentDay = parseInt(jDate.format('jD'))

    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
    };
    const persianMonth = date.toLocaleDateString('fa-IR', options);

    const appointmentDate = [
        {
            dayText: `${currentDay + 1}`,
            day: currentDay + 1,
            month: persianMonth,
            data: `${currentDay + 1} ${persianMonth}`
        },
        {
            dayText: `${currentDay + 2}`,
            day: currentDay + 2,
            month: persianMonth,
            data: `${currentDay + 2} ${persianMonth}`
        },
        {
            dayText: `${currentDay + 3}`,
            day: currentDay + 3,
            month: persianMonth,
            data: `${currentDay + 3} ${persianMonth}`
        },
    ]

    const insurance = [
        {
            name: 'مهر',
            data: 'مهر'
        },
        {
            name: 'سروش',
            data: 'سروش'
        },
        {
            name: 'شمیم',
            data: 'شمیم'
        },
        {
            name: 'وصال',
            data: 'وصال'
        },
        {
            name: 'عقیق',
            data: 'عقیق'
        },
        {
            name: 'هیچکدام',
            data: 'هیچکدام'
        }
    ]

    const appointmentTime = [
        {
            text: "9 تا 10",
            hour: "9",
            data: "9-10"
        },
        {
            text: "10 تا 11",
            hour: "10",
            data: "10-11"
        },
        {
            text: "11 تا 12",
            hour: "11",
            data: "11-12"
        },
        {
            text: "12 تا 13",
            hour: "12",
            data: "12-13"
        },
        {
            text: "13 تا 14",
            hour: "13",
            data: "13-14"
        },
        {
            text: "14 تا 15",
            hour: "14",
            data: "14-15"
        },
        {
            text: "15 تا 16",
            hour: "15",
            data: "15-16"
        },
        {
            text: "16 تا 17",
            hour: "16",
            data: "16-17"
        },
        {
            text: "17 تا 18",
            hour: "17",
            data: "17-18"
        },
        {
            text: "18 تا 19",
            hour: "18",
            data: "18-19"
        }
    ]

    const service = [
        {
            text: "معاینه عادی"
        },
        {
            text: "جرم گیری"
        },
        {
            text: "پر کردن"
        },
        {
            text: "عصب کشی"
        },
        {
            text: "بریج"
        },
        {
            text: "ایمپلنت"
        },
        {
            text: "ارتودنسی"
        },
        {
            text: "وایتینگ"
        },
        {
            text: "کامپوزیت"
        }
    ]

    const schema = yup.object().shape({
        name: yup.string().required('وارد کردن نام الزامیست'),
        national_code: yup.string().min(10, 'کد ملی حداقل باید 10 کاراکتر باشد').max(10, 'کد ملی حداکثر باید 10 رقم باشد').required(),
        age: yup.number().typeError('وارد کردن سن الزامیست').min(7, 'بیمار نباید زیر هفت سال باشد').max(100, 'سن بیمار بیش از حد بالاست').required('وارد کردن سن الزامیست'),
        phone_number: yup.string().min(11, 'شماره موبایل را به درستی وارد کنید').max(11, 'شماره موبایل را به درستی وارد کنید').required()
    })


    function errorNotify() {
        toast.error('لطفا تمام موارد را کامل کنید', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    }

    function succesNotify() {
        toast.success('چون API قابلیت POST نداره نمیتونیم ارسال کنیم. ولی میتونید از پنل ادمین رزرو های سابق را ببینید  /adminpage', {
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const sendData = async () => {
        // const res = await fetch("http://localhost:3009/appointment", {
        // const res = await fetch("http://localhost:5000/api/doctors/add", {
        const res = await fetch("https://galaxydental.liara.run", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state)
        }).then(() => {
            return succesNotify()
        })
    }

    const onFormSubmit = (data: object) => {
        console.log(data);
        if (bime === '' || time === '' || day === '' || doctor === '' || services === '') {
            return errorNotify()
        }
        else {
            return sendData()
        }
    }

    return (
        <div className='w-full p-10'>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <form className='grid grid-cols-1 gap-5' onSubmit={handleSubmit(onFormSubmit)}>
                <div className='text-2xl text-blue-500 font-extrabold'>رزرو نوبت</div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full gap-5'>
                    <div>
                        <input {...register("name")} type="text" className="rounded-lg bg-gray-50 text-sm border-1 w-5/6 border-gray-200 py-3 px-5" onChange={handleInputChange} name='name' placeholder='نام و نام خانوادگی...' />
                        {
                            errors.name && (
                                <p className='text-red-500 text-sm mt-1 mr-2'>{errors.name?.message}</p>
                            )
                        }
                    </div>

                    <div>
                        <input {...register("national_code")} type="text" className="rounded-lg bg-gray-50 text-sm border-1 w-5/6 border-gray-200 py-3 px-5" onChange={handleInputChange} name='national_code' placeholder='کد ملی...' />
                        {
                            errors.national_code && (
                                <p className='text-red-500 text-sm mt-1 mr-2'>{errors.national_code?.message}</p>
                            )
                        }
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full gap-5'>
                    <div>
                        <input {...register("age")} type="number" className="rounded-lg bg-gray-50 text-sm border-1 w-5/6 border-gray-200 py-3 px-5" onChange={handleInputChange} name='age' placeholder='سن...' />
                        {
                            errors.age && (
                                <p className='text-red-500 text-sm mt-1 mr-2'>{errors.age?.message}</p>
                            )
                        }
                    </div>
                    <div>
                        <input {...register("phone_number")} type="text" className="rounded-lg bg-gray-50 text-sm border-1 w-5/6 border-gray-200 py-3 px-5" onChange={handleInputChange} name='phone_number' placeholder='شماره موبایل...' />
                        {
                            errors.phone_number && (
                                <p className='text-red-500 text-sm mt-1 mr-2'>{errors.phone_number?.message}</p>
                            )
                        }
                    </div>
                </div>

                <div className='flex items-center flex-wrap gap-1.5 mt-3'>
                    <h1 className='font-bold'>دکتر مورد نظر : </h1>
                    {doctors.map((i, index) => <span key={index} onClick={() => handleDoctor(i.data)} className={state.doctor === i.data ? 'p-1 bg-blue-50 border-1 px-3 border-blue-800 text-sm mr-3 text-blue-800 cursor-pointer rounded-lg' : 'p-1 bg-gray-50 border-1 px-3 border-gray-200 text-sm mr-3 text-gray-500 cursor-pointer rounded-lg'}>{i.name}</span>)}
                </div>

                <div className='flex items-center flex-wrap gap-1.5 mt-3'>
                    <h1 className='font-bold'>بیمه مورد نظر : </h1>
                    {insurance.map((i, index) => <span key={index} onClick={() => handleBime(i.data)} className={state.bime === i.data ? 'p-1 bg-blue-50 border-1 px-3 border-blue-800 text-sm mr-3 text-blue-800 cursor-pointer rounded-lg' : 'p-1 bg-gray-50 border-1 px-3 border-gray-200 text-sm mr-3 text-gray-500 cursor-pointer rounded-lg'}>{i.name}</span>)}
                </div>

                <div className='flex items-center flex-wrap gap-1.5 mt-3'>
                    <h1 className='font-bold'>روز مورد نظر : </h1>
                    {appointmentDate.map((i, index) => <span key={index} onClick={() => handleVisitDay(i.data)} className={state.day === i.data ? 'p-1 bg-blue-50 border-1 px-3 border-blue-800 text-sm mr-3 text-blue-800 cursor-pointer rounded-lg' : 'p-1 bg-gray-50 border-1 px-3 border-gray-200 text-sm mr-3 text-gray-500 cursor-pointer rounded-lg'}>{i.dayText} {i.month}</span>)}
                </div>

                <div className='flex items-center mt-3' style={{ flexWrap: 'wrap' }}>
                    <h1 className='font-bold mb-2'>ساعت مورد نظر : </h1>
                    {appointmentTime.map((i, index) => <span key={index} onClick={() => handleVisitTime(i.data)} className={state.time === i.data ? 'p-1 bg-blue-50 border-1 px-3 border-blue-800 text-sm mr-3 mb-2 text-blue-800 cursor-pointer rounded-lg' : 'p-1 mb-2 bg-gray-50 border-1 px-3 border-gray-200 text-sm mr-3 text-gray-500 cursor-pointer rounded-lg'}>{i.text}</span>)}
                </div>

                <div className='flex items-center mt-3' style={{ flexWrap: 'wrap' }}>
                    <h1 className='font-bold mb-2'>خدمات مورد نظر : </h1>
                    {service.map((i, index) => <span key={index} onClick={() => handleService(i.text)} className={state.services === i.text ? 'p-1 bg-blue-50 border-1 px-3 border-blue-800 text-sm mr-3 text-blue-800 cursor-pointer rounded-lg mb-2' : 'p-1 mb-2 bg-gray-50 border-1 px-3 border-gray-200 text-sm mr-3 text-gray-500 cursor-pointer rounded-lg'}>{i.text}</span>)}
                </div>

                <div className='flex items-center'>
                    <button type='submit' className='py-2 px-7 duration-500 hover:bg-blue-900 bg-blue-500 text-white rounded-md'>ثبت</button>
                </div>

            </form>
        </div>
    )
}

export default Appointment