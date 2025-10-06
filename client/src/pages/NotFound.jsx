import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-white">404 - Not Found</h1>
      <p className="text-lg text-gray-400">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Go Home</Link>
    </div>
  );
};

export default NotFound;
