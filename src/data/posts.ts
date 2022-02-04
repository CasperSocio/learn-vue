export interface Post {
  content: string
  id: number
  meta: PostMeta
  title: string
}

interface PostMeta {
  author: string
  createdAt: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Hello World!',
    content: 'This is my first post.',
    meta: {
      author: 'Casper',
      createdAt: 'Fri Feb 04 2022 14:47:08 GMT+0100 (Central European Standard Time)'
    },
  },
  {
    id: 2,
    title: 'Card Components',
    content: 'So I\'m working on a new Card component for the Posts page. The code test is right around the corner.',
    meta: {
      author: 'Casper',
      createdAt: 'Fri Feb 04 2022 15:37:39 GMT+0100 (Central European Standard Time)'
    },
  },
  {
    id: 3,
    title: 'Code Challenge',
    content: 'It\'s friday and I recieved the code challenge. Lucky for me, the challenge is to make a web-shop, which is something I\'ve already been working on for a couple of days!',
    meta: {
      author: 'Casper',
      createdAt: 'Fri Feb 04 2022 16:52:36 GMT+0100 (Central European Standard Time)'
    },
  },
]

export default posts
