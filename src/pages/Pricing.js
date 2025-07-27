import React from 'react';
import Navbar from '../components/Navbar';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Pricing Plans</h2>
        <p className="mt-4 text-gray-600">Affordable pricing for bulk messaging.</p>
      </div>
    </>
  );
};

export default Pricing;
