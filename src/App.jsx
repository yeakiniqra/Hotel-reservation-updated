
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import Footer from './Components/Footer';
import Signin from './Login/Signin';
import Signup from './Login/SignUp';
// import Reservation from './Reservation/Reservation';
// import Checkout from './Reservation/Checkout';
import Pricing from './Components/Pricing';
import Reserve from './Reservation/Reserve';
import Checkin from './Reservation/Checkin';
// Import ToastContainer and toast from react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Pricing" element={<Pricing />} />
        {/* <Route path="/Reservation" element={<Reservation />} /> */}
        <Route path="/Reserve" element={<Reserve />} />
        <Route path="/Checkin" element={<Checkin />} />

        {/* <Route path="/Checkout" element={<Checkout />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* Place ToastContainer here */}
      <ToastContainer />
      <Footer />
    </>
  </Router>
  );
}

export default App;
