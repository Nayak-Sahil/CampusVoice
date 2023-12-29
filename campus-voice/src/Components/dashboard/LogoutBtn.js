// import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { signOut } from 'next-auth/react'
// import { redirect } from 'next/navigation'
// import { Router, useRouter } from 'next/router'


// const LogoutBtn = () => {
//     const handleSignOut = async(e) =>{
//         e.preventDefault();
//         // await signOut();
//         useRouter
//     }
//     return (
//         <button type='button' className="text-base font-semibold log-out absolute w-full upgrade-btn bottom-0 active-nav-link flex items-center justify-center py-4 nav-item cursor-auto"
//             onClick={handleSignOut}
//         >
//             <FontAwesomeIcon icon={faArrowRightFromBracket} width={15}></FontAwesomeIcon>
//             Log out
//         </button>
//     )
// }

// export default LogoutBtn

import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogoutBtn = () => {
  const router = useRouter();
  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut({callbackUrl:'http://localhost:3000/Account'});
  };

  return (
    <button
      type='button'
      className="text-base font-semibold log-out absolute w-full upgrade-btn bottom-0 active-nav-link flex items-center justify-center py-4 nav-item cursor-auto"
      onClick={handleSignOut}
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} width={15}></FontAwesomeIcon>
            Log out
    </button>
  );
};

export default LogoutBtn;
