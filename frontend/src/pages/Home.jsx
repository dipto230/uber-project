  import React, { useRef, useState } from 'react'
  import uberLogo from '../assets/Uber_logo_2018.png'
  import uberTemplate from '../assets/template.jpg'
  import { useGSAP } from '@gsap/react'
  import gsap from 'gsap'
  import 'remixicon/fonts/remixicon.css'
  import LocationSearchPanel from '../components/LocationSearchPanel'

  const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)

    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) => {
      e.preventDefault()

      if (!pickup.trim() || !destination.trim()) return

      console.log({ pickup, destination })

      // Optional: Clear inputs
      setPickup('')
      setDestination('')

      setPanelOpen(false)
    }

    useGSAP(() => {
      if (!panelRef.current || !panelCloseRef.current) return

      gsap.to(panelRef.current, {
        height: panelOpen ? '70%' : '0%',
        padding:24,
        opacity: panelOpen ? 1 : 0,
        //duration: 0.4,
        //ease: 'power2.out',
      })

      gsap.to(panelCloseRef.current, {
        opacity: panelOpen ? 1 : 0,
        padding:0,
        //duration: 0.3,
        //ease: 'power2.out',
      })
    }, [panelOpen])

    return (
      <div className='h-screen relative'>
        <img className='w-16 absolute left-5 top-5' src={uberLogo} alt='uber-logo' />

        <div className='h-screen w-screen'>
          <img className='h-full w-full object-cover' src={uberTemplate} alt='template' />
        </div>

        <div className='flex flex-col justify-end absolute top-0 w-full'>
          {/* Input Panel */}
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
                  if (!panelOpen) setPanelOpen(true)
                }}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                type='text'
                placeholder='Add a pick-up location'
              />

              <input
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
                onClick={() => {
                  if (!panelOpen) setPanelOpen(true)
                }}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type='text'
                placeholder='Enter your destination'
              />
            </form>
          </div>

          {/* Animated Panel */}
          <div
            ref={panelRef}
            className='h-0 bg-white '
          >
            <LocationSearchPanel/>
          </div>
        </div>
        
      </div>
    )
  }

  export default Home
