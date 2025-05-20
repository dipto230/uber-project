import React from 'react'
import uberLogo from '../assets/Uber_logo_2018.png';
import coverLogo from '../assets/photo-1624724126923-e2c021df1311.jpg';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
      <div>
      <div style={{ backgroundImage: `url(${coverLogo}) ` }}
        className=' bg-cover bg-center  h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-14 ml-8' src={uberLogo} alt='uber-logo'/>
              <div className='bg-white py-4 px-4'>
                  <h2 className='text-3xl pb-7 font-bold'>Get Started with uber</h2>
                  <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
              </div>
              
          </div>
    </div>
  )
}

export default Start