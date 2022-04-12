Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      image: './assets/gray.jpg',
      inventory: 5,
      details: ['50% cotton', '30% wool', '20% polyster'],
      variants: [
        { id: 223, color: 'gray', image: './assets/gray.jpg' },
        { id: 224, color: 'purple', image: './assets/purple.jpg' }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImg(variantImg) {
      this.image = variantImg;
    }
  }
}).mount('#app')
