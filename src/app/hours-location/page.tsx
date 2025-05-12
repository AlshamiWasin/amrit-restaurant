import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HoursLocation() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Horaires & Localisation</h1>
            <p className="text-xl text-gray-600">Venez nous rendre visite</p>
          </div>

          {/* Hours Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Nos Horaires d&apos;Ouverture</h2>
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-right font-semibold">Lundi - Vendredi:</div>
                  <div>11h00 - 22h00</div>
                  <div className="text-right font-semibold">Samedi:</div>
                  <div>11h00 - 23h00</div>
                  <div className="text-right font-semibold">Dimanche:</div>
                  <div>11h00 - 21h00</div>
                </div>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Notre Adresse</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Amrit Restaurant</h3>
                    <p className="text-gray-600">123 Rue du Restaurant</p>
                    <p className="text-gray-600">75001 Paris, France</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-gray-600">Téléphone: +33 1 23 45 67 89</p>
                    <p className="text-gray-600">Email: info@amrit.com</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transport</h3>
                    <p className="text-gray-600">Métro: Station Restaurant (Ligne 1)</p>
                    <p className="text-gray-600">Bus: Lignes 20, 30, 40</p>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/restaurant-map.jpg"
                    alt="Restaurant Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Reservation CTA */}
          <section>
            <div className="bg-orange-50 rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Réservez Votre Table</h2>
              <p className="text-gray-600 mb-6">
                Pour une expérience gastronomique inoubliable, réservez votre table dès maintenant
              </p>
              <a
                href="/reservations"
                className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition duration-300"
              >
                Réserver une Table
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 