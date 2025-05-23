import React from 'react';
import car from '../assets/car.png';

const ConfirmRide = ({ onBack }) => {
  return (
    <div>
      <h5 className='text-center cursor-pointer' onClick={onBack}>
        <i className="ri-arrow-drop-down-line text-2xl"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5 text-center'>Confirm your Ride</h3>

      <div className='flex justify-center mb-5'>
        <img className='h-20' src={car} alt='car' />
      </div>

      <div className='space-y-4 mb-5'>
        <div className='flex items-center gap-4'>
          <i className="ri-map-pin-2-line text-xl"></i>
          <div>
            <h3 className='font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <i className="ri-map-pin-2-line text-xl"></i>
          <div>
            <h3 className='font-medium'>Destination</h3>
            <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <i className="ri-currency-line text-xl"></i>
          <div>
            <h3 className='font-medium'>$193</h3>
            <p className='text-sm text-gray-600'>Estimated Fare</p>
          </div>
        </div>
      </div>

      <button className='w-full bg-green-500 text-white font-semibold p-3 rounded-lg'>Confirm</button>
    </div>
  );
};

export default ConfirmRide;
