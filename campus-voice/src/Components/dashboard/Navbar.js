import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    return (
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2 flex">
                <FontAwesomeIcon width={20} icon={faGraduationCap}></FontAwesomeIcon>
                <span className='ml-3 text-base font-semibold'>Student Dashboard</span>
            </div>
            <div x-data="{ isOpen: false }" className="relative w-1/2 flex justify-end">
                <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                </button>
                <div x-show="isOpen" className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                    <a href="#" className="block px-4 py-2 account-link hover:text-black">Account</a>
                    <a href="#" className="block px-4 py-2 account-link hover:text-black">Support</a>
                    <a href="#" className="block px-4 py-2 account-link hover:text-black">Sign Out</a>
                </div>
            </div>
        </header>
    )
}
