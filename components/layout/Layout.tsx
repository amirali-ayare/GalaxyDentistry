"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '@/context/AppContext'
import Footer from '../Footer';
import Creator from '../Creator';
import Navbar from '../navbar';


interface ILayoutProps {
    children : React.ReactNode
}

function Layout({children} : ILayoutProps) {

    const slider = useRef<HTMLUListElement>(null);


    return (
        <AppContext.Provider value={{ slider }}>
            {children}
        </AppContext.Provider>
    )
}

export default Layout