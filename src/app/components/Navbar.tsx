'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              Amrit
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/hours-location" className="text-gray-700 hover:text-orange-600">Horaires & Localisation</Link>
            <Link href="/menu" className="text-gray-700 hover:text-orange-600">Menu</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-orange-600">Galerie</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600">Notre Histoire</Link>
            <Link href="/reservations" 
                  className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Réserver une Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/hours-location" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              Horaires & Localisation
            </Link>
            <Link href="/menu" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              Menu
            </Link>
            <Link href="/gallery" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              Galerie
            </Link>
            <Link href="/about" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              Notre Histoire
            </Link>
            <Link href="/reservations" 
                  className="block px-3 py-2 bg-orange-600 text-white rounded-md">
              Réserver une Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 