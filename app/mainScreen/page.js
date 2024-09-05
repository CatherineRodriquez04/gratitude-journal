"use client";

import { useState, useEffect } from 'react';
import InputBox from './inputBox';
import EntryViewer from './cardDisplay';
import TestFirebase from './testFirebase';
import { signOut } from 'firebase/auth'; 
import { auth } from '../firebaseConfig';
import { useRouter } from 'next/navigation';

const quotes = [
  {
    quote: 'The secret to change is to focus all your energy not on fighting the old, but by building the new.',
    author: 'Socrates',
  },
  {
    quote: 'Life is 10% what happens to us and 90% how we react to it.',
    author: 'Charles R. Swindoll',
  },
  {
    quote: 'Your time is limited, don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Your time is limited, don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Everyone thinks of changing the world, but no one thinks of changing himself.',
    author: 'Leo Tolstoy',
  },
  {
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
  },
  {
    quote: 'Don’t be afraid to give up the good to go for the great.',
    author: 'John D. Rockefeller',
  },
  {
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  }
];

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  const handleLogoutClick = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log('User signed out');
      router.push('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start">
      <button
      className='bg-[#8E62DB] font-primary text-[20px] text-white px-2 py-0.5 rounded hover:scale-105 absolute top-1 left-1'
      onClick={handleLogoutClick}
      >
        Sign Out
      </button>
      {/* Cloud-like bubble - purple */}
      <div className="absolute top-9 left-[60%] transform -translate-x-1/2 w-[65%] max-w-[600px] xl:h-[260px] h-[250px] bg-[#f4e8fc] bg-opacity-80 rounded-[50%]"></div>

      {/* Cloud-like bubble - blue */}
      <div className="absolute top-0 left-[55%] transform -translate-x-1/2 w-[65%] max-w-[600px] xl:h-[260px] h-[250px] bg-[#9dc9ec] bg-opacity-80 rounded-[45%]"></div>

      {/* Cloud-like bubble - green */}
      <div className="absolute top-3 left-[37%] transform -translate-x-1/2 w-[70%] max-w-[600px] xl:h-[275px] h-[260px] bg-[#d7f9eb] bg-opacity-80 rounded-[45%]"></div>

      {/* Cloud-like bubble - pink */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 xl:w-[90%] w-[110%] max-w-[800px] xl:h-[250px] h-[235px] bg-[#f6daea] bg-opacity-95 rounded-[45%]"></div>
      
      {/* Text Content */}
      <div className="relative text-center xl:top-6 top-9">
        <h1 className="font-primary xl:text-[60px] text-[55px] text-[#8E62DB] -mb-4">Daily Gratitude Journal</h1>
        <div className="mx-auto xl:max-w-[80%] max-w-[95%] leading-relaxed">
          <p className="font-primary text-pink-400 xl:text-[30px] text-[25px] -mb-2 -mt-2 leading-snug">{currentQuote.quote}</p>
          <p className="font-primary text-pink-400 xl:text-[30px] text-[25px] mt-2 leading-snug">- {currentQuote.author}</p>
        </div>
      </div>
      <div className='absolute w-full flex justify-center xl:mt-500px] mt-[500px]'>
        <EntryViewer></EntryViewer>
      </div>
      <div className='absolute xl:top-[275px] top-[285px] w-full flex justify-center'>
        <InputBox></InputBox>
      </div>
      {/* <TestFirebase /> */}
    </div>  
  );
}

