"use client"
import QueryContext from '@/Contexts/QueryContext'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useMemo } from 'react'

export default function TrackQueryList() {
    const { fetchQueries } = useContext(QueryContext);
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        const getQueries = async () => {
            const res = await fetchQueries(8, 0);

            if (res.status === 200) {
                const data = await res.json();
                setQueries(data.queries);
            }
        }

        getQueries();
    }, [])


    //convert date to 07 February, 2022 format
    const formateDate = (currDate) => {
        const date = new Date(currDate);


        return date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + ", " + date.getFullYear()
    }

    const getStatus = (state) => {
        switch (state) {
            case "sent":
                return "Sent to resolver"
            case "pending":
                return "Pending"
            case "approved":
                return "approved"
            default:
                return "Unknown state"
        }
    }

    const getStyle = (state) => {
        switch (state) {
            case "sent":
                return "text-yellow-700 bg-yellow-200"
            case "pending":
                return "text-indigo-600 bg-indigo-200"
            case "approved":
                return "text-green-600 bg-green-200"
            default:
                return "text-yellow-700 bg-yellow-200"
        }
    }

    return (
        <>
            <div className="w-[80vw] mx-auto h-[70vh] my-4">
                <div className="sm:flex sm:items-center px-1 sm:justify-between flex-col sm:flex-row">
                    <p className="flex-1 text-base font-bold text-gray-900">Your Queries</p>
                    <div className="mt-4 sm:mt-0">
                        <div className="flex items-center justify-start sm:justify-end">
                            <div className="flex items-center">
                                <label htmlFor="" className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                                <select name="" className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                    <option className="whitespace-no-wrap text-sm">Recent</option>
                                </select>
                            </div>

                            <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                                <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" className=""></path>
                                </svg>
                                Export to CSV
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-3 bg-white h-full w-full overflow-y-scroll rounded-xl border shadow">
                    <section className="min-w-full w-full border-separate border-spacing-y-1">
                        <div className="hidden border-b lg:flex sticky top-0 bg-white shadow-sm lg:w-full">
                            <div className="flex justify-between w-full">
                                <p className="w-2/6 whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Queries</p>

                                <p className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</p>

                                <p className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Agreed Student</p>

                                <p className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</p>
                            </div>
                        </div>

                        <div className="lg:border-gray-300">
                            {
                                queries.length === 0 ?
                                    <h2>
                                        No queries found.
                                    </h2>
                                    :
                                    queries.map((query) => (
                                        <Link href={`TrackQuery/${query.issue_id}`} className="flex justify-between w-full hover:bg-gray-100 cursor-pointer">
                                            <div className="w-[40%] whitespace-no-wrap py-4 text-base text-gray-900 sm:px-6">
                                                {query.query_title}
                                                <div className="mt-1 lg:hidden">
                                                    <p className="font-normal text-gray-500">{formateDate(query.createdAt)}</p>
                                                </div>
                                            </div>

                                            <div className="w-[20%] text-center whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex">{formateDate(query.createdAt)}</div>

                                            <div className="w-[15%] text-center whitespace-no-wrap py-4 px-6 text-sm text-gray-600 lg:text-left">
                                                <span className='pl-10'>0</span>
                                                <span className={`rounded-full 
                                                ${getStyle(query.query_status)}
                                                px-2 py-0.5 text-xs font-medium lg:hidden`}>{
                                                        getStatus(query.query_status)
                                                    }</span>
                                            </div>

                                            <div className="w-[15%] whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex lg:items-center">
                                                <span className={`rounded-full 
                                                ${getStyle(query.query_status)}
                                                px-2 py-0.5 text-xs font-medium`}>{
                                                        getStatus(query.query_status)
                                                    }</span>
                                            </div>
                                        </Link>
                                    ))
                            }

                            <Link href="TrackQuery/5023232" className="flex justify-between w-full hover:bg-gray-100 cursor-pointer">
                                <div className="w-[40%] whitespace-no-wrap py-4 text-base text-gray-900 sm:px-6">
                                    Queury Regarding Hostel Admission - Feb 2022
                                    <div className="mt-1 lg:hidden">
                                        <p className="font-normal text-gray-500">07 February, 2022</p>
                                    </div>
                                </div>

                                <div className="w-[20%] text-center whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex">07 February, 2022</div>

                                <div className="w-[15%] text-center whitespace-no-wrap py-4 px-6 text-sm text-gray-600 lg:text-left">
                                    <span className='pl-10'>59</span>
                                    <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700 lg:hidden">Sent to Resolver</span>
                                </div>

                                <div className="w-[15%] whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex lg:items-center">
                                    <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Resolver</span>
                                </div>
                            </Link>
                            <Link href="TrackQuery/5023232" className="flex justify-between w-full hover:bg-gray-100 cursor-pointer">
                                <div className="w-[40%] whitespace-no-wrap py-4 text-base text-gray-900 sm:px-6">
                                    Queury Regarding Hostel Admission - Feb 2022
                                    <div className="mt-1 lg:hidden">
                                        <p className="font-normal text-gray-500">07 February, 2022</p>
                                    </div>
                                </div>

                                <div className="w-[20%] text-center whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex">07 February, 2022</div>

                                <div className="w-[15%] text-center whitespace-no-wrap py-4 px-6 text-sm text-gray-600 lg:text-left">
                                    <span className='pl-10'>59</span>
                                    <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600 lg:hidden">Approved</span>
                                </div>

                                <div className="w-[15%] whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex lg:items-center">
                                    <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">Approved</span>
                                </div>
                            </Link>
                            <Link href="TrackQuery/5023232" className="flex justify-between w-full hover:bg-gray-100 cursor-pointer">
                                <div className="w-[40%] whitespace-no-wrap py-4 text-base text-gray-900 sm:px-6">
                                    Queury Regarding Hostel Admission - Feb 2022
                                    <div className="mt-1 lg:hidden">
                                        <p className="font-normal text-gray-500">07 February, 2022</p>
                                    </div>
                                </div>

                                <div className="w-[20%] text-center whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex">07 February, 2022</div>

                                <div className="w-[15%] text-center whitespace-no-wrap py-4 px-6 text-sm text-gray-600 lg:text-left">
                                    <span className='pl-10'>59</span>
                                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600 lg:hidden">Draft</span>
                                </div>

                                <div className="w-[15%] whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex lg:items-center">
                                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600">Draft</span>
                                </div>
                            </Link>
                            <Link href="TrackQuery/5023232" className="flex justify-between w-full hover:bg-gray-100 cursor-pointer">
                                <div className="w-[40%] whitespace-no-wrap py-4 text-base text-gray-900 sm:px-6">
                                    Queury Regarding Hostel Admission - Feb 2022
                                    <div className="mt-1 lg:hidden">
                                        <p className="font-normal text-gray-500">07 February, 2022</p>
                                    </div>
                                </div>

                                <div className="w-[20%] text-center whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex">07 February, 2022</div>

                                <div className="w-[15%] text-center whitespace-no-wrap py-4 px-6 text-sm text-gray-600 lg:text-left">
                                    <span className='pl-10'>59</span>
                                    <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600 lg:hidden">Pending</span>
                                </div>

                                <div className="w-[15%] whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:flex lg:items-center">
                                    <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">Pending</span>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
            <nav aria-label="Page Navigation" className="w-[80vw] mx-auto my-2 flex justify-end space-x-2 py-2 px-1">
                <a className="w-14 flex items-center space-x-1 font-medium text-gray-400" aria-label="Previous Page" tabIndex="-1">
                    <FontAwesomeIcon className='mb-1 mr-1' icon={faArrowLeft} />
                    <span>Prev</span>
                </a>
                <ul className="flex">
                    <li><a href="#" className="rounded-md border-2 border-campus-green px-2 text-base font-medium text-campus-green sm:px-3 pt-1">1</a></li>
                    <li><a href="#" className="px-2 text-base font-medium sm:px-3 hover:text-campus-green">2</a></li>
                    <li><span className="text-gray-400" aria-hidden="true">...</span><span className="sr-only">Skipping Pages</span></li>
                    <li><a href="#" className="px-2 text-base font-medium sm:px-3 hover:text-campus-green">22</a></li>
                    <li><a href="#" className="px-2 text-base font-medium sm:px-3 hover:text-campus-green">23</a></li>
                </ul>
                <a className="w-14 flex items-center space-x-1 font-medium hover:text-campus-green" href="#" aria-label="Next Page">
                    <span className='mr-1'>Next</span>
                    <FontAwesomeIcon className='mb-1' icon={faArrowRight} />
                </a>
            </nav >
        </>
    )
}
