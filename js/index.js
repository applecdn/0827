Vue.createApp({
  data() {
    return {
      products: [{
          title: '美味烤雞',
          content: '飼養在深山裡的放山雞，本農場將雞高溫烘烤製成快速又方便的調理包，加熱僅可使用',
          img: './images/shop-a.jpg',
          price: 360,

          amountShow: 0,
        },
        {
          title: '新鮮牛乳',
          content: '飼養在深山裡的放山雞，本農場將雞高溫烘烤製成快速又方便的調理包，加熱僅可使用',
          img: './images/shop-b.jpg',
          price: 30,
          amountShow: 0,
        },
        {
          title: '放山雞雞蛋12入',
          content: '飼養在深山裡的放山雞，本農場將雞高溫烘烤製成快速又方便的調理包，加熱僅可使用',
          img: './images/shop-c.jpg',
          price: 120,
          amount: 0,
          amountShow: 0,
        },
        {
          title: '頻果12入',
          content: '香甜蘋果色澤紅潤，無添加臘模清洗後即可食用',
          img: './images/shop-d.jpg',
          price: 200,
          amountShow: 0,
        },
        {
          title: '夏日西瓜一顆',
          content: '夏日炎炎，消暑必備的西瓜一顆60元數量有限，要買要快！',
          img: './images/shop-e.jpg',
          price: 60,
          amountShow: 0,
        },
        {
          title: '有機菠菜1把',
          content: '有機菠菜農場栽種，無化學農藥讓您吃的健康又安心',
          img: './images/shop-f.jpg',
          price: 40,
          amountShow: 0,
        },
      ]
    }
  },
  methods: {
    minus(product) {
      product.amountShow--
      product.amountShow = (product.amountShow < 1) ? 0 : product.amountShow
    },
    plus(product) {
      product.amountShow++
      product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
    },
  },
  computed: {
    sub(){
      return this.products.map(data => data.price * data.amountShow)
    },
    num() {
      return this.amountShow
    },
    total() {
      return this.sub.reduce((a,b )=> a+b)
    },
  }

}).mount("#app");