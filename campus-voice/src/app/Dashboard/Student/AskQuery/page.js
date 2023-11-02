import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import Sidebar from '@/Components/dashboard/Sidebar'
import Navbar from '@/Components/dashboard/Navbar'
import MobileNav from '@/Components/dashboard/MobileNav'
import '../style.css'

export default function page() {
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
                                    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </span>
                                </div>

                                <div class="flex w-full flex-col">
                                    <h1 class="text-2xl font-semibold">Convey Your Query </h1>
                                    <p class="mt-2 text-gray-500">Please feel free to express your query and ask any question. <span className='text-[#23B679] font-semibold'>Don't worry, you can mask your identity.</span></p>
                                    <div class="mt-4 flex flex-col items-center w-full">
                                        <div className="w-full mb-1 flex justify-between sm:col-span-3">
                                            <div class="w-[68%] mb-3 flex flex-col sm:col-span-3">
                                                <label class="mb-2 font-semibold text-gray-500" for="">Regarding</label>
                                                <input class="appearance-none border w-full rounded-lg border px-2 py-2 shadow-sm text-gray-700 leading-tight focus:outline-none focus:ring focus:shadow-outline" id="username" type="text" placeholder="Express Your Complaint" />
                                            </div>
                                            <div class="w-[30%] mb-3 flex flex-col sm:col-span-3">
                                                <label class="mb-2 font-semibold text-gray-500" for="">Category</label>
                                                <select class="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring pr-5" name="" id="">
                                                    <option value="French Toast">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="w-full mb-1 flex flex-col sm:col-span-3">
                                            <label class="mb-2 font-semibold text-gray-500" for="">Message</label>
                                            <textarea class="appearance-none border w-full rounded-lg border px-2 py-2 shadow-smtext-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Message... ..." rows="12"></textarea>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-between sm:flex-row">
                                        <button class="group order-1 my-2 flex w-full items-center justify-center rounded-lg bg-gray-200 py-2 text-center font-bold text-gray-600 outline-none transition sm:w-40 focus:ring hover:bg-gray-300">Cancel</button>
                                        <button class="group my-2 flex w-full items-center justify-center rounded-lg bg-blue-700 py-2 text-center font-bold text-white outline-none transition sm:order-1 sm:w-40 focus:ring">
                                            Continue
                                            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-2 ml-4 h-4 w-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
