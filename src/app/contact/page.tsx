'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="mr-3">📍</span>
                    123 Restaurant Street<br />
                    City, State 12345
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-3">📞</span>
                    (555) 123-4567
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-3">✉️</span>
                    info@amrit.com
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Hours of Operation</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday: 11:00 AM - 11:00 PM</p>
                  <p>Sunday: 11:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Location</h2>
            <div className="h-[400px] bg-gray-200 rounded-lg">
              {/* Add your map component here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map will be integrated here
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 