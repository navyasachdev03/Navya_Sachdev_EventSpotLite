import React from 'react';

const Navbar = ({ setSearchTerm }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-purple-600 text-white">
      <h1 className="text-2xl font-bold">EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events..."
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-purple-500 text-black caret-black"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;