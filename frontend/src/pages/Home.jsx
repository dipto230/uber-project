import React, { useRef, useState } from 'react';
import uberLogo from '../assets/Uber_logo_2018.png';
import uberTemplate from '../assets/template.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfrimRide';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!pickup.trim() || !destination.trim()) return;
    setPanelOpen(false);
    setVehiclePanel(true);
  };

  useGSAP(() => {
    if (!panelRef.current || !panelCloseRef.current) return;
    gsap.to(panelRef.current, {
      height: panelOpen ? '70%' : '0%',
      padding: panelOpen ? 24 : 0,
      opacity: panelOpen ? 1 : 0,
      duration: 0.4,
    });
    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
      duration: 0.3,
    });
  }, [panelOpen]);

  useGSAP(() => {
    if (!vehiclePanelRef.current) return;
    gsap.to(vehiclePanelRef.current, {
      y: vehiclePanel ? 0 : '100%',
      duration: 0.4,
    });
  }, [vehiclePanel]);

  useGSAP(() => {
    if (!confirmRidePanelRef.current) return;
    gsap.to(confirmRidePanelRef.current, {
      y: confirmRidePanel ? 0 : '100%',
      duration: 0.4,
    });
  }, [confirmRidePanel]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={uberLogo} alt='Uber Logo' />
      <img className='h-full w-full object-cover' src={uberTemplate} alt='Map' />

      <div className='flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-5 z-10 relative'>
          <button
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute top-6 right-6 text-xl'
          >
            <i className="ri-arrow-down-wide-line"></i>
          </button>

          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <input
              className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-5'
              placeholder='Add a pick-up location'
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => {
                setActiveField('pickup');
                setPanelOpen(true);
              }}
            />
            <input
              className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-5'
              placeholder='Enter your destination'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => {
                setActiveField('destination');
                setPanelOpen(true);
              }}
            />
          </form>
        </div>

        <div ref={panelRef} className='fixed bottom-0 left-0 w-full h-0 bg-white z-20 overflow-y-auto p-0'>
          <LocationSearchPanel
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
            onSelectLocation={() => setVehiclePanel(true)}
          />

          <div ref={vehiclePanelRef} className='transition-transform'>
            <VehiclePanel
              onSelectVehicle={() => {
                setVehiclePanel(false);
                setConfirmRidePanel(true);
              }}
            />
          </div>

          <div
            ref={confirmRidePanelRef}
            className='fixed w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14 z-30'
          >
            <ConfirmRide onBack={() => setConfirmRidePanel(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
