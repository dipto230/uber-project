import React from 'react';
import car from '../assets/car.png';
import motorcycle from '../assets/motorcycle.jpeg';
import mahindra from '../assets/mahindra.png';

const VehiclePanel = ({ onSelectVehicle }) => {
  const vehicles = [
    { img: car, name: 'UberGo', wait: '2 mins', desc: 'Compact rides', price: '$193' },
    { img: motorcycle, name: 'Moto', wait: '3 mins', desc: 'Motorcycle rides', price: '$65' },
    { img: mahindra, name: 'UberAuto', wait: '2 mins', desc: 'Auto rides', price: '$100' },
  ];

  return (
    <div className='p-5'>
      <h3 className='text-2xl font-semibold mb-8 text-center'>Choose a Vehicle</h3>
      {vehicles.map((v, i) => (
        <div
          key={i}
          onClick={onSelectVehicle}
          className='flex items-center justify-between border-2 rounded-xl p-4 mb-4 hover:bg-gray-100 cursor-pointer'
        >
          <img className='h-10' src={v.img} alt={v.name} />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>{v.name}</h4>
            <h5 className='text-sm'>{v.wait} away</h5>
            <p className='text-xs text-gray-500'>{v.desc}</p>
          </div>
          <h2 className='text-2xl font-semibold'>{v.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default VehiclePanel;
