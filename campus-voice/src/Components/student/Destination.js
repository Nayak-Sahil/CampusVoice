"use client"
import React, { useContext, useRef } from 'react'
import resolverImg from '../../../public/images/resolver/head_it.jpg';
import Image from 'next/image';
import QueryContext from '@/Contexts/QueryContext';
export default function Destination() {
    const contextQuery = useContext(QueryContext);
    const postVisibilityInpt = useRef();
    function goToIdentity(){
        let postVisibilityMode = (postVisibilityInpt.current.checked) ? "GLOBAL" : "PRIVATE";
        let dataObj = {
            PostVisibility: postVisibilityMode,
            QueryResolver: "HOD"
        }
        let finalObj = {...contextQuery.queryData, ...dataObj};
        // Update FormState
        finalObj["FormState"] = "MASK_IDENTITY";
        contextQuery.setQueryData(finalObj);
    }

    return (
        <div className="sm:flex sm:flex-row sm:justify-between flex-col items-center justify-between w-full h-full border-2 rounded-xl">
            <div className="m-10 max-w-lg pr-6 border-r-2">
                {/* rounded-lg border bg-white px-5 py-8 shadow-lg */}
                <div className="h-full flex items-center justify-center max-md:flex-col">
                    <div className="relative mr-10 w-1/3 rounded-full">
                        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                        <Image className="mx-auto h-auto w-full rounded-full" src={resolverImg} alt="Query Resolver"></Image>
                        <h1 className="mt-5 text-center text-lg font-bold leading-5 text-gray-900">Dr. Hiteishi Diwanji</h1>
                        <h3 className="mt-2 text-sm text-semibold text-center leading-2 text-gray-600">Head of Department (I.T.)</h3>
                    </div>
                    <div className='w-2/3 h-max'>
                        <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Work : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
                        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                            <li className="flex items-center py-3 text-sm">
                                <span>Category</span>
                                <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Department</span></span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span>Joined On</span>
                                <span className="ml-auto">Apr 08, 2022</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='relative max-w-lg h-[200px] mr-5'>
                <p className="font-medium mb-3 text-black">Do you want to publish your query Globally?</p>
                <div className="grid space-y-3">
                    <div className="relative flex items-start">
                        <div className="flex items-center h-5 mt-1">
                            <input ref={postVisibilityInpt} name='QueryVisibility' id="GlobalVisibility" value="Global" type="radio" defaultChecked/>
                        </div>
                        <label htmlFor='GlobalVisibility' className="ms-3">
                            <span className="block text-base text-campus-green">Global</span>
                            <span className="block text-sm text-gray-600 dark:text-gray-500">Your Query Post visible to all student of your department.</span>
                        </label>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex items-center h-5 mt-1">
                            <input name='QueryVisibility' id="PrivateVisibility" value="Private" type="radio" />
                        </div>
                        <label htmlFor='PrivateVisibility' className="ms-3">
                            <span className="block text-base text-campus-green">Private</span>
                            <span className="block text-sm text-gray-600 dark:text-gray-500">Your Query Post only visible to Resolver.</span>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={goToIdentity}
                    className="absolute -bottom-12 right-2 group my-2 flex w-full items-center justify-center rounded-lg bg-campus-green py-2 text-center text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
                >
                    Continue
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:translate-x-2 ml-4 h-4 w-4 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
