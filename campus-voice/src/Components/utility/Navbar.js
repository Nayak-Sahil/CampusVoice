import React from 'react'
import '../../app/Account/style.css'
import utilstyle from '../utility/util.module.css';
import Image from 'next/image'
import navLogo from '../../../public/CampusVoice_1.2.png'
export default function Navbar() {
  return (
    <div className={utilstyle.navbarWrap}>
      <Image src={navLogo} alt='CampusVoice' width={150}></Image>
      <div className={utilstyle.navListWrap}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">FAQs</a>
        <a href="#">Help</a>
      </div>
    </div>
  )
}
