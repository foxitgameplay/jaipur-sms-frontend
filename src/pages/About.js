import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700">About Us</h2>
        <p className="mt-4 text-gray-600">We are Jaipur’s most trusted SMS Hub.</p>
      </div>
    </>
  );
};

export default About;
