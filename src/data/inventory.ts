import { Product } from '../typings/interfaces'

const products: Product[] = [
  {
    id: 1,
    name: 'Vue Socks',
    description: "These Vue socks will make sure you're looking stylish while creating the future.",
    details: ["50% cotton", "30% wool", "20% polyester"],
    displayImage: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-green-onWhite.jpg',
    displayPrice: 6.99,
    variants: [
      {
        id: 1,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-blue-onWhite.jpg',
        quantity: 0,
        size: 'xs'
      },
      {
        id: 2,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-blue-onWhite.jpg',
        quantity: 3,
        size: 's'
      },
      {
        id: 3,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-blue-onWhite.jpg',
        quantity: 8,
        size: 'm'
      },
      {
        id: 4,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-blue-onWhite.jpg',
        quantity: 6,
        size: 'l'
      },
      {
        id: 5,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-blue-onWhite.jpg',
        quantity: 1,
        size: 'xl'
      },
      {
        id: 6,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-green-onWhite.jpg',
        quantity: 2,
        size: 'xs'
      },
      {
        id: 7,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-green-onWhite.jpg',
        quantity: 5,
        size: 's'
      },
      {
        id: 8,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-green-onWhite.jpg',
        quantity: 16,
        size: 'm'
      },
      {
        id: 9,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-green-onWhite.jpg',
        quantity: 12,
        size: 'l'
      },
      {
        id: 10,
        image: 'https://vue-store-page-demo.netlify.app/assets/vmSocks-green-onWhite.jpg',
        quantity: 4,
        size: 'xl'
      }
    ]
  },
  {
    id: 2,
    name: 'Hello World Hat',
    description: 'Get your head in the game with this well-constructed baseball-style cap.',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg',
    displayPrice: 23.99,
    variants: []
  },
  {
    id: 3,
    name: 'Learn From Home Joggers',
    description: 'As one half of our favorite fit for 2020, these joggers are perfect for staying cozy while you code. Complete the getup with a matching hoodie and you\'re good to go (or better yet, stay).',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sweatpants.jpg',
    displayPrice: 45.99,
    variants: []
  },
  {
    id: 4,
    name: 'Java Tee',
    description: 'For decades, the humble tee-shirt has allowed humans to wear their passions proudly for all to see. With a tee like this, you can subtly show the world something about yourself that you should truly be proud of: you know Java.',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/java-tee.jpg',
    displayPrice: 17.99,
    variants: []
  },
  {
    id: 5,
    name: 'Python Tee',
    description: 'For decades, the humble tee-shirt has allowed humans to wear their passions proudly for all to see. With a tee like this, you can subtly show the world something about yourself that you should truly be proud of: you know Python.',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/python-tee.jpg',
    displayPrice: 17.99,
    variants: []
  },
  {
    id: 6,
    name: 'SQL Tee',
    description: 'For decades, the humble tee-shirt has allowed humans to wear their passions proudly for all to see. With a tee like this, you can subtly show the world something about yourself that you should truly be proud of: you know SQL.',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sql-tee.jpg',
    displayPrice: 17.99,
    variants: []
  },
  {
    id: 7,
    name: 'Hello World Hoodie',
    description: 'Learning to code should feel good — and what feels better than being wrapped up in a big ol\' hoodie? Grab yourself one of these to greet the world with a friendly “Hello” or to hide from everyone under the oversized hood.',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hoodie.jpg',
    displayPrice: 49.99,
    variants: []
  }
]

export default products
