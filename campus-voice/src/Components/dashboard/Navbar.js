"use client"
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import QueryContext from '@/Contexts/QueryContext';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
export default function Navbar({role}) {
    const session = useSession();
    // useState(()=>{
    //     console.log(session)
    // },[session])
    const [isOpenedAccOption, setAccOption] = useState(false);
    function openAccountOption() {
        setAccOption((prev) => !prev);
    }
    return (
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2 flex align-middle">
                <FontAwesomeIcon className='mt-1' width={20} icon={role == "Student" ? faGraduationCap : faUserTie}></FontAwesomeIcon>
                <span className='ml-3 text-lg'>{role}</span>
            </div>
            <div className="relative w-1/2 flex justify-end">
                <button onClick={openAccountOption} className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 
                focus:outline-none">
                    {
                        session ? console.log(session) : ""
                    }
                    <Image
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${session?.data?.user?.image}`}
                        alt="Galaxy"
                        width={800}
                        height={800}
                        unoptimized={true}
                    />
                </button>
                <div className={`${isOpenedAccOption ? "" : "hidden"} absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16`}>
                    <Link href="#" className="block px-4 py-2 account-link hover:text-black">Account</Link>
                    <Link href="#" className="block px-4 py-2 account-link hover:text-black">Support</Link>
                    <Link href="#" className="block px-4 py-2 account-link 
                    hover:text-black">Sign Out</Link>
                </div>
            </div>
        </header >
    )
}
