import { Product } from '../typings/interfaces'

const products: Product[] = [
  {
    id: 1,
    name: 'Vue Socks',
    description: "These Vue socks will make sure you're looking stylish while creating the future",
    details: ["50% cotton", "30% wool", "20% polyester"],
    displayImage: './src/assets/images/socks_green.jpg',
    displayPrice: 6.99,
    variants: [
      {
        id: 1,
        image: './src/assets/images/socks_blue.jpg',
        quantity: 0,
        size: 'xs'
      },
      {
        id: 2,
        image: './src/assets/images/socks_blue.jpg',
        quantity: 3,
        size: 's'
      },
      {
        id: 3,
        image: './src/assets/images/socks_blue.jpg',
        quantity: 8,
        size: 'm'
      },
      {
        id: 4,
        image: './src/assets/images/socks_blue.jpg',
        quantity: 6,
        size: 'l'
      },
      {
        id: 5,
        image: './src/assets/images/socks_blue.jpg',
        quantity: 1,
        size: 'xl'
      },
      {
        id: 6,
        image: './src/assets/images/socks_green.jpg',
        quantity: 2,
        size: 'xs'
      },
      {
        id: 7,
        image: './src/assets/images/socks_green.jpg',
        quantity: 5,
        size: 's'
      },
      {
        id: 8,
        image: './src/assets/images/socks_green.jpg',
        quantity: 16,
        size: 'm'
      },
      {
        id: 9,
        image: './src/assets/images/socks_green.jpg',
        quantity: 12,
        size: 'l'
      },
      {
        id: 10,
        image: './src/assets/images/socks_green.jpg',
        quantity: 4,
        size: 'xl'
      }
    ]
  },
  {
    id: 2,
    name: 'Hello World Hat',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg',
    displayPrice: 23.99,
    variants: []
  },
  {
    id: 3,
    name: 'Learn From Home Joggers',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sweatpants.jpg',
    displayPrice: 45.99,
    variants: []
  },
  {
    id: 4,
    name: 'Java Tee',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/java-tee.jpg',
    displayPrice: 17.99,
    variants: []
  },
  {
    id: 5,
    name: 'Python Tee',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/python-tee.jpg',
    displayPrice: 17.99,
    variants: []
  },
  {
    id: 6,
    name: 'SQL Tee',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sql-tee.jpg',
    displayPrice: 17.99,
    variants: []
  },
  {
    id: 7,
    name: 'Hello World Hoodie',
    displayImage: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hoodie.jpg',
    displayPrice: 49.99,
    variants: []
  }
]

export default products
