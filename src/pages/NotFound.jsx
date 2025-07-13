import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl text-gray-700">Oops! Page not found.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
