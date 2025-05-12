import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InstagramFeed from '../components/InstagramFeed';

export default function Gallery() {
  const images = [
    {
      src: '/gallery/interior-1.jpg',
      alt: 'Intérieur du Restaurant',
      title: 'Notre Salle Principale'
    },
    {
      src: '/gallery/food-1.jpg',
      alt: 'Plat Signature',
      title: 'Cuisine Raffinée'
    },
    {
      src: '/gallery/chef-1.jpg',
      alt: 'Notre Chef',
      title: 'Le Chef en Action'
    },
    {
      src: '/gallery/interior-2.jpg',
      alt: 'Espace Privé',
      title: 'Salon Privé'
    },
    {
      src: '/gallery/food-2.jpg',
      alt: 'Desserts',
      title: 'Nos Desserts'
    },
    {
      src: '/gallery/bar-1.jpg',
      alt: 'Le Bar',
      title: 'Notre Bar'
    },
    {
      src: '/gallery/event-1.jpg',
      alt: 'Événements',
      title: 'Événements Spéciaux'
    },
    {
      src: '/gallery/food-3.jpg',
      alt: 'Entrées',
      title: 'Nos Entrées'
    },
    {
      src: '/gallery/terrace-1.jpg',
      alt: 'La Terrasse',
      title: 'Notre Terrasse'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galerie</h1>
            <p className="text-xl text-gray-600">
              Découvrez l&apos;ambiance unique de notre restaurant
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="group relative">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center px-4">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Feed Section */}
          <div className="mt-20">
            <InstagramFeed />
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Envie de Nous Rejoindre?</h2>
            <p className="text-gray-600 mb-8">
              Réservez une table et venez découvrir notre cuisine exceptionnelle
            </p>
            <a
              href="/reservations"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition duration-300"
            >
              Réserver une Table
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 