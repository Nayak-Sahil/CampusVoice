import React from 'react'
import Sidebar from '@/Components/dashboard/Sidebar'
import Navbar from '@/Components/dashboard/Navbar'
import MobileNav from '@/Components/dashboard/MobileNav'
import '../style.css'
import QueryPost from '@/Components/student/QueryPost'
export default function page() {
  return (
    <div className='bg-gray-50 flex'>
            <Sidebar activeList="4" />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                {/* Upper Header for Desktop */}
                <Navbar role="Student" />
                {/* Mobile Nav */}
                <MobileNav />
                <div className="w-full h-full overflow-x-hidden overflow-y-auto border-t flex flex-col">
                    <QueryPost />
                    <QueryPost />
                </div>
            </div>
        </div>
  )
}
