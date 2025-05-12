const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '../public', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
};

const images = [
  {
    url: 'https://source.unsplash.com/1600x900/?indian,restaurant',
    filename: 'hero-image.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?butter,chicken',
    filename: 'butter-chicken.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?biryani',
    filename: 'biryani.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?naan,bread',
    filename: 'naan.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?samosa',
    filename: 'samosa.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?paneer,tikka',
    filename: 'paneer-tikka.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?onion,bhaji',
    filename: 'onion-bhaji.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?palak,paneer',
    filename: 'palak-paneer.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?roti',
    filename: 'roti.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?gulab,jamun',
    filename: 'gulab-jamun.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?kheer',
    filename: 'kheer.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?indian,restaurant,interior',
    filename: 'restaurant-interior.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?indian,restaurant,vintage',
    filename: 'restaurant-vintage.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?indian,chef',
    filename: 'chef-1.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?female,chef',
    filename: 'chef-2.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?restaurant,manager',
    filename: 'manager.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?restaurant,story',
    filename: 'restaurant-story.jpg'
  }
];

// Create public directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, '../public'))) {
  fs.mkdirSync(path.join(__dirname, '../public'));
}

// Download all images
Promise.all(images.map(img => downloadImage(img.url, img.filename)))
  .then(() => console.log('All images downloaded successfully!'))
  .catch(err => console.error('Error downloading images:', err)); 