import React, { useContext } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import Sidebar from '@/Components/dashboard/Sidebar'
import Navbar from '@/Components/dashboard/Navbar'
import MobileNav from '@/Components/dashboard/MobileNav'
  
export default async function page() {
    return (
        <div className='bg-gray-100 flex'>
            <Sidebar activeList="1" />

            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                {/* Upper Header for Desktop */}
                <Navbar role="Student" />

                <MobileNav />

                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <div className="text-slate-600 bg-white mx-auto grid max-w-5xl grid-cols-2 gap-y-4 px-4 py-1 sm:my-5 sm:rounded-md sm:border sm:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                            <div className="col-span-2 col-start-1 flex flex-col justify-between align-center border-b py-3 sm:flex-row">
                                <p className="font-medium text-lg sm:pt-2">Overview</p>
                                <select className="text-slate-500 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">
                                    <option value="last-month">Last Month</option>
                                    <option value="last-month">Last 2 Months</option>
                                    <option value="last-month">This Year</option>
                                </select>
                            </div>
                            <div className="col-span-2 -mx-4 bg-gradient-to-tr from-emerald-300 to-emerald-500 px-4 py-9 sm:col-span-1 sm:mx-0 sm:rounded-xl sm:py-4">
                                <p className="mb-4 font-medium text-white">Query Status Overview</p>
                                <div className="mb-4 flex max-w-xs">
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-550">
                                        <FontAwesomeIcon icon={faPaperPlane} width={17}></FontAwesomeIcon>
                                    </div>
                                    <div className="px-4">
                                        <p className="mb-0 text-2xl font-black text-white">1844</p>
                                        <p className="font-medium text-indigo-550">Total Sent Query</p>
                                    </div>
                                </div>
                                <p className="mb-3 font-medium text-white">Current Query Status</p>
                                <div className="flex flex-wrap justify-between">
                                    <div className="w-[80px] flex flex-col items-center rounded-xl bg-white px-4 py-1">
                                        <p className="text-lg font-medium text-slate-800">20</p>
                                        <p className="text-xs font-medium text-slate-800">Response</p>
                                    </div>
                                    <div className="w-[80px] mb-1 flex flex-col items-center rounded-xl bg-white px-4 py-1 sm:mr-1 sm:mb-0">
                                        <p className="text-lg font-medium text-slate-800">10</p>
                                        <p className="text-xs font-medium text-slate-800">Disagree</p>
                                    </div>
                                    <div className="w-[80px] mb-1 flex flex-col items-center rounded-xl bg-white px-4 py-1 sm:mr-1 sm:mb-0">
                                        <p className="text-lg font-medium text-slate-800">21</p>
                                        <p className="text-xs font-medium text-slate-800">Agree</p>
                                    </div>
                                    <div className="w-[80px] flex flex-col items-center rounded-xl bg-white px-4 py-1">
                                        <p className="text-lg font-medium text-slate-800 my-1"><FontAwesomeIcon icon={faCircleCheck} width={17}></FontAwesomeIcon></p>
                                        <p className="text-xs font-medium text-slate-800">Status</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 gap-4 py-4 sm:col-span-1 sm:gap-8 sm:px-4">
                                <div className="">
                                    <p className="text-lg font-bold">32</p>
                                    <p className="text-slate-400 mb-2 font-medium">Not Sent Yet</p>
                                    <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">Drafts</span>
                                </div>
                                <div className="">
                                    <p className="text-lg font-bold">621</p>
                                    <p className="text-slate-400 mb-2 font-medium">Read But Not Agreed</p>
                                    <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">Prending Approval</span>
                                </div>
                                <div className="">
                                    <p className="text-lg font-bold">68</p>
                                    <p className="text-slate-400 mb-2 font-medium">Sent But Not Read</p>
                                    <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Resolver</span>
                                </div>
                                <div className="">
                                    <p className="text-lg font-bold">970</p>
                                    <p className="text-slate-400 mb-2 font-medium">Read and Agreed</p>
                                    <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">Approved</span>
                                </div>
                            </div>
                            <p className="font-medium text-lg sm:pt-2">Your Activity</p>
                            <div className="col-span-2 col-start-1 grid grid-cols-2 gap-6 border-t py-4 sm:grid-cols-4 sm:px-4 sm:py-4">
                                <div className="">
                                    <p className="text-slate-500 text-sm">Response</p>
                                    <p className="text-xl font-medium">5</p>
                                </div>
                                <div className="">
                                    <p className="text-slate-500 text-sm">Agreed</p>
                                    <p className="text-xl font-medium">2</p>
                                </div>
                                <div className="">
                                    <p className="text-slate-500 text-sm">Disagreed</p>
                                    <p className="text-xl font-medium">3</p>
                                </div>
                                <div className="">
                                    <p className="text-slate-500 text-sm">Not Respond</p>
                                    <p className="text-xl font-medium">10</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
