import Image from "next/image";
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/hero-image.jpg"
              alt="Indian cuisine"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Amrit Restaurant</h1>
              <p className="text-xl md:text-2xl mb-8">Experience the authentic flavors of India</p>
              <Link
                href="/reservations"
                className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Special Item 1 */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/butter-chicken.jpg"
                    alt="Butter Chicken"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Butter Chicken</h3>
                  <p className="text-gray-600">Tender chicken in a rich, creamy tomato sauce.</p>
                </div>
              </div>

              {/* Special Item 2 */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/biryani.jpg"
                    alt="Biryani"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Biryani</h3>
                  <p className="text-gray-600">Aromatic rice dish with tender meat and spices.</p>
                </div>
              </div>

              {/* Special Item 3 */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/naan.jpg"
                    alt="Fresh Naan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Fresh Naan</h3>
                  <p className="text-gray-600">Traditional Indian bread baked in tandoor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                At Amrit, we bring you the authentic flavors of India, crafted with love and tradition.
                Our chefs use time-honored recipes and the finest ingredients to create an unforgettable
                dining experience.
              </p>
              <Link
                href="/about"
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                Learn More About Us →
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <Image
                src="/restaurant-interior.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
