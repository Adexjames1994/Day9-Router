import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const active = 'text-yellow-400 underline';

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">TheRealJegAde</Link>
      <div className="space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? active : undefined}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? active : undefined}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? active : undefined}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
