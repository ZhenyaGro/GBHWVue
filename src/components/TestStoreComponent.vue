<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
export default {
  name: 'TestStore',
  computed: {
    counter() {
      return this.$store.state.count;
    }
  },
  methods: {
    increase() {
      this.$store.commit('increment');
    },
    decrease() {
      this.$store.commit('decrement');
    }
  },
}
</script>

<style lang="scss" scoped></style>