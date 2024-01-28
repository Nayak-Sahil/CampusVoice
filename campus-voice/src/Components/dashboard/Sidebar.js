'use client'
import React, {useContext} from 'react'
import Image from 'next/image'
import logo from '../../../public/CampusVoice.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  fas, faBullhorn, faListCheck, faTableColumns, faUserGroup, faAt } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faPaperPlane, faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import '../../app/Dashboard/Student/style.css'
import LogoutBtn from './LogoutBtn'
import Link from 'next/link'
import NavListContext from '@/Contexts/NavListContext'

library.add(fas, faCircleCheck, faCircleQuestion, faListCheck, faPaperPlane, faTableColumns, faUserGroup, faAt);

export default function Sidebar({ activeList }) {
    const navListCntxt = useContext(NavListContext);
    const navList = navListCntxt.getNavListInfo;
    return (
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
            <div className="p-6">
                <a href="index.html" className="text-black text-3xl font-semibold uppercase hover:text-gray-300"><Image src={logo} alt='CampusVoice'></Image></a>
                {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button> */}
            </div>
            <nav className="text-black text-base font-semibold pt-3">
                {
                    navList.map((list, index)=>{
                        return (
                            <Link href={list.link} key={index} className={`flex items-center ${(activeList == index + 1) ? 'active-nav-link' : 'opacity-75'} text-black py-4 pl-6 nav-item cursor-auto`}>
                                <FontAwesomeIcon width={25} icon={list.icon} />
                                <p className="text-base font-normal">{list.listName}</p>
                            </Link>
                        )
                    })
                }
            </nav>
            <LogoutBtn />
        </aside>
    )
}
