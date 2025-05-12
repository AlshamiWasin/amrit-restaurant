import Image from 'next/image';
import Link from 'next/link';
import PlaceholderImage from './PlaceholderImage';

// This is mock data - in a real application, this would come from the Instagram API
const instagramPosts = [
  {
    id: '1',
    imageUrl: new PlaceholderImage({ text: 'Plat Signature', width: 400, height: 400 }),
    caption: 'Notre nouveau plat signature 🍽️ #AmritRestaurant #GastronomieIndienne',
    likes: 124,
    comments: 12
  },
  {
    id: '2',
    imageUrl: new PlaceholderImage({ text: 'Chef en Action', width: 400, height: 400 }),
    caption: 'Le Chef en pleine création 👨‍🍳 #CuisineIndienne #ChefLife',
    likes: 98,
    comments: 8
  },
  {
    id: '3',
    imageUrl: new PlaceholderImage({ text: 'Ambiance', width: 400, height: 400 }),
    caption: 'L\'ambiance parfaite pour votre soirée ✨ #Restaurant #Paris',
    likes: 156,
    comments: 14
  },
  {
    id: '4',
    imageUrl: new PlaceholderImage({ text: 'Desserts', width: 400, height: 400 }),
    caption: 'Découvrez nos desserts traditionnels 🍨 #Dessert #Indien',
    likes: 203,
    comments: 18
  },
  {
    id: '5',
    imageUrl: new PlaceholderImage({ text: 'Événements', width: 400, height: 400 }),
    caption: 'Soirée spéciale ce weekend 🎉 #EventPrivé #AmritRestaurant',
    likes: 167,
    comments: 21
  },
  {
    id: '6',
    imageUrl: new PlaceholderImage({ text: 'Cocktails', width: 400, height: 400 }),
    caption: 'Nos cocktails signatures vous attendent 🍸 #Cocktails #Bar',
    likes: 145,
    comments: 11
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Suivez-nous sur Instagram</h2>
        <p className="text-gray-600">
          Découvrez notre quotidien et nos créations sur{' '}
          <Link 
            href="https://instagram.com/amrit_restaurant" 
            target="_blank"
            className="text-orange-600 hover:text-orange-700"
          >
            @amrit_restaurant
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instagramPosts.map((post) => (
          <div 
            key={post.id} 
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <div className="relative aspect-square">
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-sm text-center">{post.caption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="https://instagram.com/amrit_restaurant"
          target="_blank"
          className="inline-flex items-center text-orange-600 hover:text-orange-700"
        >
          <span className="mr-2">Voir plus sur Instagram</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 