import React from 'react'
import uberLogo from '../assets/Uber_logo_2018.png';
import uberTemplate from '../assets/template.jpg';

const Home = () => {
  const submitHandler = () => {
    
  }
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src={uberLogo} alt='uber-Logo' />
      <div className='h-screen w-screen'>

         <img className='h-full w-full object-cover' src={uberTemplate} alt='template'/>
      </div>
      <div className=' flex flex-col justify-end absolute top-0 w-full '>
        <div className='h-[30%] bg-white p-5'>
            <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
        }}>
          <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type='text' placeholder='Add a pick-up location' />
          <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type='text' placeholder='Enter your destination' />
          
        </form>
        </div>
        <div className='h-0 bg-red-500'>

        </div>
      </div>
    </div>
  )
}

export default Home