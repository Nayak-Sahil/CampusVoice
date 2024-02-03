import React from 'react'
import '../../style.css'
import Sidebar from '@/Components/dashboard/Sidebar'
import Navbar from '@/Components/dashboard/Navbar'
import MobileNav from '@/Components/dashboard/MobileNav'
import TrackQuery from '@/Components/student/TrackQuery'

export default function page({params}) {
  return (
    <div className='bg-gray-50 flex'>
      <Sidebar activeList="3" />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* Upper Header for Desktop */}
        <Navbar role="Student" />

        {/* Mobile Nav */}
        <MobileNav />

        <div className="w-full h-[100vh] overflow-x-hidden border-t flex flex-col justify-between">
          <TrackQuery queryId={params.QueryID} />
        </div>
      </div>
    </div>
  )
}
