"use client";

import { useState, useEffect } from 'react';
import RegisterForm from './register'; 
import LoginForm from './login';
import TestFirebase from './mainScreen/testFirebase';


export default function Home() {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);

    const handleRegisterClick = () => {
        setIsRegisterFormVisible(!isRegisterFormVisible); // Toggle visibility
        if (isLoginFormVisible) setIsLoginFormVisible(false); // Hide login form if visible
    };

    const handleLoginClick = () => {
        setIsLoginFormVisible(!isLoginFormVisible); // Toggle visibility
        if (isRegisterFormVisible) setIsRegisterFormVisible(false); // Hide register form if visible
    };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start">
      {/* Cloud-like bubble - purple */}
      <div className="absolute top-9 left-[60%] transform -translate-x-1/2 w-[65%] max-w-[600px] xl:h-[260px] h-[250px] bg-[#f4e8fc] bg-opacity-80 rounded-[50%]"></div>

      {/* Cloud-like bubble - blue */}
      <div className="absolute top-0 left-[55%] transform -translate-x-1/2 w-[65%] max-w-[600px] xl:h-[260px] h-[250px] bg-[#9dc9ec] bg-opacity-80 rounded-[45%]"></div>

      {/* Cloud-like bubble - green */}
      <div className="absolute top-3 left-[37%] transform -translate-x-1/2 w-[70%] max-w-[600px] xl:h-[275px] h-[260px] bg-[#d7f9eb] bg-opacity-80 rounded-[45%]"></div>

      {/* Cloud-like bubble - pink */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 xl:w-[90%] w-[110%] max-w-[800px] xl:h-[250px] h-[235px] bg-[#f6daea] bg-opacity-95 rounded-[45%]"></div>
      
      {/* Text Content */}
      <div className="relative text-center xl:top-6 top-7">
        <h1 className="font-primary xl:text-[60px] text-[55px] text-[#8E62DB] xl:-mb-4 -mb-6">Daily Gratitude Journal</h1>
        <div className="mx-auto xl:max-w-[40%] max-w-[95%] leading-relaxed">
          <p className="font-primary text-pink-400 xl:text-[30px] text-[25px] -mt-2 leading-snug">Welcome! Every day brings something to be thankful for, no matter how small. Take a moment to reflect on the good in your life and let positivity guide your journey!</p>
        </div>
      </div>
      <div className='relative w-full flex text-center justify-center xl:mt-[100px] mt-[100px] mx-auto xl:max-w-[40%] max-w-[95%] leading-relaxed'>
        <p className="font-primary text-pink-400 xl:text-[35px] text-[30px] leading-snug">Please log in to continue your journey or register to start your journey of positivity✨</p>
      </div>
      <div className='text-center p-5 xl:mb-2 mb-2 space-x-10'>
        <button
          className='bg-[#8E62DB] font-primary text-[30px] text-white px-2 py-0.5 rounded hover:scale-105'
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className='bg-[#8E62DB] font-primary text-[30px] text-white px-2 py-0.5 rounded hover:scale-105'
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
      {isLoginFormVisible && (
        <div className="w-full flex justify-center mt-4">
          <LoginForm />
        </div>
      )}
      {isRegisterFormVisible && (
        <div className="w-full flex justify-center mt-4">
          <RegisterForm />
        </div>
      )}
    </div>  
  );
}

