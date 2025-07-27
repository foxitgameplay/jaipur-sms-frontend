import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
        <p className="mt-4 text-gray-600">Reach out via phone, email, or our contact form.</p>
      </div>
    </>
  );
};

export default Contact;
