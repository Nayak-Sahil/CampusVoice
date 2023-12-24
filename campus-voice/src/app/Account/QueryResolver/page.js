"use client"
import Image from 'next/image';
import logo from '../../../../public/CampusVoice_1.2.png';
import sideImage from '../../../../public/images/auth/QuerySolve.png';
import { Alert } from '@/Components/account/Alert';
import '../../../app/tailwind.css'
import { getServerSession } from 'next-auth';
import { getSession, signIn } from 'next-auth/react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/dist/server/api-utils';

const page = () => {
  async function handleSubmit(e){
    console.log(e.uid)
    console.log(await getSession())
    signIn('credentials',{uid:123456,password:"arjlafd",redirect:false})
  }
  return (
    <form action={handleSubmit}>
      <section className="h-screen bg-gradient-to-bl from-[#23b679] via-[#e0f2eb] to-[#b4e2ce] text-campus-dark">
        <div className="h-full flex items-center justify-center px-4">
          <div className="flex flex-col-reverse md:flex-row md:space-y-0 md:space-x-6 w-full max-w-screen-xl">

            <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
              <Image
                priority={true}
                src={sideImage}
                alt="Sample image for resolver"
                className="max-w-full h-auto"
              />
            </div>

            <div className="w-full mt-[200px] min-[400px]:mt-[400px] md:w-1/2 lg:w-2/5 bg-campus-light p-6 md:p-8 rounded-lg shadow-2xl">
              <div className="flex justify-center mb-6">
                <Image src={logo} width={200} alt='logo' />
              </div>

              <h1 className="text-xl md:text-2xl font-bold mb-6 text-center text-campus-dark">Welcome, Query Resolver</h1>

              <div className="mb-4">
                <label htmlFor="resolverId" className="block text-sm mb-2">Resolver ID:</label>
                <input name='resolverId' type="text" id="resolverId" className="w-full p-3 border border-campus-dark rounded-md focus:outline-none focus:border-campus-green" placeholder="Enter your Resolver ID" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm mb-2">Password:</label>
                <input type="password" name='password' id="password" className="w-full p-3 border border-campus-dark rounded-md focus:outline-none focus:border-campus-green" placeholder="Enter your password" />
              </div>
              <button className="w-full bg-campus-green text-campus-light p-3 rounded-md hover:bg-opacity-90 mt-5">
                {/* <svg aria-hidden="true" className="inline w-6 h-6 mr-2 text-gray-200 animate-spin fill-[#25ffa4]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span> */}
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
}

export default page





{/* <section className="h-screen bg-gradient-to-br from-campus-light to-campus-blue text-campus-dark">
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 bg-campus-light p-8 rounded-lg shadow-2xl">
            <div className="flex justify-center mb-6">
              
<div className="flex justify-center mb-6">
                    <Image src={logo} className='h-20 w-80'/>
            </div>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center text-campus-dark">Welcome Back</h1>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2">Email Address:</label>
              <input type="email" id="email" className="w-full p-3 border border-campus-dark rounded-md focus:outline-none focus:border-campus-blue" placeholder="Enter your email" />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm mb-2">Password:</label>
              <input type="password" id="password" className="w-full p-3 border border-campus-dark rounded-md focus:outline-none focus:border-campus-blue" placeholder="Enter your password" />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-campus-dark hover:text-campus-blue">Forgot password?</a>
            </div>

            <button className="w-full bg-campus-dark text-campus-light p-3 rounded-md hover:bg-opacity-90">
              Login
            </button>

          </div>

        </div>
      </div>
    </section> */}