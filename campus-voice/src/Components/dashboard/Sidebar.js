'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/CampusVoice.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleQuestion, faListCheck, faPaperPlane, faTableColumns, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { signOut } from 'next-auth/react'
import '../../app/Dashboard/Student/style.css'
import LogoutBtn from './LogoutBtn'
import Link from 'next/link'
export default function Sidebar({ activeList }) {
    return (
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
            <div className="p-6">
                <a href="index.html" className="text-black text-3xl font-semibold uppercase hover:text-gray-300"><Image src={logo} alt='CampusVoice'></Image></a>
                {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button> */}
            </div>
            <nav className="text-black text-base font-semibold pt-3">
                <Link href="/" className={`flex items-center ${(activeList == 1) ? 'active-nav-link' : 'opacity-75'} text-black py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faTableColumns} width={15}></FontAwesomeIcon>
                    <p className="text-base font-normal">Dashboard</p>
                </Link>
                <Link href="/" className={`flex items-center ${(activeList == 2) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faPaperPlane} width={15}></FontAwesomeIcon>
                    <p className="text-base font-normal">Ask Query</p> 
                </Link>
                <Link href="/" className={`flex items-center ${(activeList == 3) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faListCheck} width={15}></FontAwesomeIcon>
                    <p className="text-base font-normal">Track</p>
                </Link>
                <Link href="/" className={`flex items-center ${(activeList == 4) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faUserGroup} width={15}></FontAwesomeIcon>
                    <p className="text-base font-normal">View Other Query</p> 
                </Link>
                <Link href="/" className={`flex items-center ${(activeList == 5) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faCircleQuestion} width={15}></FontAwesomeIcon>
                    <p className="text-base font-normal">Help Support</p>
                </Link>
            </nav>
            <LogoutBtn />
        </aside>
    )
}
