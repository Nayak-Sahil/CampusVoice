import Image from 'next/image'
import React from 'react'
import logo from '../../../public/CampusVoice.png'

export default function MobileNav() {
    return (
        <header x-data="{ isOpen: false }" className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <a href="index.html" className="text-black text-3xl font-semibold uppercase hover:text-gray-300"><Image src={logo} alt='CampusVoice' width={150}></Image></a>
                <button className="text-black text-3xl focus:outline-none">
                    <i x-show="!isOpen" className="fas fa-bars"></i>
                    <i x-show="isOpen" className="fas fa-times"></i>
                </button>
            </div>

            <nav className="hidden flex flex-col pt-4">
                <a href="index.html" className="flex items-center active-nav-link text-black py-2 pl-4 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </a>
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
