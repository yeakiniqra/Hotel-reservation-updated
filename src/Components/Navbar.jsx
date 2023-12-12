import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signin from '../Login/Signin';
import Signup from '../Login/SignUp';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-white border-b 2xl:max-w-full ">
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl" href="/">
            <span className="lg:text-lg uppecase focus:ring-0"> EasyStayHub </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                className={open ? 'hidden' : 'inline-flex'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={open ? 'inline-flex' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className={`flex-col items-center flex-grow ${open ? 'flex' : 'hidden'} md:pb-0 md:flex md:justify-end md:flex-row`}>
       
        <Link to="/Reserve" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 flex justify-center">
          Reservation
        </Link>
        <Link to="/pricing" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 flex justify-center">
          Pricing
        </Link>
       
     
        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          <Link to="/Signin">
            <button className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
              Sign in
            </button>
          </Link>
          <Link to="/Signup">
            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
              Sign up
            </button>
          </Link>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
