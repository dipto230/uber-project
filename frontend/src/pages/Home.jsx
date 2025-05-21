import React, { useRef, useState } from 'react';
import uberLogo from '../assets/Uber_logo_2018.png';
import uberTemplate from '../assets/template.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import car from '../assets/car.png';
import motorcycle from '../assets/motorcycle.jpeg';
import mahindra from '../assets/mahindra.png';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!pickup.trim() || !destination.trim()) return;

    console.log({ pickup, destination });

    setPickup('');
    setDestination('');
    setPanelOpen(false);
  };

  useGSAP(() => {
    if (!panelRef.current || !panelCloseRef.current) return;

    gsap.to(panelRef.current, {
      height: panelOpen ? '70%' : '0%',
      padding: panelOpen ? 24 : 0,
      opacity: panelOpen ? 1 : 0,
      ease: 'power2.out',
      duration: 0.4,
    });

    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
      ease: 'power2.out',
      duration: 0.3,
    });
  }, [panelOpen]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={uberLogo} alt='uber-logo' />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={uberTemplate} alt='template' />
      </div>

      {/* Input Panel */}
      <div className='flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-5 z-10 relative'>
          <button
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute opacity-0 top-6 right-6 text-xl cursor-pointer text-black'
          >
            <i className="ri-arrow-down-wide-line"></i>
          </button>

          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-black'></div>

            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              onClick={() => {
                if (!panelOpen) setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type='text'
              placeholder='Add a pick-up location'
            />

            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              onClick={() => {
                if (!panelOpen) setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type='text'
              placeholder='Enter your destination'
            />
          </form>
        </div>

        {/* Animated Panel (Slide from bottom) */}
        <div
          ref={panelRef}
          className='fixed bottom-0 left-0 w-full h-0 bg-white z-20 overflow-y-auto p-0 transition-all duration-300 ease-in-out'
        >
          <LocationSearchPanel />

          {/* Vehicle Options (Inside Panel) */}
          <h3 className='text-2xl font-semibold my-5'>Choose a Vehicle</h3>

          <div className='flex border-2 active:bg-gray-100 border-black rounded-xl items-center justify-between w-full mb-5 p-4'>
            <img className='h-10' src={car} alt='car' />
            <div className='w-1/2'>
              <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-line"></i></span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-medium text-xs text-gray-500'>Affordable, compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>$193</h2>
          </div>

          <div className='flex border-2 active:border-black rounded-xl items-center justify-between w-full mb-5 p-4'>
            <img className='h-10' src={motorcycle} alt='motorcycle' />
            <div className='w-1/2'>
              <h4 className='font-medium text-sm'>Moto <span><i className="ri-user-3-line"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-medium text-xs text-gray-500'>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>$65</h2>
          </div>

          <div className='flex border-2 active:border-black rounded-xl items-center justify-between w-full p-4'>
            <img className='h-10' src={mahindra} alt='mahindra' />
            <div className='w-1/2'>
              <h4 className='font-medium text-sm'>UberAuto <span><i className="ri-user-3-line"></i>6</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-medium text-xs text-gray-500'>Affordable, Auto rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>$100</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
