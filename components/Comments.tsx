"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import CommentCard from './CommentCard';

function Comments() {

    const commentData = [
        {
            name: 'حسام خیراندیش',
            desc: 'تجربه‌ی فوق‌العاده‌ای در کلینیک دندانپزشکی داشتم. دندانپزشکان حرفه‌ای و مهربان بودند و همه چیز را به خوبی توضیح دادند'
        },
        {
            name: 'مهتاب صبری',
            desc: 'خدمات این کلینیک بی‌نظیر است! از نحوه‌ی برخورد کارکنان تا کیفیت کار دندانپزشکان، همه چیز عالی بود.'
        },
        {
            name: 'بهروز نیکپور',
            desc: 'بعد از درمان در این کلینیک، احساس راحتی و رضایت کامل دارم. دندان‌هایم به خوبی درمان شدند و هیچ دردی حس نکردم.'
        },
        {
            name: 'تیام درخشان',
            desc: 'از خدمات سریع و کارآمد این کلینیک بسیار راضی‌ام. دندانپزشک با دقت و حوصله کار کرد و نتیجه‌ی کار فوق‌العاده بود.'
        },
        {
            name: 'زهرا سلیمانی',
            desc: 'محیط کلینیک بسیار دوستانه و آرامش‌بخش است. دندانپزشکان با دقت و حرفه‌ای کار می‌کنند و من کاملاً راضی‌ام.'
        },
        {
            name: 'مهسا فضلی',
            desc: 'قطعاً بهترین تجربه‌ی دندانپزشکی را در این کلینیک داشتم. هر بار که به اینجا می‌آیم، احساس آرامش و اعتماد به نفس می‌کنم.'
        },
    ]
    
    const slider = useRef<HTMLUListElement>(null);
    const [xValue, setXvalue] = useState<number>(0)

    useEffect(() => {
        if (slider.current) {
            slider.current.style.translate = `${xValue}px`;
        } else {
            console.warn('slider.current is null');
        }
    }, [xValue])
    
    
    return (
        <div id='comment-con' className='w-full h-[280px] p-10 mb-20'>
            <div><h5 className='text-blue-500 font-bold mb-4'>نظرات شما</h5></div>
            <div><h1 className='text-white font-extrabold text-4xl'>داستان های شما راجب ما ...</h1></div>

            <div className='w-full flex items-center'>

                <div className='flex items-center'>
                    <button onClick={xValue===0 ? ()=>setXvalue(xValue) : ()=>setXvalue(xValue - 780)} className={xValue===0 ? 'bg-blue-300 cursor-not-allowed text-white p-5 text-xl flex items-center rounded-full' : 'bg-blue-500 text-white p-5 text-xl flex items-center rounded-full'}><i className='bx bx-right-arrow-alt'></i></button>
                </div>

                <div className='w-[705px] flex mx-auto overflow-hidden pb-10' style={{ paddingBottom: '100px' }}>

                <ul ref={slider} className='inline duration-1000 flex list-type-none overflowx-auto w-full gap-20'>
                    {
                        commentData.map((i, index) => {
                            return (
                                <li key={index}>
                                    <CommentCard {...i} />
                                </li>
                            )
                        })
                    }
                </ul>

                </div>

                <div className='flex items-center'>
                    <button onClick={xValue===3900 ? ()=>setXvalue(xValue) : ()=>setXvalue(xValue + 780)} className={xValue===3900 ? 'bg-blue-300 cursor-not-allowed text-white p-5 text-xl flex items-center rounded-full' : 'bg-blue-500 text-white p-5 text-xl flex items-center rounded-full'}><i className='bx bx-left-arrow-alt'></i></button>
                </div>

            </div>

        </div>
    )
}

export default Comments