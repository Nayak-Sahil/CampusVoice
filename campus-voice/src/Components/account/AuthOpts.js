import React from 'react'
import '../../app/Account/style.css'
import authstyle from '../../app/styles/auth.module.css';
import Link from 'next/link';
import student from '../../../public/images/auth/student.png'
import querySolver from '../../../public/images/auth/QuerySolve.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

export default function AuthOpts() {
    return (
        <div className={authstyle.authBody}>
            <div className={authstyle.authGreet}>
                <h1>🙋‍♂️ <span>Welcome User!</span> Authenticate Here.</h1>
                <p className={authstyle.descrp}>Let's get started! <span className={authstyle.highlight}>Are you a student or a query resolver?</span></p>
            </div>
            <div className={authstyle.authOpt}>
                <AuthCard role="Student" image={student} descrp="Students can ask queries and track query activity."/>
                <AuthCard role="Query Solver" image={querySolver} descrp="Query Solvers can assist students by resolving queries."/>
            </div>
            <p className={authstyle.authWarn}>By Continuing, You agree to CampusVoice's <Link href='/' >Terms & Conditions</Link> & <Link href='/'>Privacy Policy</Link></p>
        </div>
    )
}

function AuthCard({role, descrp, image}){
    return(
        <div className={authstyle.authCard}>
            <h2>Login as <span className={authstyle.highlight}>{role}</span></h2>
            <p><FontAwesomeIcon icon={faLightbulb} width={12} color='var(--primary)'></FontAwesomeIcon> {descrp}</p>
            <Image src={image} alt={role} draggable="false" width={(image == querySolver) ? 160: 190}></Image>
            <button>Login <FontAwesomeIcon icon={faArrowRightFromBracket} width={15}></FontAwesomeIcon></button>
        </div>
    )
}
// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>