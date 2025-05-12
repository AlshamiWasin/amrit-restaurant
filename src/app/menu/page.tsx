import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const menuItems = {
  appetizers: [
    {
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: '6.99',
      image: '/samosa.jpg'
    },
    {
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese marinated in spiced yogurt',
      price: '8.99',
      image: '/paneer-tikka.jpg'
    },
    {
      name: 'Onion Bhaji',
      description: 'Crispy onion fritters with Indian spices',
      price: '5.99',
      image: '/onion-bhaji.jpg'
    }
  ],
  mainCourses: [
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in a rich, creamy tomato sauce',
      price: '16.99',
      image: '/butter-chicken.jpg'
    },
    {
      name: 'Palak Paneer',
      description: 'Cottage cheese cubes in creamy spinach gravy',
      price: '14.99',
      image: '/palak-paneer.jpg'
    },
    {
      name: 'Lamb Biryani',
      description: 'Fragrant rice dish with tender lamb and aromatic spices',
      price: '18.99',
      image: '/biryani.jpg'
    }
  ],
  breads: [
    {
      name: 'Butter Naan',
      description: 'Traditional Indian bread from the tandoor',
      price: '3.99',
      image: '/naan.jpg'
    },
    {
      name: 'Garlic Roti',
      description: 'Whole wheat bread with garlic',
      price: '3.49',
      image: '/roti.jpg'
    }
  ],
  desserts: [
    {
      name: 'Gulab Jamun',
      description: 'Sweet milk dumplings in rose syrup',
      price: '5.99',
      image: '/gulab-jamun.jpg'
    },
    {
      name: 'Kheer',
      description: 'Traditional rice pudding with nuts',
      price: '4.99',
      image: '/kheer.jpg'
    }
  ]
};

export default function Menu() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
          
          {/* Appetizers Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-orange-600">Appetizers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.appetizers.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-orange-600 font-semibold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Main Courses Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-orange-600">Main Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.mainCourses.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-orange-600 font-semibold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Breads Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-orange-600">Breads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.breads.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-orange-600 font-semibold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Desserts Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-orange-600">Desserts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.desserts.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-orange-600 font-semibold">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 