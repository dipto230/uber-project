import React from 'react';
import car from '../assets/car.png';
import motorcycle from '../assets/motorcycle.jpeg';
import mahindra from '../assets/mahindra.png';

const VehiclePanel = ({ setVehiclePanel }) => {
  return (
    <div className='relative p-5'>
      <h5
        className='p-3 text-center absolute top-0 w-[93%] cursor-pointer'
        onClick={() => setVehiclePanel(false)}
      >
        <i className="text-3xl ri-arrow-down-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold my-12 text-center'>Choose a Vehicle</h3>

          <div onClick={() => {
              setVehiclePanel(true)
      }} className='flex border-2 hover:bg-gray-100 transition rounded-xl items-center justify-between w-full mb-5 p-4'>
        <img className='h-10' src={car} alt='car' />
        <div className='w-1/2'>
          <h4 className='font-medium text-sm'>
            UberGo <span><i className="ri-user-3-line"></i></span>
          </h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-medium text-xs text-gray-500'>Affordable, compact rides</p>
        </div>
        <h2 className='text-2xl font-semibold'>$193</h2>
      </div>

      <div  onClick={() => {
              setVehiclePanel(true)
      }}  className='flex border-2 hover:bg-gray-100 transition rounded-xl items-center justify-between w-full mb-5 p-4'>
        <img className='h-10' src={motorcycle} alt='motorcycle' />
        <div className='w-1/2'>
          <h4 className='font-medium text-sm'>
            Moto <span><i className="ri-user-3-line"></i>1</span>
          </h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-medium text-xs text-gray-500'>Affordable, motorcycle rides</p>
        </div>
        <h2 className='text-2xl font-semibold'>$65</h2>
      </div>

      <div  onClick={() => {
              setVehiclePanel(true)
      }}  className='flex border-2 hover:bg-gray-100 transition rounded-xl items-center justify-between w-full p-4'>
        <img className='h-10' src={mahindra} alt='mahindra' />
        <div className='w-1/2'>
          <h4 className='font-medium text-sm'>
            UberAuto <span><i className="ri-user-3-line"></i>6</span>
          </h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-medium text-xs text-gray-500'>Affordable, Auto rides</p>
        </div>
        <h2 className='text-2xl font-semibold'>$100</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
