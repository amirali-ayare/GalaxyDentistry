"use client"
import React, { useRef } from 'react'
import { AppContext } from '@/context/AppContext'


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