/*
Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).
*/
new Vue({
  el: '#app',
  data: {
    isAsc: false,
    arrowCodes: ['\u{2191}', '\u{2193}'],
    currentArrow: '',
    products: [
      {
        name: 'Fish',
        price: 200
      },
      {
        name: 'Tea',
        price: 300
      },
      {
        name: 'Chocolate',
        price: 100
      },
      {
        name: 'Water',
        price: 70
      }
    ]
  },
  computed: {

  },
  methods: {
    changeArrow() {
      this.currentArrow = this.arrowCodes[this.isAsc ? 0 : 1];
    },
    makeSort(isAsc) {
      this.products.sort((product1, product2) => isAsc ? product1.price - product2.price : product2.price - product1.price);
      this.changeArrow();
    }
  },
});