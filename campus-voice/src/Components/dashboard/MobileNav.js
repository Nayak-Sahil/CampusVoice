"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/CampusVoice.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () =>{
        setIsOpen(e => !e);
    }

    return (
        <header x-data="{ isOpen: false }" className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <Link href="/Dashboard" className="text-black text-3xl font-semibold uppercase hover:text-gray-300"><Image src={logo} alt='CampusVoice' width={150}></Image></Link>
                <button type='button' className="text-black text-3xl focus:outline-none z-30">
                    <FontAwesomeIcon onClick={handleHamburger} color={isOpen ? "#23b578" : "#232323"} icon={isOpen ? faClose : faBars} / >
                </button>
            </div>

            <nav className="flex-col pt-4" style={isOpen ? {display : "flex"} : {display: "none"}}>
                <Link href="/" className="flex items-center active-nav-link text-black py-2 pl-4 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </Link>
                <a href="blank.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sticky-note mr-3"></i>
                    Blank Page
                </a>
                <a href="tables.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-table mr-3"></i>
                    Tables
                </a>
                <a href="forms.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-align-left mr-3"></i>
                    Forms
                </a>
                <a href="tabs.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-tablet-alt mr-3"></i>
                    Tabbed Content
                </a>
                <a href="calendar.html" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-calendar mr-3"></i>
                    Calendar
                </a>
                <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-cogs mr-3"></i>
                    Support
                </a>
                <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    My Account
                </a>
                <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Sign Out
                </a>
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                </button>
            </nav>
        </header>
    )
}
