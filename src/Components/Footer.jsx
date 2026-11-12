import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14 text-sm'>
         {/* -------------------- left section ------------------ */}
            <div>
               <img className='mb-5 w-40' src={assets.nisacareLogo} alt=''/>
               <p className='w-full md:full text-gray-600 leading-6 '>NisaCare is a women-focused healthcare platform dedicated to improving access to quality medical care by connecting women with qualified female doctors. We provide a secure and convenient platform for discovering healthcare professionals, scheduling appointments, and managing healthcare needs.

                  Our mission is to empower women to make informed healthcare decisions through accessible, personalized, and compassionate medical services. We prioritize privacy, trust, comfort, and convenience, ensuring every woman receives the support and care she deserves.

                  <br/>NisaCare — Your Health, Your Comfort, Your Choice.
</p>
            </div>
 


            {/* -------------------- center section ------------------ */}
            <div>
               <p className='text-xl font-medium md-5'>COMPANY</p>
               <ul className='flex flex-col gap-2 mt-7 text-gray-600'>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>Privacy policy</li>
               </ul>
            </div>




            {/* -------------------- right section ------------------ */}
            <div>
               <p className='text-xl font-medium md-5'>GET IN TOUCH</p>
               <ul className='flex flex-col gap-2 mt-7 text-gray-600'>
                  <li>+2348022680487</li>
                  <li>+234</li>
                  <li>aminuharuna0104@gmail.com</li>
               </ul>
            </div>

      </div>


      {/* -------------------  copy right   --------------------- */}


      <div>
         <hr/>
         <p className='py-5 text-sm text-center'>Copyright © 2026 NisaCare - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

