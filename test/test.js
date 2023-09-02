Vue.component('list-item', {
  props: ['itemData'],

  methods: {
    removeItem(id) {
      this.$emit('removeItem)', id);
    }
  },

  template: `
  <div>
    <p>{{ itemData.title }}</p>
    <button @click="removeItem(itemData.id)">X</button>
  </div>`,
});

Vue.component('todo-list', {
  props: {},

  data() {
    return {
      items: [],
      newItem: '',
    }
  },

  template: `
  <div>
    <h2>Todo list</h2>
    <input type="text" v-model="newItem">
    <button @click="add">Add</button>
    <div v-for="{ id, title } in items">{{ title }}
    <button @click="removeItem(id)">X</button>
    </div>
  </div>
  `,

  methods: {
    add() {
      const newItem = {
        id: Date.now(),
        title: this.newItem,
      };
      this.items.push(newItem);
      this.newItem = '';
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  },
});

new Vue({
  el: '#app',
  data: {},
  methods: {
  }
});