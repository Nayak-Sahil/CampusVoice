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
                <Navbar role="Student" />
                {/* Mobile Nav */}
                <MobileNav />
                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow px-6 py-3">
                        <section className="shadow-gray-100 mx-auto max-w-screen-lg rounded-xl bg-white text-gray-600 shadow-lg sm:border">
                            <div className="container mx-auto flex flex-col flex-wrap px-5 pb-5">
                                <div className="bg-slate-50 rounded-xl mx-auto mt-4 mb-7 flex w-full flex-wrap items-center space-x-4 py-4 md:justify-center md:px-10">
                                    {/* for convey */}
                                    <span className={`${currentformState === "WRITE" ? "bg-gray-600 text-white shadow" : "bg-[#23B679] text-white shadow "} hidden h-8 w-8 items-center justify-center rounded-full md:inline-flex`}>1</span>
                                    <span className={`hidden ${currentformState === "WRITE" ? "text-gray-600" : "text-[#23B679]"} md:inline`}>Convey</span>
                                    {
                                        currentformState !== "WRITE" ?
                                            <span className="hidden h-0.5 w-10 bg-[#23B679] md:inline"></span>
                                            :
                                            <span className="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                                    }

                                    {/* for destination */}
                                    <span className={
                                        `${currentformState === "READ_DESTINATION" ? "bg-gray-600 text-white" : ["WRITE", "READ_DESTINATION"].includes(currentformState) ? "bg-white text-gray-700 " : "bg-[#23B679] text-white"} shadow hidden h-8 w-8 items-center justify-center rounded-full md:inline-flex`
                                    }>2</span>
                                    <span className={`hidden ${currentformState === "READ_DESTINATION" ? "text-gray-600 font-semibold" : ["WRITE", "READ_DESTINATION"].includes(currentformState) ? "text-gray-600" : "text-[#23B679]"}  md:inline`}>Destination</span>
                                    {
                                        ["MASK_IDENTITY", "SEND"].includes(currentformState) ?
                                            <span className="hidden h-0.5 w-10 bg-[#23B679] md:inline"></span>
                                            :
                                            <span className="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                                    }

                                    {/* for identity */}
                                    <span className={
                                        `${currentformState === "MASK_IDENTITY" ? "bg-gray-600 text-white" : ["READ_DESTINATION", "WRITE"].includes(currentformState) ? "bg-white text-gray-700 " : "bg-[#23B679] text-white"} shadow hidden h-8 w-8 items-center justify-center rounded-full md:inline-flex`
                                    }>3</span>
                                    <span className={`hidden ${currentformState === "MASK_IDENTITY" ? "text-gray-600 font-semibold" : ["READ_DESTINATION", "WRITE"].includes(currentformState) ? "text-gray-600" : "text-[#23B679]"}  md:inline`}>Identity</span>
                                    {
                                        ["READ_DESTINATION", "WRITE", "MASK_IDENTITY"].includes(currentformState) ?
                                            <span className="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                                            :
                                            <span className="hidden h-0.5 w-10 bg-[#23B679] md:inline"></span>
                                    }

                                    {/* for send */}
                                    <span className={
                                        `${currentformState === "SEND" ? "bg-gray-600 text-white" : "bg-white text-gray-700 "} shadow hidden h-8 w-8 items-center justify-center rounded-full md:inline-flex`
                                    }>4</span>
                                    <span className={`hidden ${currentformState === "SEND" ? "text-gray-600 font-semibold" : "text-gray-600"}  md:inline`}>Send</span>


                                    <span className="text-xl md:hidden"
                                    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3">
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
