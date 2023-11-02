import Image from 'next/image';
import logo from '../../../../public/CampusVoice_1.2.png';
import '../../tailwind.css'
import sideImage from '../../../../public/images/auth/queryAsk.png';

const page = () => {
    async function handleForm(e){
        'use server'
        console.log(e)
    }

    return (
      <form action={handleForm}>
      <section className="h-screen bg-gradient-to-bl from-[#23b679] via-[#e0f2eb] to-[#b4e2ce] text-campus-dark">
          <div className="h-full flex items-center justify-center px-4">
              <div className="flex flex-col-reverse md:flex-row md:space-y-0 md:space-x-6 w-full max-w-screen-xl">

                  <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                      <Image src={sideImage}
                          alt="Sample image"
                          className="max-w-full h-auto"/>
                  </div>

                  <div className="w-full mt-[200px] min-[400px]:mt-[400px] md:w-1/2 lg:w-2/5 bg-campus-light p-6 md:p-8 rounded-lg shadow-2xl">
                      <div className="flex justify-center mb-6">
                          <Image src={logo} width={200}  />
                      </div>

                      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center text-campus-dark">Welcome, Informant</h1>

                      <div className="mb-4">
                          <label htmlFor="uid" className="block text-sm mb-2">UID: </label>
                          <input name='uid' type="number" id="number" className="w-full p-3 border border-campus-dark rounded-md focus:outline-none focus:border-campus-green" placeholder="Enter your Enrollment No. or UID" />
                      </div>

                      <div className="mb-4">
                          <label htmlFor="password" className="block text-sm mb-2">Password:</label>
                          <input type="password" name='password' id="password" className="w-full p-3 border border-campus-dark rounded-md focus:outline-none focus:border-campus-green" placeholder="Enter your password" />
                      </div>

                      <button className="w-full bg-campus-green text-campus-light p-3 rounded-md hover:bg-opacity-90 mt-5">
                          Login
                      </button>
                  </div>
              </div>
          </div>
      </section>
      </form>
    )
}

export default page;






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