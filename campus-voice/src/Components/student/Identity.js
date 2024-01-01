"use client"
import React, { useContext, useRef } from 'react'
import identityModel from '../../../public/images/Identity.svg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import QueryContext from '@/Contexts/QueryContext';
export default function Identity() {
    const contextQuery = useContext(QueryContext);
    const identityInpt = useRef();

    function goToSendState(){
        let userIdentityMode = (identityInpt.current.checked) ? "MASKED" : "NOT_MASKED";
        let dataObj = {
            UserIdentity: {
                IsMasked: (userIdentityMode == "MASKED") ? true : false,
                UserIdentityName: ""
            },
        }
        let finalObj = {...contextQuery.queryData, ...dataObj};
        // Update FormState
        finalObj["FormState"] = "SEND";
        contextQuery.setQueryData(finalObj);
    }


    return (
        <div className="flex items-center justify-evenly w-full h-full border-2 p-10 rounded-xl">
            <Image src={identityModel} width={300}></Image>
            <div className='relative w-2/5 h-[250px] ml-6'>
                <p className="text-base mb-3 text-black">Do you want to <span className='text-campus-green'>mask your identity?</span></p>
                <div className="grid space-y-3">
                    <div className="relative flex items-start">
                        <div className="flex items-center h-5 mt-1">
                            <input ref={identityInpt} name='IdentityVisibility' id="MaskedIdentity" value="Masked" type="radio"/>
                        </div>
                        <label htmlFor='MaskedIdentity' className="ms-3">
                            <span className="block text-base text-campus-green">Yes, Please!</span>
                            <span className="block text-sm text-gray-600 dark:text-gray-500">- Your actual identity not visible to anyone.</span>
                            <span className="block text-sm text-gray-600 dark:text-gray-500">- We mask your actual identity and showing different username.</span>
                        </label>
                    </div>
                    <div className='flex text-base ml-6 text-black'>
                        <FontAwesomeIcon width={15} icon={faUser}></FontAwesomeIcon>
                        <p className='ml-2'>userZ19FG</p>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex items-center h-5 mt-1">
                            <input name='IdentityVisibility' id="ActualVisibility" value="Actual" type="radio" />
                        </div>
                        <label htmlFor='ActualVisibility' className="ms-3">
                            <span className="block text-base text-campus-green">No, It's Fine.</span>
                            <span className="block text-sm text-gray-600 dark:text-gray-500">Your Identity visible to Resolver.</span>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={goToSendState}
                    className="absolute -bottom-8 right-2 group my-2 flex w-full items-center justify-center rounded-lg bg-campus-green py-2 text-center text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
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
