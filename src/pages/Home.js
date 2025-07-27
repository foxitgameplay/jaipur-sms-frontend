import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Welcome to Jaipur SMS Hub</h2>
        <p className="mt-4 text-gray-600">Fastest Bulk SMS Service Provider in India</p>
      </div>
    </>
  );
};

export default Home;
