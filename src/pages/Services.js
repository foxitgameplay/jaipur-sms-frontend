import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Our Services</h2>
        <p className="mt-4 text-gray-600">Transactional, Promotional, and OTP SMS.</p>
      </div>
    </>
  );
};

export default Services;
