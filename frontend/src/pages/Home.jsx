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
import VehiclePanel from '../components/VehiclePanel';
import ConfrimRide from '../components/ConfrimRide';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const confirmRidePanelRef = useRef(null)

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel , setConfirmRidePanel] =useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    if (!pickup.trim() || !destination.trim()) return;
    console.log({ pickup, destination });
    setPickup('');
    setDestination('');
    setPanelOpen(false);
    setVehiclePanel(false);
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
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
    });
    return () => ctx.revert();
  }, [panelOpen]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!vehiclePanelRef.current) return;
      gsap.to(vehiclePanelRef.current, {
        y: vehiclePanel ? 0 : '100%',
        ease: 'power2.out',
        duration: 0.4,
      });
    });
    return () => ctx.revert();
  }, [vehiclePanel]);









   useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!confirmRidePanel.current) return;
      gsap.to(confirmRidePanel.current, {
        y: vehiclePanel ? 0 : '100%',
        ease: 'power2.out',
        duration: 0.4,
      });
    });
    return () => ctx.revert();
  }, [confirmRidePanel]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={uberLogo} alt='Uber Logo' />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={uberTemplate} alt='Map background template' />
      </div>

      <div className='flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-5 z-10 relative'>
          <button
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute opacity-0 top-6 right-6 text-xl cursor-pointer text-black'
            aria-label='Close location panel'
          >
            <i className="ri-arrow-down-wide-line"></i>
          </button>

          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-black'></div>

            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              onClick={() => {
                setActiveField('pickup');
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type='text'
              placeholder='Add a pick-up location'
            />

            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              onClick={() => {
                setActiveField('destination');
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type='text'
              placeholder='Enter your destination'
            />
          </form>
        </div>

        {/* Animated Location Search Panel */}
        <div
          ref={panelRef}
          className='fixed bottom-0 left-0 w-full h-0 bg-white z-20 overflow-y-auto p-0 transition-all duration-300 ease-in-out'
        >
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />

          {/* Vehicle Selection Panel */}
          <div ref={vehiclePanelRef} className='transition-transform'>
            <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
          </div>
          <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
                   <ConfrimRide/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
