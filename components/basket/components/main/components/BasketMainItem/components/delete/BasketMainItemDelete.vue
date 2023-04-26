<template>
  <div class="BasketMainItem__delete">
    <button class="BasketMainItem__deleteButton" :disabled="loading" @click.prevent="deleteHandler">
      <DeleteSVG />
    </button>
  </div>
</template>
<script>
import DeleteSVG from './components/DeleteSVG.vue'

export default {
  name: 'BasketMainItemDelete',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    loading() {
      return this.$store.state.basket.laoding
    },
  },
  methods: {
    deleteHandler() {
      this.$store.dispatch('basket/deleteBasketProduct', this.content.id)
    },
  },
  components: { DeleteSVG },
}
</script>
<style lang="css">
.BasketMainItem__delete {
  display: flex;
  align-items: flex-start;
}
.BasketMainItem__deleteButton {
  background-color: transparent;
  border: none;
}
.BasketMainItem__deleteButton:hover {
  cursor: pointer;
}
</style>
