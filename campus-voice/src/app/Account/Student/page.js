import Image from 'next/image';
import logo from '../../../../public/CampusVoice_1.2.png';
import '../../tailwind.css'
import sideImage from '../../../../public/images/auth/queryAsk.png';
import InputForm from '@/Components/account/InputForm';

const page = async () => {
  return (
    <section className="h-screen bg-gradient-to-bl from-[#23b679] via-[#e0f2eb] to-[#b4e2ce] text-campus-dark">
      <div className="h-full flex items-center justify-center px-4">
        <div className="flex flex-col-reverse md:flex-row md:space-y-0 md:space-x-6 w-full max-w-screen-xl">

          <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
            <Image src={sideImage}
              alt="Sample image"
              className="max-w-full h-auto" />
          </div>

          <div className="w-full mt-[200px] min-[400px]:mt-[400px] md:w-1/2 lg:w-2/5 bg-campus-light p-6 md:p-8 rounded-lg shadow-2xl">
            <div className="flex justify-center mb-6">
              <Image src={logo} width={200} alt='logo' />
            </div>

            <h1 className="text-xl md:text-2xl font-bold mb-6 text-center text-campus-dark">Welcome, Informant</h1>

            <InputForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page;
