"use client"
import React, { useContext } from 'react'
// import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import Sidebar from '@/Components/dashboard/Sidebar'
import Navbar from '@/Components/dashboard/Navbar'
import MobileNav from '@/Components/dashboard/MobileNav'
import '../style.css'
import WriteQuery from '@/Components/student/WriteQuery'
import Destination from '@/Components/student/Destination'
import Identity from '@/Components/student/Identity'
import SendQuery from '@/Components/student/SendQuery'
import QueryContext from '@/Contexts/QueryContext'

export default function page() {

    const contextQuery = useContext(QueryContext);
    console.log(contextQuery)
    const currentformState = contextQuery.queryData.FormState;

    return (
        <div className='bg-gray-50 flex'>
            <Sidebar activeList="2" />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                {/* Upper Header for Desktop */}
                <Navbar />
                {/* Mobile Nav */}
                <MobileNav />
                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <section class="shadow-gray-100 mx-auto max-w-screen-lg rounded-xl bg-white text-gray-600 shadow-lg sm:border">
                            <div class="container mx-auto flex flex-col flex-wrap px-5 pb-5">
                                <div class="bg-slate-50 rounded-xl mx-auto mt-4 mb-7 flex w-full flex-wrap items-center space-x-4 py-4 md:justify-center md:px-10">
                                    <span class="hidden h-8 w-8 items-center justify-center rounded-full bg-[#23B679] text-white shadow md:inline-flex">1</span>
                                    <span class="hidden text-[#23B679] font-semibold md:inline">Convey</span>
                                    <span class="hidden h-0.5 w-10 bg-[#23B679] md:inline"></span>
                                    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow">2</span>
                                    <span class="font-semibold text-blue-600 md:inline">Destination</span>
                                    <span class="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                                    <span class="hidden h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 shadow md:inline-flex">3</span>
                                    <span class="hidden text-gray-600 md:inline">Identity</span>
                                    <span class="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                                    <span class="hidden h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 shadow md:inline-flex">4</span>
                                    <span class="hidden text-gray-600 md:inline">Send</span>
                                    <span class="text-xl md:hidden"
                                    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-3 w-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </span>
                                </div>

                                {
                                    (currentformState == "WRITE") ? <WriteQuery /> : (currentformState == "READ_DESTINATION") ? <Destination /> : (currentformState == "MASK_IDENTITY") ? <Identity /> : (currentformState == "SEND") ? <SendQuery /> : ""
                                }
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
