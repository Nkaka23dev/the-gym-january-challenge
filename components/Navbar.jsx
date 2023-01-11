import React from 'react'

export default function Navbar() {
    return (
        <div className='relative z-50'>
            <nav className=''>
                <div className='bg-[#004191] fixed right-0 left-0 top-0  px-32 py-[0.6rem] text-white max-w-[74rem] mx-auto flex'>
                    <div className='ml-auto flex items-center  gap-3'>
                        <h4 className='text-sm items-center'>University of Stuttgart</h4>
                        <div className='border border-white p-[0.18rem] rounded-full '>
                  <svg className='' width="11px" height="11px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="5.072" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"></polyline></g></svg>
                  </div> 
                    </div>
                </div>
            </nav>
            {/* second navigation */}
            <section className=''>
                <div className='px-32 mt-10 fixed right-0 left-0 top-0 py-10 text-black bg-white max-w-[74rem] mx-auto  flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src="/log1.png" className='h-16 w-16 object-cover' alt="" />
                        <div className='self-end'>
                            <h4 className='font-bold text-xl'>University of Stuttgart</h4>
                            <p>For students</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='w-10 mb-5' src="img1.png" alt="" />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1">
                            <title>search</title>
                            <path d="M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" />
                        </svg>
                        <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bars</title> <path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path> </g></svg>
                    </div>
                </div>
            </section>
        </div>
    )
}