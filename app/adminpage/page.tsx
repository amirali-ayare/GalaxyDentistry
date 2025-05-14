"use client"
import React, { useEffect, useState } from 'react'
import AppointmentItem from './components/AppointmentItem'
import Link from 'next/link'
import AdminNav from './components/AdminNav'

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

    return (
        <AdminNav />
    )
}

export default page