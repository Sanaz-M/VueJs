Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      image: './assets/gray.jpg',
      inventory: 5,
      details: ['50% cotton', '30% wool', '20% polyster'],
      variants: [
        {id: 223, color: 'gray'},
        {id: 224, color: 'purple'}
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    }
  }
}).mount('#app')
