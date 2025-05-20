import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uberLogo from '../assets/Uber_logo_2018.png';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(userDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email,
        password,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      }

      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src={uberLogo} alt='uber-logo' />
        <form onSubmit={submitHandler}>
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

          <h3 className='text-xl font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input
            required
            className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'
          >
            Sign Up
          </button>

          <p className='text-center'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-600'>
              Login
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the{' '}
          <span className='underline'>Google Privacy Policy</span> and{' '}
          <span className='underline'>Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
