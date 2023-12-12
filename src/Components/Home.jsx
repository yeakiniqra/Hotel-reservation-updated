import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Team from './Team';
import Contact from './Contact';

const Home = () => {
   // Scroll to the top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="hero-section min-h-screen">
      <div className="relative bg-cover bg-center bg-no-repeat h-screen" style={{backgroundImage: "url('https://shorturl.at/ayIM9')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex items-center justify-center absolute inset-0">
          <div className="text-center text-white">
            <p className="text-5xl font-medium tracking-tighter">
              Seamless Stays, Effortless Reservations.
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-white">
              Welcome to EasyStayHub - Your Gateway to Effortless Hotel Reservations!
            </p>
            <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row">
            <Link to="/Reserve" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                Book Now
              </Link>
              <a href="#_" className="inline-flex items-center justify-center text-sm font-semibold text-white duration-200 focus:outline-none focus-visible:outline-gray-600">
                Learn more &nbsp; →
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Team />
      <Contact />
    </section>

  );
};

export default Home;
