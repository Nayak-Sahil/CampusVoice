"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import resolverImg from '../../../public/images/resolver/head_it.jpg';
import Image from 'next/image';
import QueryContext from '@/Contexts/QueryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
export default function Destination() {
    const [selectedResolver, setSelectedResolver] = useState(null);

    const contextQuery = useContext(QueryContext);
    const postVisibilityInpt = useRef();
    function goToIdentity() {
        let postVisibilityMode = (postVisibilityInpt.current.checked) ? "GLOBAL" : "PRIVATE";
        let dataObj = {
            PostVisibility: postVisibilityMode,
            QueryResolver: selectedResolver
        }
        let finalObj = { ...contextQuery.queryData, ...dataObj };
        // Update FormState
        finalObj["FormState"] = "MASK_IDENTITY";
        contextQuery.setQueryData(finalObj);
    }

    useEffect(() => {
        // get resolvers
        async function getResolvers() {
            const issue_id = contextQuery.queryData.QueryCategory.queryIssueType.issue_id;
            if (!issue_id) {
                alert("Issue id not found!");
            }
            const res = await fetch(`/api/query/resolvers?issue_id=${issue_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            let data = await res.json();
            if (!data || data.error) {
                return data.error;
            }

            contextQuery.setResolvers(data.resolvers);
            setSelectedResolver(data.resolvers[0]);
        }
        getResolvers();
    }, []);

    return (

        <div className="sm:flex sm:flex-row sm:justify-between flex-col items-center justify-between w-full h-full border-2 rounded-xl">
            {
                console.log(contextQuery.resolvers)
            }
            <div className="m-10 max-w-lg pr-6 border-r-2">
                {/* rounded-lg border bg-white px-5 py-8 shadow-lg */}
                <div className="h-full flex items-center justify-center max-md:flex-col">
                    <div className="relative mr-10 w-1/3 rounded-full">
                        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                        <Image
                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${selectedResolver?.resolver?.user?.userInfo?.image}` || resolverImg}
                            alt="Galaxy"
                            className="mx-auto h-auto w-full rounded-full"
                            unoptimized={true}
                            fill
                            objectFit='contain'
                        />
                        <h1 className="mt-5 text-center text-lg font-bold leading-5 text-gray-900">{selectedResolver?.resolver.user.userInfo.name || "User"}</h1>
                        <h3 className="mt-2 text-sm text-semibold text-center leading-2 text-gray-600">{selectedResolver?.resolver.resolver_role || "Role"}</h3>
                    </div>
                    <div className='w-2/3 h-max'>
                        {
                            contextQuery.resolvers.length === 0 ?
                                //give loading animation
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-campus-green"></div>
                                </div>
                                :
                                (
                                    contextQuery.resolvers.length === 1 ?
                                        (
                                            <>
                                                <span className="rounded-full bg-yellow-200 px-2 py-1 text-sm font-medium text-yellow-700"><FontAwesomeIcon className='mr-1' icon={faUsers} />Resolver!</span>
                                                <p className='text-slate-800 my-2'>
                                                    Your query will be resolved by
                                                </p>
                                                <div className="flex w-full justify-center">
                                                    <div className='border w-full text-center py-1 rounded-md'>
                                                        {
                                                            contextQuery.resolvers[0].resolver.user.userInfo.name
                                                        }
                                                    </div>
                                                </div>
                                                <p className="text-left text-sm leading-6 text-gray-500 hover:text-gray-600 my-5"><span className='text-slate-800'>Work :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
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
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <span className="rounded-full bg-yellow-200 px-2 py-1 text-sm font-medium text-yellow-700"><FontAwesomeIcon className='mr-1' icon={faUsers} /> multiple resolver</span>
                                                <p className='text-slate-800 my-2'>
                                                    You can select any one!
                                                </p>
                                                <div className="flex w-full justify-center">
                                                    <select
                                                        className="text-base w-full rounded-lg border px-2 py-3 shadow-sm outline-none focus:ring focus:ring-campus-green focus:ring-opacity-30 pr-5"
                                                        name="QueryCategory"
                                                        id="QueryCategory"
                                                        value={selectedResolver?.resolver_id}
                                                        onChange={(e) => setSelectedResolver(contextQuery.resolvers.find((resolver) => resolver.resolver_id === e.target.value))}
                                                    >
                                                        {
                                                            contextQuery.resolvers.map((resolver) => {
                                                                return (
                                                                    <option key={resolver.resolver_id} value={resolver.resolver_id}>{resolver.resolver.user.userInfo.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <p className="text-left text-sm leading-6 text-gray-500 hover:text-gray-600 my-5"><span className='text-slate-800'>Work :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
                                                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                                                    <li className="flex items-center py-3 text-sm">
                                                        <span>Category</span>
                                                        <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                                                            {contextQuery.queryData.QueryCategory.queryDomain.domain_name + '/'
                                                                + contextQuery.queryData.QueryCategory.querySubDomain.subdomain_name +
                                                                (contextQuery.queryData.QueryCategory.queryIssueType.issue_type ?
                                                                    "/" + contextQuery.queryData.QueryCategory.queryIssueType.issue_type : "")
                                                            }

                                                        </span></span>
                                                    </li>
                                                    <li className="flex items-center py-3 text-sm">
                                                        <span>Joined On</span>
                                                        <span className="ml-auto">
                                                            {
                                                                new Date(contextQuery.resolvers[0].resolver.user.createdAt).toUTCString().split(' ').slice(0, 4).join(' ').split(',')[1]
                                                            }
                                                        </span>
                                                    </li>
                                                </ul>
                                            </>
                                        )
                                )

                        }
                    </div>
                </div>
            </div>
            <div className='relative max-w-lg h-[200px] mr-5'>
                <p className="font-medium mb-3 text-black">Do you want to publish your query Globally?</p>
                <div className="grid space-y-3">
                    <div className="relative flex items-start">
                        <div className="flex items-center h-5 mt-1">
                            <input ref={postVisibilityInpt} name='QueryVisibility' id="GlobalVisibility" value="Global" type="radio" defaultChecked />
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
