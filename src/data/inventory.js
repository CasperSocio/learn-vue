const vueSocks = {
  name: 'Vue Socks',
  price: 6.99
}

const vueSocksBlue = {
  ...vueSocks,
  image: './assets/images/socks_blue.jpg'
}
const vueSocksGreen = {
  ...vueSocks,
  image: './assets/images/socks_green.jpg'
}

const inventory = [
  {...vueSocksBlue, id: 1, size: 'xs', quantity: 0},
  {...vueSocksBlue, id: 2, size: 's', quantity: 3},
  {...vueSocksBlue, id: 3, size: 'm', quantity: 8},
  {...vueSocksBlue, id: 4, size: 'l', quantity: 6},
  {...vueSocksBlue, id: 5, size: 'xl', quantity: 1},
  {...vueSocksGreen, id: 6, size: 'xs', quantity: 2},
  {...vueSocksGreen, id: 7, size: 's', quantity: 5},
  {...vueSocksGreen, id: 8, size: 'm', quantity: 16},
  {...vueSocksGreen, id: 9, size: 'l', quantity: 12},
  {...vueSocksGreen, id: 10, size: 'xl', quantity: 4},
]

export default inventory
