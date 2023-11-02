import React from 'react'
import Image from 'next/image'
import logo from '../../../public/CampusVoice.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faCircleQuestion, faGraduationCap, faListCheck, faPaperPlane, faTableColumns, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import '../../app/Dashboard/Student/style.css'
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
                <a href="index.html" className={`flex items-center ${(activeList == 1) ? 'active-nav-link' : 'opacity-75'} text-black py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faTableColumns} width={15}></FontAwesomeIcon>
                    Dashboard
                </a>
                <a href="blank.html" className={`flex items-center ${(activeList == 2) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faPaperPlane} width={15}></FontAwesomeIcon>
                    Ask Query
                </a>
                <a href="tables.html" className={`flex items-center ${(activeList == 3) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faListCheck} width={15}></FontAwesomeIcon>
                    Track
                </a>
                <a href="forms.html" className={`flex items-center ${(activeList == 4) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faUserGroup} width={15}></FontAwesomeIcon>
                    View Other Query
                </a>
                <a href="tabs.html" className={`flex items-center ${(activeList == 5) ? 'active-nav-link' : 'opacity-75'} text-black hover:opacity-100 py-4 pl-6 nav-item cursor-auto`}>
                    <FontAwesomeIcon icon={faCircleQuestion} width={15}></FontAwesomeIcon>
                    Help/Support
                </a>
            </nav>
            <a href="#" className="text-base font-semibold log-out absolute w-full upgrade-btn bottom-0 active-nav-link flex items-center justify-center py-4 nav-item cursor-auto">
                <FontAwesomeIcon icon={faArrowRightFromBracket} width={15}></FontAwesomeIcon>
                Log out
            </a>
        </aside>
    )
}
