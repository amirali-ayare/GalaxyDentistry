"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import logo from '../image/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        text: 'خانه ',
        href: '/'
    },
    {
        text: 'درباره ما ',
        href: '/aboutus'
    },
    {
        text: 'وبلاگ',
        href: '/blog'
    },
    {
        text: ' رزرو نوبت',
        href: '/reservation'
    },
    {
        text: ' پشتیبانی',
        href: '/support'
    }
]

function Navbar() {

    const path = usePathname();
    const [openSidebar, setOpenSidebar] = useState(false)


    return (
        <div className='shadow-lg bg-white w-full flex h-[60px] px-5 text-black items-center justify-between'>
            <div className=''>
                {
                    navItems.map((i)=>{
                        return <Link key={i.href} href={i.href} className={i.href === path ? 'text-blue-600 mr-10 hidden md:inline' : 'mr-10 hidden md:inline'}>{i.text}</Link>
                    })
                }
                {
                    <button onClick={()=>setOpenSidebar(true)} className='bg-blue-900 text-white block md:hidden px-3 py-2 rounded text-lg'><i className='bx bx-menu'></i></button>
                }
                <div id='mobileNavItems' style={{zIndex:'9999999999999999999'}} className={openSidebar ? 'block md:hidden absolute p-10 h-full w-full bg-blue-900 text-white left-0 top-0' : 'hidden'}>
                <button onClick={()=>setOpenSidebar(false)} className='bg-blue-800 text-white block md:hidden px-2 py-2 flex items-center justify-center rounded text-xl'><i className='bx bx-x'></i></button>
                    {
                        navItems.map((i)=>{
                            return (
                                <div key={i.href}><Link href={i.href} className={i.href === path ? 'text-blue-600 my-5 block md:hidden' : 'my-5 block md:hidden'}>{i.text}</Link></div>
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <Link href={'/'}><Image src={logo} alt='logo' className='w-[200px] mt-3'/></Link>
            </div>
        </div>
    )
}

export default Navbar