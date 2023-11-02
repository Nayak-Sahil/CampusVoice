import React from 'react'
import './style.css'
import Image from 'next/image'
import logo from '../../../../public/CampusVoice.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import Sidebar from '@/Components/dashboard/Sidebar'
import Navbar from '@/Components/dashboard/Navbar'
import MobileNav from '@/Components/dashboard/MobileNav'

export default function page() {
    return (
        <div className='bg-gray-100 flex'>
            <Sidebar activeList="1" />

            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                {/* Upper Header for Desktop */}
                <Navbar />

                {/* Mobile Nav */}
                {/* <header x-data="{ isOpen: false }" className="w-full bg-sidebar py-5 px-6 sm:hidden">
                    <div className="flex items-center justify-between">
                        <a href="index.html" className="text-black text-3xl font-semibold uppercase hover:text-gray-300"><Image src={logo} alt='CampusVoice' width={150}></Image></a>
                        <button className="text-black text-3xl focus:outline-none">
                            <i x-show="!isOpen" className="fas fa-bars"></i>
                            <i x-show="isOpen" className="fas fa-times"></i>
                        </button>
                    </div>

                    <nav className="hidden flex flex-col pt-4">
                        <a href="index.html" className="flex items-center active-nav-link text-black py-2 pl-4 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Dashboard
                        </a>
                        <a href="blank.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-sticky-note mr-3"></i>
                            Blank Page
                        </a>
                        <a href="tables.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-table mr-3"></i>
                            Tables
                        </a>
                        <a href="forms.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-align-left mr-3"></i>
                            Forms
                        </a>
                        <a href="tabs.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Tabbed Content
                        </a>
                        <a href="calendar.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-calendar mr-3"></i>
                            Calendar
                        </a>
                        <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-cogs mr-3"></i>
                            Support
                        </a>
                        <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-user mr-3"></i>
                            My Account
                        </a>
                        <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Sign Out
                        </a>
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                        </button>
                    </nav>
                </header> */}
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

                        <div className="w-full">
                            <div className="w-full mx-auto mt-8 max-w-screen-lg">
                                <div className="sm:flex sm:items-center px-1 sm:justify-between flex-col sm:flex-row">
                                    <p className="flex-1 text-base font-bold text-gray-900">Recent Queries</p>

                                    <div className="mt-4 sm:mt-0">
                                        <div className="flex items-center justify-start sm:justify-end">
                                            <div className="flex items-center">
                                                <label for="" className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                                                <select name="" className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                                    <option className="whitespace-no-wrap text-sm">Recent</option>
                                                </select>
                                            </div>

                                            <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                                                <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" className=""></path>
                                                </svg>
                                                Export to CSV
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 bg-white overflow-hidden rounded-xl border shadow">
                                    <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                                        <thead className="hidden border-b lg:table-header-group">
                                            <tr className="">
                                                <td width="50%" className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Queries</td>

                                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>

                                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Agreed Student</td>

                                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                                            </tr>
                                        </thead>

                                        <tbody className="lg:border-gray-300">
                                            <tr className="">
                                                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                    Queury Regarding Hostel Admission - Feb 2022
                                                    <div className="mt-1 lg:hidden">
                                                        <p className="font-normal text-gray-500">07 February, 2022</p>
                                                    </div>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">07 February, 2022</td>

                                                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                    <span className='pl-10'>59</span>
                                                    <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700 lg:hidden">Sent to Resolver</span>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                    <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Resolver</span>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                Safety and Security in College Hostels  - Jan 2022
                                                    <div className="mt-1 lg:hidden">
                                                        <p className="font-normal text-gray-500">09 January, 2022</p>
                                                    </div>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">09 January, 2022</td>

                                                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                    <span className='pl-10'>20</span>
                                                    <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600 lg:hidden">Approved</span>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                    <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">Approved</span>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                    Query related to Water Tank - Dec 2021
                                                    <div className="mt-1 lg:hidden">
                                                        <p className="font-normal text-gray-500">15 December, 2021</p>
                                                    </div>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">15 December, 2021</td>

                                                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                    <span className='pl-10'>10</span>
                                                    <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700 lg:hidden">Sent to Resolver</span>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                    <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Resolver</span>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                    Vehicles Parking Problems - Nov 2021
                                                    <div className="mt-1 lg:hidden">
                                                        <p className="font-normal text-gray-500">14 November, 2021</p>
                                                    </div>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">14 November, 2021</td>

                                                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                    <span className='pl-10'>80</span>
                                                    <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600 lg:hidden">Prending</span>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                    <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">Prending</span>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                                    College Cricket Ground - Oct 2021
                                                    <div className="mt-1 lg:hidden">
                                                        <p className="font-normal text-gray-500">15 October, 2021</p>
                                                    </div>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">15 October, 2021</td>

                                                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                                    <span className='pl-10'>38</span>
                                                    <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium lg:hidden">Drafts</span>
                                                </td>

                                                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                                    <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">Drafts</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
