import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Amrit Restaurant</h3>
            <p className="text-gray-300">Experience authentic Indian cuisine in a warm and welcoming atmosphere.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-gray-300 hover:text-white">Menu</Link></li>
              <li><Link href="/reservations" className="text-gray-300 hover:text-white">Reservations</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Restaurant Street</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@amrit.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 11:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amrit Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 