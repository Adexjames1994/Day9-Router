import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-100 text-center py-6 border-t">
    <div className="flex justify-center gap-6 mb-2 text-xl text-blue-700">
      <a href="https://www.linkedin.com/in/jegede-adeola-32211b1a2/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/adexjames1994" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:adeolajegede1994@gmail.com">
        <FaEnvelope />
      </a>
    </div>
    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TheRealJegAde. All rights reserved.</p>
  </footer>
);

export default Footer;
