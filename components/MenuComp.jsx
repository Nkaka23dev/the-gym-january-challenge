import Link from 'next/link'
import React from 'react'

export default function MenuComp({setMenu}) {
const handleClick = () => {
   setMenu(false)
}
    return (
        <div className='h-screen mt-20 bg-[#333333] fixed left-[10.5rem] md:max-w-full  top-0 max-w-[74rem]  mx-auto right-[10.5rem] md:inset-0 z-50'>
            <div className='cursor-pointer md:max-w-full max-w-[74rem] mx-auto relative z-50  '>
                <div className='px-32 md:px-5 mt-9  fixed right-0 left-0 top-0 py-14 bg-[#333333] text-white max-w-[74rem] mx-auto flex justify-between items-center'>
                    <div className='items-center'>
                        <img src="/w-logo.svg" className='h-16 md:h-12' alt="" />
                        {/* <div className='self-end'>
                            <h4 className='font-bold text-xl'>University of Stuttgart</h4>
                            <p>For students</p>
                        </div> */}
                    </div>
                    
                    <div className='flex items-center gap-3'>
                        <svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="29px" height="30px" viewBox="0 0 32 32" version="1.1">
                            <title>search</title>
                            <path d="M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" />
                        </svg>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </div>

                </div>
                <div className='max-w-[74rem] bg-[#303A3D] text-white mx-auto -z-50 absolute top-0 w-full left-0 md:px-4'>
                    <div className=' max-w-4xl mx-auto py-52'>
                        {['Examination organization','Financing & stipends','International students in Stuttgart', 'Diaital Services', 'Counseling'].map((e,idx) => {
                            return (
                            <Link href={e}>
                            <div key={idx} className=' flex justify-between pb-5 md:mt-2 mt-4 border-b border-dashed border-gray-300'>
                                    <p className='text-xl tracking-wide'>{e}</p>
                                    <svg className='' width="17px" height="17px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="6.072" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"></polyline></g></svg>
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
