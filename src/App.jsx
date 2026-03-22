import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Booking from './components/Booking';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />  
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookings" component={Booking} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
