new Vue({
  el: '#app',
  data: {
    buttonText: 'Перевернуть',
    list: ['Элемент списка', 'Еще один элемент списка'],
    liText: 'Новый элемент списка',
  },
  methods: {
    reverseText() {
      this.buttonText = this.buttonText.split('').reverse().join('');
    },
    addNewElement() {
      this.list.push(this.liText);
    },
    removeElement(index) {
      this.list.splice(index, 1);
    }
  },
});