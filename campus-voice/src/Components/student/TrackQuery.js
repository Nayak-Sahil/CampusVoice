import { faClock, faFileLines, faUser } from '@fortawesome/free-regular-svg-icons'
import { faHashtag, faLayerGroup, faLock, faReplyAll, faSignal, faUpRightFromSquare, faUserAstronaut, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import approved from "../../../public/emojies/angry.png"

export default function TrackQuery({queryId}) {
    const queryStatusStyle = {
        resolved: {
            container: "shadow-green-400",
            text: "text-campus-green",
            status: "bg-green-200 text-campus-green"
        },
        pending: {
            container: "shadow-red-400",
            text: "text-red-400",
            status: "bg-red-100 text-red-400"
        }
    }
    return (
        <div className="relative mx-auto my-5 flex w-full flex-col justify-between px-10 lg:max-w-screen-lg lg:flex-row">
            <div className="bg-white absolute left-0 h-full w-full lg:w-5/6 rounded-2xl border border-slate-200 shadow"></div>
            <div className="relative py-10 ">
                <div className='w-60 flex justify-between'>
                    <span className="rounded-full bg-campus-green bg-opacity-10 px-4 pt-1 text-sm text-campus-green w-max flex items-center mb-7">Recent Query</span>
                    <span className="rounded-full bg-gray-500 bg-opacity-10 px-4 pt-1 text-sm text-gray-700 w-max flex items-center mb-7">
                        <FontAwesomeIcon className='mb-1 mr-1' icon={faHashtag} /> 
                        {queryId}
                    </span>
                </div>
                <h2 className="text-slate-900 text-3xl font-bold lg:text-4xl">Query Title</h2>
                <div className='my-5 relative'>
                    <p className="text-slate-700 line-clamp-2 max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi id quaerat optio nisi cum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi id quaerat optio nisi cum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi id quaerat optio nisi cum?
                    </p>
                    <p className='text-slate-700 cursor-pointer absolute right-0 bottom-0 block pr-4 pl-1 bg-white'>...
                    <span className='text-campus-green ml-1'>View More <FontAwesomeIcon width={12} icon={faUpRightFromSquare} /></span>
                    </p>
                </div>
                <div className='flex w-[490px] text-base justify-between'>
                    <p className="text-slate-700 max-w-lg"><FontAwesomeIcon width={17} icon={faLayerGroup}></FontAwesomeIcon> <span className='ml-1'>IT /Academic /Subject</span></p>
                    <p className="text-slate-700 text-base max-w-lg"><FontAwesomeIcon width={18} icon={faUserAstronaut}></FontAwesomeIcon> <span className='ml-1 text-slate-900'>Master ID: 052652</span></p>
                </div>
                <div className='flex w-[490px] text-base mt-5 justify-between'>
                    <p className="text-slate-700 max-w-lg"><FontAwesomeIcon width={17} icon={faFileLines}></FontAwesomeIcon> <span className='ml-1'>2 Docs</span></p>
                    <p className="text-slate-700 max-w-lg"><FontAwesomeIcon width={17} icon={faLock}></FontAwesomeIcon> <span className='ml-1'>Private</span></p>
                </div>
            </div>
            <div className="relative h-72 lg:w-96">
                <div className='absolute -top-1 -right-9 z-30'>
                    <Image src={approved} width={70} />
                </div>
                {/* When Response not received for long period of time: shadow-red-400 */}
                <div className={`${queryStatusStyle.pending.container} absolute flex h-56 w-48 translate-x-3 translate-y-[15%] flex-col items-center justify-center rounded-2xl bg-white shadow backdrop-blur-lg lg:h-60 lg:w-96 p-8`}>
                    <div className='w-full mt-4 flex items-center justify-between'>
                        <p className="text-slate-700 w-2/5"><FontAwesomeIcon width={17} icon={faUser}></FontAwesomeIcon> <span className='ml-1'>Your Identity:</span></p>
                        <p>Sahil Nayak</p>
                    </div>
                    <div className='w-full mt-4 flex items-center justify-between'>
                        <p className="text-slate-700 w-2/5"><FontAwesomeIcon width={17} icon={faUserTie}></FontAwesomeIcon> <span className='ml-1'>Handled By:</span></p>
                        <p className={`${queryStatusStyle.pending.text}`}>Dr. Hiteishi Diwanji</p>
                    </div>
                    <div className='w-full mt-4 flex items-center justify-between'>
                        <p className="text-slate-700 w-2/5"><FontAwesomeIcon width={17} icon={faSignal}></FontAwesomeIcon> <span className='ml-1'>Status:</span></p>
                        {/* <span class="rounded-full bg-indigo-200 px-3 pt-1 py-0.5 text-sm font-medium text-indigo-600">Prending Approval</span> */}
                        <span class={`rounded-full ${queryStatusStyle.pending.status} px-3 pt-1 py-0.5 text-sm font-medium`}>Pending</span>
                    </div>
                    <div className='w-full mt-4 flex items-center justify-between'>
                        <p className="text-slate-700 w-2/5"><FontAwesomeIcon width={17} icon={faReplyAll}></FontAwesomeIcon> <span className='ml-1'>Response:</span></p>
                        <p><span>Yes, Click Here</span> <FontAwesomeIcon width={12} icon={faUpRightFromSquare}></FontAwesomeIcon></p>
                    </div>
                    <div className='w-full mt-4 flex items-center justify-between'>
                        <p className="text-slate-700 w-2/5"><FontAwesomeIcon width={17} icon={faClock}></FontAwesomeIcon> <span className='ml-1'>Sent On:</span></p>
                        <p>14 Jan 2023 <span className={`${queryStatusStyle.pending.text} text-sm ml-2`}>(2 Days Ago)</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
