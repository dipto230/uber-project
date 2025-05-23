import React from 'react';

const LocationSearchPanel = ({ setPickup, setDestination, activeField, onSelectLocation }) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Daulatpur cafe, Sheryians Coding School, Bhopal",
    "20B, Near Rishi cafe, Sheryians Coding School, Bhopal",
    "21B, Near Kapoor's cafe, Sheryians Coding School, Bhopal"
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            if (activeField === 'pickup') setPickup(location);
            else if (activeField === 'destination') setDestination(location);
            onSelectLocation();
          }}
          className='flex gap-4 items-center my-5 cursor-pointer hover:bg-gray-100 p-2 rounded-md'
        >
          <div className='bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center'>
            <i className="ri-map-pin-fill"></i>
          </div>
          <p>{location}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
