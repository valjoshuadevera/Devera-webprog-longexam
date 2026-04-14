import proRunningShoes from '../assets/img/prorunningshoes.jpg';
import basketball from '../assets/img/basketball.jpg';
import trainingShort from '../assets/img/trainingshort.jpg';
import compressionShirt from '../assets/img/compressionshirt.jpg';
import soccerBall from '../assets/img/footballsoccerball.jpg';
import sportsHoodie from '../assets/img/sporthoodie.jpg'; 
import duffleBag from '../assets/img/sportdufflebag.jpg';
import ankleSocks from '../assets/img/anklesockspack.jpg';

const products = [
  {
    name: 'pro-runner-shoes',
    title: 'Pro Runner Shoes',
    category: 'Footwear',
    price: 'PHP 2,499',
    stock: 'In stock',
    image: proRunningShoes,
    content: [
      'Lightweight running shoes designed for speed, comfort, and daily training.',
      'Breathable mesh upper with cushioned sole for impact protection.',
      'Perfect for jogging, gym workouts, and active lifestyles.',
    ],
  },
  {
    name: 'street-basketball',
    title: 'Street Basketball',
    category: 'Sports Equipment',
    price: 'PHP 799',
    stock: 'In stock',
    image: basketball,
    content: [
      'Durable rubber basketball built for outdoor courts and rough surfaces.',
      'Provides strong grip and consistent bounce for better control.',
      'Ideal for casual games and competitive street matches.',
    ],
  },
  {
    name: 'training-shorts',
    title: 'Training Shorts',
    category: 'Apparel',
    price: 'PHP 599',
    stock: 'In stock',
    image: trainingShort,
    content: [
      'Comfortable athletic shorts made for movement and flexibility.',
      'Quick-dry fabric keeps you cool during intense workouts.',
      'Great for basketball, running, and gym sessions.',
    ],
  },
  {
    name: 'compression-shirt',
    title: 'Compression Shirt',
    category: 'Apparel',
    price: 'PHP 899',
    stock: 'In stock',
    image: compressionShirt,
    content: [
      'Slim-fit compression shirt designed to support muscles during activity.',
      'Moisture-wicking fabric helps keep sweat away from the body.',
      'Best for training, sports performance, and recovery.',
    ],
  },
  {
    name: 'football-soccer-ball',
    title: 'Soccer Match Ball',
    category: 'Sports Equipment',
    price: 'PHP 999',
    stock: 'Low stock',
    image: soccerBall,
    content: [
      'Official-size soccer ball designed for matches and training.',
      'Strong stitching ensures durability and long-lasting use.',
      'Suitable for grass fields and futsal courts.',
    ],
  },
  {
    name: 'sports-hoodie',
    title: 'Sports Hoodie',
    category: 'Apparel',
    price: 'PHP 1,299',
    stock: 'Preorder',
    image: sportsHoodie,
    content: [
      'Warm and stylish hoodie for athletes and casual wear.',
      'Soft inner lining provides comfort during cool weather.',
      'Perfect for workouts, travel, or everyday use.',
    ],
  },
  {
    name: 'gym-duffle-bag',
    title: 'Gym Duffle Bag',
    category: 'Bags',
    price: 'PHP 1,099',
    stock: 'In stock',
    image: duffleBag,
    content: [
      'Spacious duffle bag for gym clothes, shoes, and accessories.',
      'Includes separate compartment for shoes or wet items.',
      'Ideal for workouts, sports training, and travel.',
    ],
  },
  {
    name: 'ankle-socks-pack',
    title: 'Ankle Socks Pack (3-in-1)',
    category: 'Accessories',
    price: 'PHP 299',
    stock: 'In stock',
    image: ankleSocks,
    content: [
      'Comfortable ankle socks designed for sports and daily wear.',
      'Breathable fabric helps reduce sweat and odor.',
      'Comes in a pack of three for everyday use.',
    ],
  },
];

export default products;