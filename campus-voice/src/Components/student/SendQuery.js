import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faLayerGroup, faLock, faUsers } from '@fortawesome/free-solid-svg-icons'
import QueryContext from '@/Contexts/QueryContext';
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

export default function SendQuery() {
    const contextQuery = useContext(QueryContext);
    const session = useSession();
    const { QueryCategory, QueryTitle, QueryDetails, PostVisibility, QueryResolver, UserIdentity } = contextQuery.queryData;
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const saveQueryData = async(e) => {
        setIsLoading(true);
        e.preventDefault();
        
        //insert query data to database
        const res = await contextQuery.insertQueryData();
        if (!res || res.error) {
            setIsLoading(false);
            return;
        }

        //set form state to write
        contextQuery.queryData.FormState = "WRITE";

        //set query data to default
        contextQuery.setQueryData({
            QueryCategory: null,
            QueryTitle: "",
            QueryDetails: "",
            PostVisibility: "GLOBAL",
            QueryResolver: null,
            UserIdentity: null,
            FormState: "WRITE"
        });

        //set ticket to default
        contextQuery.setTicket({
            queryDomain: null,
            querySubDomain: null,
            queryIssueType: null,
            status: "ON_DOMAIN"
        });
        
        //redirect to dashboard
        setTimeout(() => {
            router.push('/Dashboard/Student')
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className="flex-col items-center justify-evenly w-full h-full">
            <h1 className="text-2xl font-semibold">Confirm Your Query Details. </h1>
            <p className="mt-2 text-gray-500">
                The details of this query are <span className='text-campus-green'>sent to the corresponding query resolver</span> based on your selected preferences.
            </p>
            <div className='mt-4 flex items-center justify-between w-full'>
                <div className='border-2 py-2 px-4 rounded-xl'>
                    <p className='text-campus-green'>Your Identity To This Post:</p>
                    <p className='mt-1 text-sm'><FontAwesomeIcon width={15} icon={faUser}></FontAwesomeIcon> <span className='ml-1'>{UserIdentity.IsMasked ? "User@Z1236" : session?.data?.user?.name}</span></p>
                </div>
                <div className='border-2 py-2 px-4 rounded-xl'>
                    <p className='text-campus-green'>Your Query Category:</p>
                    <p className='mt-1 text-sm'><FontAwesomeIcon width={15} icon={faLayerGroup}></FontAwesomeIcon> <span className='ml-1'>{QueryCategory.queryDomain.domain_name} / {QueryCategory.querySubDomain.subdomain_name} / {QueryCategory.queryIssueType.issue_type}</span></p>
                </div>
                <div className='border-2 py-2 px-4 rounded-xl'>
                    <p className='text-campus-green'>Query Resolver:</p>
                    <p className='mt-1 text-sm'><FontAwesomeIcon width={15} icon={faPaperPlane}></FontAwesomeIcon> <span className='ml-1'>{QueryResolver.resolver.resolver_role}</span></p>
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
                <div className="w-full mb-1 flex flex-col sm:col-span-3 break-words">
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
                    onClick={saveQueryData}
                >
                    {
                        isLoading ?
                            <>
                                <svg aria-hidden="true" className="inline w-6 h-6 mr-2 text-gray-200 animate-spin fill-[#25ffa4]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </>
                            :
                            <>
                                Send
                                < svg
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
                            </>
                    }
                </button>
            </div>
        </div >
    )
}
