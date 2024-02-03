"use client"
import Image from 'next/image'
import React, { useState, useContext } from 'react'
import logo from '../../../public/CampusVoice.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import NavListContext from '@/Contexts/NavListContext'

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () =>{
        setIsOpen(e => !e);
    }

    const navListCntxt = useContext(NavListContext);
    const navList = navListCntxt.getNavListInfo;

    return (
        <header x-data="{ isOpen: false }" className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <Link href="/Dashboard" className="text-black text-3xl font-semibold uppercase hover:text-gray-300"><Image src={logo} alt='CampusVoice' width={150}></Image></Link>
                <button type='button' className="text-black text-3xl focus:outline-none z-30">
                    <FontAwesomeIcon onClick={handleHamburger} color={isOpen ? "#23b578" : "#232323"} icon={isOpen ? faClose : faBars} / >
                </button>
            </div>

            <nav className="flex-col pt-4" style={isOpen ? {display : "flex"} : {display: "none"}}>
                {
                    navList.map((list, index)=>{
                        return (
                            <Link href={list.link} key={index} className={`flex items-centertext-black py-3 pl-4 nav-item cursor-auto`}>
                                <FontAwesomeIcon className='text-gray-600 mt-1' width={25} icon={list.icon} />
                                <p className="text-base tracking-wide">{list.listName}</p>
                            </Link>
                        )
                    })
                }
                {/* <Link href="/" className="flex items-center active-nav-link text-black py-2 pl-4 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </Link>
                <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-cogs mr-3"></i>
                    Ask Query
                </a>
                <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    Track
                </a>
                <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    View Other Query
                </a>
                <a href="#" className="flex items-center text-black opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Help Support
                </a> */}
            </nav>
        </header>
    )
}
