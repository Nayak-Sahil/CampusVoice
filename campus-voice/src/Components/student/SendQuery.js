import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faLayerGroup, faLock, faUsers } from '@fortawesome/free-solid-svg-icons'
import QueryContext from '@/Contexts/QueryContext';

export default function SendQuery() {
    const contextQuery = useContext(QueryContext);
    const {QueryCategory, QueryTitle, QueryDetails, PostVisibility, QueryResolver, UserIdentity} = contextQuery.queryData;
    return (
        <div className="flex-col items-center justify-evenly w-full h-full">
            <h1 className="text-2xl font-semibold">Confirm Your Query Details. </h1>
            <p className="mt-2 text-gray-500">
                The details of this query are <span className='text-campus-green'>sent to the corresponding query resolver</span> based on your selected preferences.
            </p>
            <div className='mt-4 flex items-center justify-between w-full'>
                <div className='border-2 py-2 px-4 rounded-xl'>
                    <p className='text-campus-green'>Your Identity To This Post:</p>
                    <p className='mt-1 text-sm'><FontAwesomeIcon width={15} icon={faUser}></FontAwesomeIcon> <span className='ml-1'>{UserIdentity.UserIdentityName}</span></p>
                </div>
                <div className='border-2 py-2 px-4 rounded-xl'>
                    <p className='text-campus-green'>Your Query Category:</p>
                    <p className='mt-1 text-sm'><FontAwesomeIcon width={15} icon={faLayerGroup}></FontAwesomeIcon> <span className='ml-1'>{QueryCategory}</span></p>
                </div>
                <div className='border-2 py-2 px-4 rounded-xl'>
                    <p className='text-campus-green'>Query Resolver:</p>
                    <p className='mt-1 text-sm'><FontAwesomeIcon width={15} icon={faPaperPlane}></FontAwesomeIcon> <span className='ml-1'>{QueryResolver}</span></p>
                </div>
                <div className='border-2 py-2 px-4 rounded-xl'>
                    <p className='text-campus-green'>Your Query Post Mode:</p>
                    <p className='mt-1 text-sm'>
                        {
                        PostVisibility == "GLOBAL" ? 
                            <>
                                <FontAwesomeIcon width={20} icon={faGlobe}></FontAwesomeIcon> <span className='ml-1'>Public</span> 
                            </>
                        : 
                            <>
                                <FontAwesomeIcon width={15} icon={faLock}></FontAwesomeIcon> <span className='ml-1'>Private</span> 
                            </>
                        }
                    </p>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-center w-full">
                <div className="w-full mb-1 flex justify-between sm:col-span-3">
                    <div className="w-full mb-3 flex flex-col sm:col-span-3">
                        <label
                            htmlFor="QueryTitle"
                            className="mb-2 text-lg text-campus-green"
                        >
                            Regarding
                        </label>
                        <p className='text-gray-600'>{QueryTitle}</p>
                    </div>
                </div>
                <div className="w-full mb-1 flex flex-col sm:col-span-3">
                    <label
                        className="mb-2 text-lg text-campus-green"
                        htmlFor="QueryDetails"
                    >
                        Message
                    </label>
                    <p className='text-gray-600'>
                        {QueryDetails}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-end sm:flex-row">
                <button
                    type="submit"
                    className="right-2 group my-2 flex w-full items-center justify-center rounded-lg bg-campus-green py-2 text-center text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
                >
                    Send
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
