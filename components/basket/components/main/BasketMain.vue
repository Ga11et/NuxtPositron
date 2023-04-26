<template>
  <div class="BasketMain">
    <BasketMainItem v-for="item in products" :key="item.id" :content="item" />
  </div>
</template>
<script>
import BasketMainItem from './components/BasketMainItem/BasketMainItem.vue'

export default {
  components: { BasketMainItem },
  name: 'BasketMain',
  computed: {
    products() {
      return this.$store.state.basket.products
    },
  },
}
</script>
<style lang="css"></style>
