import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#050a0e] border-t border-cyan-400/10 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <p className="text-gray-500 text-sm font-medium tracking-widest mb-4">
          © {currentYear} MARCOS FRANCO. Todos los derechos reservados.
        </p>
        
        {/* Decorative Star */}
        <div className="absolute right-8 bottom-8 text-cyan-400/20 star-rotate">
          <FaStar size={60} />
        </div>
      </div>
    </footer>
  );
}
