interface Post {
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
    id: 0,
    title: 'Hello World!',
    content: 'This is my first post.',
    meta: {
      author: 'Casper',
      createdAt: 'Fri Feb 04 2022 14:47:08 GMT+0100 (Central European Standard Time)'
    },
  }
]
