import React from 'react'
import car from '../assets/car.png'

const ConfrimRide = (props) => {
  return (
      <div>
          <h5 className='p-1  text-center w-[93%] absolute top-0 ' onClick={() => {
              props.setVehiclePanel(false)
          }}><i className="ri-arrow-drop-down-line"></i></h5>
          <h3 className='text-2xl  font-semibold mb-5 '>Confirm your Ride</h3>
          <div className='flex gap-5 justify-between items-center flex-col'>
              <img className='h-20' src={car} alt='car'/>
          </div>

          <div className='w-full'>
              <div className='flex items-center gap-5'>
                  <i className=" text-lg ri-map-pin-2-line"></i>
                  <div>
                      <h3 className='text-lg font-medium '>562/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                  </div>
              </div>
              <div>
                  <i className=" text-lg ri-map-pin-2-line"></i>
                  <div>
                      <h3 className='text-lg font-medium '>562/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                  </div>
              </div>
              <div>
                  <i className=" text-lg ri-map-pin-2-line"></i>
                  <div>
                      <h3 className='text-lg font-medium '>562/11-A</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                  </div>
              </div>
             
          </div>
          <button className='w-full bg-green-500 text-white font-semibold p-2 rounded-lg'>Confirm</button>
    </div>
  )
}

export default ConfrimRide