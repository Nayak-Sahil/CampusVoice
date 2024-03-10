"use client"
import { faLayerGroup, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { useSession } from 'next-auth/react';
import { faFileLines, faHandshake, faShareFromSquare, faThumbsDown, faCommentDots } from '@fortawesome/free-regular-svg-icons'

export default function QueryPost() {
    const session = useSession();

    return (
        <div className="mx-auto bg-white rounded-md shadow-md my-5 flex w-full h-80 flex-col justify-between p-5 lg:max-w-screen-lg">
            <div className='w-full h-18 pb-3 border-b-slate-200 border-b-[1px] flex items-center justify-between'>
                <div className='w-max h-full border-red-100 flex items-center'>
                    <Image
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${session?.data?.user?.image}`}
                        alt="username"
                        width={6}
                        height={6}
                        unoptimized={true}
                        class="inline-block h-4 w-4 sm:h-6 sm:w-6 rounded-full"
                    />
                    <h2 className="text-slate-900 text-sm mx-2 mt-1">Sahil Nayak</h2>
                    <p className='text-gray-600 text-xs mt-1'> 5hr ago.</p>
                    <p className="ml-2 rounded-full bg-yellow-200 px-3 py-0.5 font-medium text-yellow-700 max-w-lg text-xs pt-1 mt-1">Sent to resolver</p>
                </div>
                <div className='w-max flex items-center'>
                    <p className="rounded-full bg-gray-500 bg-opacity-10 px-4 pt-1 text-gray-700 max-w-lg flex text-sm mr-2">
                        <FontAwesomeIcon className='mt-[2px]' width={12} icon={faFileLines}></FontAwesomeIcon>
                        <span className='ml-1'>2 Docs</span>
                    </p>
                    <p className="rounded-full bg-gray-500 bg-opacity-10 px-4 pt-1 text-gray-700 max-w-lg flex text-sm">
                        <FontAwesomeIcon className='mt-[2px]' width={14} icon={faLayerGroup}></FontAwesomeIcon>
                        <span className='ml-2'>IT /Academic /Subject</span>
                    </p>
                </div>
            </div>
            <div className='w-full h-36 mt-3 flex flex-col justify-start items-start'>
                <h2 className="text-slate-900 text-xl font-bold lg:text-xl mb-2">Query Title</h2>
                <p className="text-slate-700 relative line-clamp-4 max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto veniam excepturi corrupti debitis perspiciatis autem, voluptates dignissimos nemo rerum similique earum sint sapiente cumque laboriosam ipsam, eligendi odio ut? Praesentium, vel. Quisquam expedita culpa animi suscipit esse architecto et accusantium porro temporibus, quo a obcaecati iste perspiciatis possimus? Doloribus a earum aut commodi impedit, asperiores fugiat labore? A mollitia fugiat veritatis nihil eum officia placeat, in atque. Aut impedit mollitia, obcaecati reiciendis, ea ad architecto ipsum facilis totam placeat quia deleniti perferendis aperiam! Obcaecati, maxime accusantium nostrum vitae officiis, esse id minima ipsa, consequatur nulla illo molestiae aperiam aliquid.
                    <p className='text-slate-700 cursor-pointer absolute right-0 bottom-0 block pr-4 pl-1 bg-white'>...
                        <span className='text-campus-green ml-1'>View More <FontAwesomeIcon width={12} icon={faUpRightFromSquare} /></span>
                    </p>
                </p>
            </div>
            <div className='w-full h-12 pt-2 pr-2 flex items-center justify-between'>
                <div className='w-full flex items-center'>
                    <button class="flex items-center justify-center gap-1 rounded-full border border-emerald-500 px-3 py-1 font-medium text-emerald-500 focus:outline-none focus:ring hover:bg-emerald-100">
                        <FontAwesomeIcon width={20} className='-rotate-45' icon={faHandshake} />
                        <span>agree</span>
                    </button>
                    <button class="ml-5 flex items-center justify-center gap-1 rounded-full border border-red-500 px-3 py-1 font-medium text-red-500 focus:outline-none focus:ring hover:bg-red-100">
                        <FontAwesomeIcon width={20} icon={faThumbsDown} />
                        <span>disagree</span>
                    </button>
                    <button class="ml-5 flex items-center justify-center gap-1 rounded-full border border-gray-500 px-3 py-1 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-100">
                        <FontAwesomeIcon width={20} icon={faShareFromSquare} />
                        <span>share</span>
                    </button>
                </div>
                <div className='w-full flex items-center justify-end'>
                    <button class="flex items-center justify-center gap-1 rounded-full border border-slate-900 px-3 py-1 font-medium text-slate-900 focus:outline-none focus:ring hover:bg-slate-100">
                        <FontAwesomeIcon width={20} icon={faCommentDots} />
                        <span>comments</span>
                    </button>
                    <p className='ml-4 text-gray-500 text-sm'>5 comments</p>
                </div>
            </div>
        </div>
    )
}
