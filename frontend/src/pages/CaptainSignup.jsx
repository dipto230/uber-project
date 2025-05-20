import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import uberLogo from '../assets/Uber_logo_2018.png';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate =useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('car');

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Set context data
   const captainData={
      fullname: {
        firstname: firstName,
          lastname: lastName,
      },
      email,
      password,
      vehicle: {
      color:  vehicleColor,
      plate:  vehiclePlate,
      capacity:  vehicleCapacity,
      vehicleType:  vehicleType
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
    if (response.status === 201) {
      const data = response.data
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    // Clear inputs
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src={uberLogo} alt='uber-logo' />
        <form onSubmit={submitHandler}>
          {/* Name */}
          <h3 className='text-xl font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-white mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className='bg-white mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <h3 className='text-xl font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input
            required
            className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Vehicle Details Group */}
          <h3 className='text-xl font-medium mb-2'>Vehicle Details</h3>

          <div className='mb-4'>
            <input
              required
              className='bg-white mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type='text'
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className='bg-white mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type='text'
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
            <input
              required
              className='bg-white mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type='number'
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className='bg-white mb-4 rounded px-4 py-2 border w-full text-lg'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value='car'>Car</option>
              <option value='auto'>Auto</option>
              <option value='moto'>Moto</option>
            </select>
          </div>

          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'>
            Create Captain Account
          </button>

          <p className='text-center'>
            Already have an account?{' '}
            <Link to='/captain-login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the
          <span className='underline'> Google Privacy Policy</span> and{' '}
          <span className='underline'>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
