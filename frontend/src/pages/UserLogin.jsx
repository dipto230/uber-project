import React, { useState, useContext } from 'react';
import uberLogo from '../assets/Uber_logo_2018.png';
import { Link, useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      );

      if (response.status === 200) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Login failed. Please check your email and password.');
    } finally {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src={uberLogo} alt='uber-logo' />
        <form onSubmit={submitHandler}>
          <h3 className='text-xl font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            placeholder='password'
          />

          <button
            type='submit'
            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'
          >
            Login
          </button>

          <p className='text-center'>
            New here?{' '}
            <Link to='/signup' className='text-blue-600'>
              Create new Account
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to='/captain-login'
          className='bg-[#10b461] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 border w-full text-lg'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
