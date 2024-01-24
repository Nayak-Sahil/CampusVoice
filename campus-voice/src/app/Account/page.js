import Navbar from '@/Components/utility/Navbar'
import React from 'react'
import '../globals.css'
import AuthOpts from '@/Components/account/AuthOpts'
export default function page() {
  return (
    <div>
      <Navbar />
      <AuthOpts />
    </div>
  )
}
