import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[400px] mb-16 rounded-xl overflow-hidden">
            <Image
              src="/restaurant-story.jpg"
              alt="Restaurant Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center text-shadow">
                Our Story
              </h1>
            </div>
          </div>

          {/* History Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Amrit Restaurant has been serving authentic Indian cuisine to food
                  lovers in the heart of the city. Our journey began with a simple mission: to share
                  the rich flavors and traditions of Indian cooking with our community.
                </p>
                <p className="text-gray-600">
                  Over the years, we&apos;ve stayed true to our traditional recipes while innovating to
                  create unique dining experiences. Every dish we serve is a reflection of our
                  commitment to quality and authenticity.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/restaurant-vintage.jpg"
                  alt="Restaurant Heritage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Head Chef */}
              <div className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/chef-1.jpg"
                    alt="Head Chef"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chef Rajesh Kumar</h3>
                <p className="text-gray-600">Head Chef</p>
                <p className="text-sm text-gray-500 mt-2">
                  With over 20 years of experience in Indian cuisine
                </p>
              </div>

              {/* Sous Chef */}
              <div className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/chef-2.jpg"
                    alt="Sous Chef"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chef Priya Sharma</h3>
                <p className="text-gray-600">Sous Chef</p>
                <p className="text-sm text-gray-500 mt-2">
                  Specializing in traditional Indian desserts
                </p>
              </div>

              {/* Restaurant Manager */}
              <div className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/manager.jpg"
                    alt="Restaurant Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Amit Patel</h3>
                <p className="text-gray-600">Restaurant Manager</p>
                <p className="text-sm text-gray-500 mt-2">
                  Ensuring the best dining experience for our guests
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
                <p className="text-gray-600">
                  We source the finest ingredients to ensure authentic flavors in every dish
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Traditional Recipes</h3>
                <p className="text-gray-600">
                  Our recipes have been passed down through generations
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-gray-600">
                  We treat every guest like family
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 