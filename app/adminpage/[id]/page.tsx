import React from 'react'

interface IProps {
    params: Promise<{ id: string }>;
    // searchParams: Promise<{}>;
}

interface IAppointmentTableData {
    age: string;
    bime: string;
    day: string;
    doctor: string;
    id: number;
    name: string;
    national_code: string;
    phone_number: string;
    services: string;
    time: string;
}

async function patientPage({ params }: IProps) {

    const { id } = await params
    
    // const res = await fetch(`http://localhost:5000/api/doctors/${id}`)
    const res = await fetch(`https://galaxydental.liara.run/appointment/${id}`)
    const data = await res.json() as IAppointmentTableData

    return (
        <div id='patientPage' className='w-screen h-screen flex items-center justify-center'>

            <table className="w-5/6 bg-white border border-gray-300">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="py-3 px-4 border border-gray-300">عنوان</th>
                        <th className="py-3 px-4 border border-gray-300">مشخصات بیمار</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">نام بیمار</td>
                        <td className="py-2 px-4 border border-gray-300">{data.name}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">کد ملی</td>
                        <td className="py-2 px-4 border border-gray-300">{data.national_code}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">شماره موبایل</td>
                        <td className="py-2 px-4 border border-gray-300">{data.phone_number}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">سن</td>
                        <td className="py-2 px-4 border border-gray-300">{data.age}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">دکتر</td>
                        <td className="py-2 px-4 border border-gray-300">{data.doctor}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">بیمه</td>
                        <td className="py-2 px-4 border border-gray-300">{data.bime}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">روز</td>
                        <td className="py-2 px-4 border border-gray-300">{data.day}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">ساعت</td>
                        <td className="py-2 px-4 border border-gray-300">{data.time}</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-100">
                        <td className="py-2 px-4 border border-gray-300">سرویس</td>
                        <td className="py-2 px-4 border border-gray-300">{data.services}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default patientPage